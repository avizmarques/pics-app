import { Dispatch, isValidElement, SetStateAction } from "react";
import Link from "next/link";
import styled from "styled-components";

import { Photo } from "../types";
import HeartIcon from "./HeartIcon";

export default function PhotoCard({
  photo,
  setFavorites,
  favorites,
}: {
  photo: Photo;
  setFavorites: Dispatch<SetStateAction<string[]>>;
  favorites: string[];
}) {
  const isFav = favorites.includes(photo.urls.regular);

  const toggleFav: (isFav: boolean, id: string) => void = (isFav, url) => {
    if (isFav) {
      setFavorites(favorites.filter((fav) => fav !== url));
    } else {
      setFavorites([...favorites, photo.urls.regular]);
    }
  };

  return (
    <div className="h-48 md:h-80 rounded-lg overflow-hidden relative">
      <Link href={`/photos/${photo.id}`} passHref>
        <PhotoBg url={photo.urls.regular} />
      </Link>
      <button
        className="outline-none h-9 w-9 bg-white rounded-full absolute bottom-5 right-5 flex items-center justify-center"
        onClick={() => toggleFav(isFav, photo.urls.regular)}
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
