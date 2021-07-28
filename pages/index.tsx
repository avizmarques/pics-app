import React, { useState, useEffect, useRef, useCallback } from "react";
import Head from "next/head";

import { Favorite } from "../types";

import SearchBar from "../components/SearchBar";
import PhotoCard from "../components/PhotoCard";
import Footer from "../components/Footer";
import { useFetch } from "../lib/useFetch";
import { useFavs } from "../lib/useFavs";

export default function Home() {
  const { favorites, setFavorites } = useFavs();

  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { loading, error, results } = useFetch({ search, page });

  const loader = useRef<any>(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];

    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);

  return (
    <div>
      <Head>
        <title>Pictures app</title>
        <meta name="description" content="Alex's pictures app" />
      </Head>

      <main className="px-6 sm:px-8 md:px-12 lg:px-24 pt-8 flex flex-col">
        <div className="mb-12 flex sm:justify-end">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="font-display text-2xl font-semibold text-dark-gray mb-4 md:mb-6 lg:mb-8">
          {search.length > 0
            ? `Search results for "${search}"`
            : "Daily pictures"}
        </div>
        <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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
        </div>
        <div ref={loader} />
        <div className="h-52" />
      </main>
      <Footer />
    </div>
  );
}
