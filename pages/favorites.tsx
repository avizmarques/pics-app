import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

export default function Favorites() {
  return (
    <div>
      <Head>
        <title>Favorite pics</title>
        <meta name="description" content="My favorite pictures" />
      </Head>
      <main className="px-4 pt-8 flex flex-col">
        <div className="mb-12">
          <Link href="/" passHref>
            <SearchBar />
          </Link>
        </div>
        <div className="font-display text-2xl font-semibold text-dark-gray mb-4">
          Favorites
        </div>
        <div className="h-screen w-full grid grid-cols-2 gap-4 md:grid-cols-4"></div>
      </main>
      <Footer />
    </div>
  );
}
