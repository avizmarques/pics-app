import { useState, useEffect } from "react";
import { Favorite } from "../types";

export function useFavs() {
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
  }, [favorites]);

  return { favorites, setFavorites };
}
