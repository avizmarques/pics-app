import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { Favorite } from "../types";
import PhotoCard from "../components/PhotoCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const localFavs = localStorage.getItem("favorites");
    const parsedFavs = localFavs && JSON.parse(localFavs);

    if (parsedFavs) {
      setFavorites(parsedFavs);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Favorite pics</title>
        <meta name="description" content="My favorite pictures" />
      </Head>
      <main className="px-6 sm:px-8 md:px-12 lg:px-24 pt-8 flex flex-col">
        <Link href="/" passHref>
          <div className="mb-12 flex sm:justify-end">
            <SearchBar />
          </div>
        </Link>
        <div className="font-display text-2xl font-semibold text-dark-gray mb-4 md:mb-6 lg:mb-8">
          Favorites
        </div>
        <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {favorites &&
            favorites.length > 0 &&
            favorites.map((fav, i) => (
              <PhotoCard
                key={i}
                url={fav.url}
                id={fav.id}
                setFavorites={setFavorites}
                favorites={favorites}
              />
            ))}
        </div>
        <div className="h-52" />
      </main>
      <Footer />
    </div>
  );
}
