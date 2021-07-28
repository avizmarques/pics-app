import { Dispatch, SetStateAction } from "react";

import SearchIcon from "./SearchIcon";

export default function SearchBar({
  search,
  setSearch,
}: {
  search?: string;
  setSearch?: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="bg-light-gray rounded-full py-3 px-6 text-dark-gray text-sm flex justify-between items-center w-full sm:w-72">
      <input
        value={search}
        onChange={setSearch ? (e) => setSearch(e.target.value) : () => {}}
        className="bg-transparent outline-none w-full"
        placeholder="Search photos"
        autoFocus
      />
      <div className="h-6">
        <SearchIcon />
      </div>
    </div>
  );
}
