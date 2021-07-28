import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { Photo } from "../types";

type Props = {
  search: string;
  page: number;
};

export function useFetch({ search, page }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [results, setResults] = useState<Photo[]>([]);

  const sendQuery = useCallback(
    async (search: string) => {
      try {
        setLoading(true);

        const { data: dailyPhotos } = await axios.get(
          `https://api.unsplash.com/photos?page=${page}&client_id=oqZA5hBGwDX5N2bzWxoZ8Ni4oaC1gFtuRa0bV4qjBbk`
        );

        const { data: photos } = await axios.get(
          `https://api.unsplash.com/search/photos?query=${search}&page=${page}&client_id=oqZA5hBGwDX5N2bzWxoZ8Ni4oaC1gFtuRa0bV4qjBbk`
        );

        if (search.length === 0) {
          setResults((prev) => [...prev, ...dailyPhotos]);
        } else {
          setResults((prev) => [...prev, ...photos.results]);
        }

        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    },
    [search, page]
  );

  useEffect(() => {
    sendQuery(search);
  }, [search, sendQuery, page]);

  return { loading, error, results };
}
