import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NavbarDropdown from "./NavbarDropdown";
import useVisible from "../hooks/useVisible";
import Input from "../components/Input";
import Image from "next/image";

export default function Navbar() {
  const { isVisible, ref, setIsVisible } = useVisible();
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleShowHideNavMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    router.push({ pathname: "/search", query: { q: searchValue } });
  };

  return (
    <nav className="border-b border-gray-300 z-10 bg-white h-[56px] m-0 w-full flex justify-between px-1 gap-2 py-1 lg:py-4 lg:px-6 mx-auto">
      <div className="flex justify-start items-center flex-1 gap-2">
        <Link href="/">
          <a>
            <p className="cursor-pointer select-none bg-black p-[5px] rounded font-semibold text-white text-lg">
              TSB
            </p>
          </a>
        </Link>

        <div className="flex-grow-0 w-full lg:w-1/2">
          <form>
            <Input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search..."
              value={searchValue}
            />
            <button type="submit" onClick={handleSearch} className="hidden"></button>
          </form>
        </div>
      </div>

      <div className="flex items-center">
        <Link href="/write" passHref>
          <a>
            <button className="border-none p-3 bg-blue-700 text-white font-medium text-sm mr-3 cursor-pointer rounded-md hover:bg-blue-800 transition duration-100 ease-out">
              Create post
            </button>
          </a>
        </Link>
        <div
          className="relative w-10 h-10 cursor-pointer rounded-full none"
          onClick={handleShowHideNavMenu}
          ref={ref}
        >
          <Image
            alt="user avatar"
            className="rounded-full"
            layout="fill"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png"
          />
        </div>

        {isVisible && (
          <div className="absolute left-auto top-14 right-6 bg-white my-shadow-drop text-black border-2 border-black rounded-md z-[400] sm:w-[250px] w-10/12">
            <NavbarDropdown />
          </div>
        )}
      </div>
    </nav>
  );
}
