import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NavbarDropdown from "./NavbarDropdown";
import useVisible from "../hooks/useVisible";
import Input from "../components/Input";
import Image from "next/image";
import { BellIcon, PlusIcon } from "@heroicons/react/outline";

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

  const handleInputChange = (e) => setSearchValue(e.target.value);

  return (
    <nav className="border-b border-gray-300 z-10 select-none">
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
                onChange={handleInputChange}
                placeholder="Search..."
                value={searchValue}
                clearButton
              />
              <button type="submit" onClick={handleSearch} className="hidden"></button>
            </form>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* <Link href="/write" passHref>
            <a className="outline-none border-none py-3 px-4 bg-blue-700 text-white font-medium text md:text-sm cursor-pointer rounded-md hover:bg-blue-800 transition duration-100 ease-out h-10 items-center md:flex hidden">
              Create Post
            </a>
          </Link> */}
          <div className="flex items-center gap-2">
            <Link href="/enter" passHref>
              <a className="outline-none border-none py-3 px-4 text-gray-600 font-medium text md:text-sm cursor-pointer rounded-md hover:bg-blue-100/90 hover:text-blue-500 transition duration-100 ease-out h-10 items-center md:flex hidden">
                Log in
              </a>
            </Link>
            <Link href="/enter?state=new" passHref>
              <a className="outline-none border-none py-3 px-4 bg-white text-blue-600 ring-1 ring-blue-600 font-bold text-xl text md:text-sm cursor-pointer rounded-md hover:bg-blue-600 hover:text-white transition duration-100 ease-out h-10 items-center md:flex hidden">
                Create account
              </a>
            </Link>
          </div>

          <Link href="/write" passHref>
            <a className="bg-blue-700 text-white rounded-lg p-1 md:hidden">
              <PlusIcon className="h-6" />
            </a>
          </Link>

          <div
            className="text-gray-700 relative cursor-pointer rounded-full hover:bg-gray-100 p-1 hover:text-gray-900"
            onClick={() => router.push("/notifications")}
          >
            <BellIcon className="h-7" />
            <span className="bg-red-600 text-white absolute rounded-md p-1 text-xs -top-2 -right-2">
              110
            </span>
          </div>

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
