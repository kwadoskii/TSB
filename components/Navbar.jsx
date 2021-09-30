import { useState } from "react";
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
    <nav className="border-b border-gray-300 z-10">
      <div className="bg-white h-[56px] m-0 w-full flex justify-between px-1 gap-2 py-1 lg:py-5 lg:px-6 mx-auto max-w-7xl relative">
        <div className="flex justify-start items-center flex-1 gap-2">
          <Link href="/">
            <a className="outline-none">
              <p className="cursor-pointer select-none bg-black p-[5px] rounded font-semibold text-white text-lg outline-none">
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
            <a className="outline-none">
              <button className="border-none py-3 px-4 bg-blue-700 text-white font-medium text md:text-sm mr-3 cursor-pointer rounded-md hover:bg-blue-800 transition duration-100 ease-out h-10 items-center flex">
                Create Post
              </button>
            </a>
          </Link>
          <div
            className="relative w-9 h-9 cursor-pointer rounded-full none"
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
            <div className="absolute left-auto top-14 right-2 lg:right-6 bg-white my-shadow-drop text-black border border-black rounded-md z-[400] md:w-[250px] w-10/12">
              <NavbarDropdown />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
