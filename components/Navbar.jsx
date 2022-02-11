import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NavbarDropdown from "./NavbarDropdown";
import useVisible from "../hooks/useVisible";
import Input from "../components/Input";
import Image from "next/image";
import { BellIcon, PlusIcon } from "@heroicons/react/outline";
import auth from "../apis/authService";

export default function Navbar({ hideSearch = false }) {
  const { isVisible, ref, setIsVisible } = useVisible();
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
  }, []);

  const handleShowHideNavMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    router.push({ pathname: "/search", query: { q: searchValue } });
  };

  const handleInputChange = (e) => setSearchValue(e.target.value);

  return (
    <nav className="z-10 border-b border-gray-300 select-none">
      <div className="h-[56px] relative flex gap-2 justify-between m-0 mx-auto px-1 py-1 w-full max-w-7xl bg-white lg:px-6 lg:py-5">
        <div className="flex flex-1 gap-2 items-center justify-start">
          <Link href="/">
            <a className="outline-none">
              <p className="p-[5px] text-white text-lg font-semibold bg-black rounded outline-none cursor-pointer select-none">
                TSB
              </p>
            </a>
          </Link>

          {!hideSearch && (
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
          )}
        </div>

        <div className="flex gap-2 items-center md:gap-4">
          {user && (
            <Link href="/write" passHref>
              <a className="text hidden items-center px-4 py-3 h-10 text-white font-medium bg-blue-700 hover:bg-blue-800 border-none rounded-md outline-none cursor-pointer transition duration-100 ease-out md:flex md:text-sm">
                Create Post
              </a>
            </Link>
          )}
          {/* <Link href="/write" passHref>
            <a className="bg-blue-700 text-white rounded-lg p-1 md:hidden">
              <PlusIcon className="h-6" />
            </a>
          </Link> */}

          {!user && (
            <div className="flex gap-2 items-center">
              <Link href="/enter" passHref>
                <a className="text hover:bg-blue-100/90 hidden items-center px-4 py-3 h-10 hover:text-blue-500 text-gray-600 font-medium border-none rounded-md outline-none cursor-pointer transition duration-100 ease-out md:flex md:text-sm">
                  Log in
                </a>
              </Link>
              <Link href="/enter?state=new" passHref>
                <a className="text hidden items-center px-4 py-3 h-10 text-blue-600 hover:text-white text-xl font-bold hover:bg-blue-600 bg-white border-none rounded-md outline-none cursor-pointer transition duration-100 ease-out ring-1 ring-blue-600 md:flex md:text-sm">
                  Create account
                </a>
              </Link>
            </div>
          )}

          {user && (
            <>
              <div
                className="relative p-1 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full cursor-pointer"
                onClick={() => router.push("/notifications")}
              >
                <BellIcon className="h-7" />
                <span className="absolute -right-2 -top-2 p-1 text-white text-xs bg-red-600 rounded-md">
                  110
                </span>
              </div>
              <div
                className="none relative w-9 h-9 rounded-full cursor-pointer"
                onClick={handleShowHideNavMenu}
              >
                <Image
                  alt="user avatar"
                  className="rounded-full"
                  layout="fill"
                  src={user.profileImage}
                />
              </div>
            </>
          )}

          {isVisible && (
            <div
              className="my-shadow-drop z-[400] md:w-[250px] absolute left-auto right-2 top-14 w-10/12 text-black bg-white border border-black rounded-md lg:right-6"
              ref={ref}
            >
              <NavbarDropdown
                firstname={user.firstname}
                lastname={user.lastname}
                username={user.username}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
