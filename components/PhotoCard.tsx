import { Dispatch, isValidElement, SetStateAction } from "react";
import Link from "next/link";
import styled from "styled-components";

import { Favorite, Photo } from "../types";
import HeartIcon from "./HeartIcon";

export default function PhotoCard({
  id,
  url,
  setFavorites,
  favorites,
}: {
  id: string;
  url: string;
  setFavorites: Dispatch<SetStateAction<Favorite[]>>;
  favorites: Favorite[];
}) {
  const isFav = favorites.some((fav) => fav.id === id);

  const toggleFav: (isFav: boolean, id: string, url: string) => void = (
    isFav,
    id,
    url
  ) => {
    if (isFav) {
      setFavorites(favorites.filter((fav) => fav.id !== id));
    } else {
      setFavorites([...favorites, { id, url }]);
    }
  };

  return (
    <div className="h-48 md:h-80 rounded-lg overflow-hidden relative">
      <Link href={`/photos/${id}`} passHref>
        <PhotoBg url={url} />
      </Link>
      <button
        className="outline-none h-9 w-9 bg-white rounded-full absolute bottom-5 right-5 flex items-center justify-center"
        onClick={() => {
          console.log(url);
          toggleFav(isFav, id, url);
        }}
      >
        <div className="h-4">
          <HeartIcon
            fill={isFav ? "#1B3CEA" : "none"}
            color={isFav ? "#1B3CEA" : "#323F4B"}
          />
        </div>
      </button>
    </div>
  );
}

const PhotoBg = styled.div`
  height: 100%;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
