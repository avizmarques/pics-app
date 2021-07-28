import { Dispatch, SetStateAction } from "react";

import SearchIcon from "./SearchIcon";

export default function SearchBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="bg-light-gray rounded-full py-3 px-6 text-dark-gray text-sm flex justify-between items-center">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent outline-none w-full"
        placeholder="Search photos"
      />
      <div className="h-6">
        <SearchIcon />
      </div>
    </div>
  );
}
