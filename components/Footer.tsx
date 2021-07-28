import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

import HeartIcon from "./HeartIcon";
import SearchIcon from "./SearchIcon";

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <div className="z-50 backdrop-filter backdrop-blur-lg w-screen h-24 fixed bottom-0">
      <div className="bg-white w-full h-full opacity-70" />
      <div className="absolute bottom-0 left-0 h-full w-full flex items-center px-8">
        <div className="flex flex-col justify-center items-center">
          <div className="h-6">
            <SearchIcon color={"#1B3CEA"} strokeWidth="3" />
          </div>
          <div className="text-sm text-blue font-semibold mt-2">Search</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-6">
            <HeartIcon
              color={pathname === "/favorites" ? "#1B3CEA" : "#1F2933"}
              strokeWidth={pathname === "/favorites" ? "3" : "2"}
            />
          </div>
          <div
            className={cn(
              "text-sm mt-2",
              pathname === "favorites"
                ? "font-semibold text-blue"
                : "text-dark-gray"
            )}
          >
            Favorites
          </div>
        </div>
      </div>
    </div>
  );
}
