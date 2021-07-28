import { useContext } from "react";
import { FavContext } from "./_app";

export default function Favorites() {
  const { favorites } = useContext(FavContext);

  return <div>show favs</div>;
}
