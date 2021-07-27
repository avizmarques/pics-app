import { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from "axios";

import { Photo } from "../types";

import SearchBar from '../components/SearchBar'
import PhotoCard from '../components/PhotoCard';

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Photo[]>([])

  const getResults = async () => {
    try {

      const { data: dailyPhotos } = await axios.get(`https://api.unsplash.com/photos?client_id=oqZA5hBGwDX5N2bzWxoZ8Ni4oaC1gFtuRa0bV4qjBbk`)

      const { data: photos } = await axios.get(`https://api.unsplash.com/search/photos?query=${search}&client_id=oqZA5hBGwDX5N2bzWxoZ8Ni4oaC1gFtuRa0bV4qjBbk`);
      
      const displayPhotos = photos.results.length > 0 ? photos.results : dailyPhotos;
      
      setResults(displayPhotos);
    } catch (e) {
      console.error(e);
    }
  }

  console.log(results);

  useEffect(() => {
    getResults()
  }, [search])

  return (
    <div className="">
      <Head>
        <title>Pictures app</title>
        <meta name="description" content="Alex's pictures app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 pt-8 flex flex-col">
        <div className="mb-12">
          <SearchBar search={search} setSearch={setSearch}/>
        </div>
        <div className="font-display text-xl text-dark-gray mb-4">Daily pictures</div>
        <div className="h-screen w-full grid grid-cols-2 gap-4 md:grid-cols-4">{results && results.length > 0 && results.map((photo, i) => <PhotoCard key={i} photo={photo} />)}</div>
      </main>

      <footer className="">
       
      </footer>
    </div>
  )
}
