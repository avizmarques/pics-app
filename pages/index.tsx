import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

import { Favorite, Photo } from "../types";

import SearchBar from "../components/SearchBar";
import PhotoCard from "../components/PhotoCard";
import Footer from "../components/Footer";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getResults: (search: string, page: number) => void = async (
    query,
    page
  ) => {
    try {
      await setLoading(true);

      const { data: dailyPhotos } = await axios.get(
        `https://api.unsplash.com/photos?client_id=oqZA5hBGwDX5N2bzWxoZ8Ni4oaC1gFtuRa0bV4qjBbk`
      );

      const { data: photos } = await axios.get(
        `https://api.unsplash.com/search/photos?query=${search}&page=1&client_id=oqZA5hBGwDX5N2bzWxoZ8Ni4oaC1gFtuRa0bV4qjBbk`
      );

      const displayPhotos =
        photos.results.length > 0 ? photos.results : dailyPhotos;

      setResults(displayPhotos);
    } catch (e) {
      setError(true);
      console.error(e);
    }
  };

  useEffect(() => {
    getResults(search, page);
  }, [search, page]);

  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const localFavs = localStorage.getItem("favorites");
    const parsedFavs = localFavs && JSON.parse(localFavs);

    if (parsedFavs) {
      setFavorites(parsedFavs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(localStorage);
  }, [favorites]);

  return (
    <div className="">
      <Head>
        <title>Pictures app</title>
        <meta name="description" content="Alex's pictures app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 pt-8 flex flex-col">
        <div className="mb-12">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="font-display text-2xl font-semibold text-dark-gray mb-4">
          Daily pictures
        </div>
        <div className="h-screen w-full grid grid-cols-2 gap-4 md:grid-cols-4">
          {results &&
            results.length > 0 &&
            results.map((photo, i) => (
              <PhotoCard
                key={i}
                url={photo.urls.regular}
                id={photo.id}
                setFavorites={setFavorites}
                favorites={favorites}
              />
            ))}
          {/* {favorites &&
            favorites.length > 0 &&
            favorites.map((fav, i) => (
              <PhotoCard
                key={i}
                url={fav.url}
                id={fav.id}
                setFavorites={setFavorites}
                favorites={favorites}
              />
            ))} */}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
