import React, { useState } from "react";
import Image from "next/image";
import { DotsHorizontalIcon, HeartIcon, ChatIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import styled, { css } from "styled-components";
import Link from "next/link";

import useVisible from "../hooks/useVisible";

export default function Comment() {
  const [isOpen, setIsOpen] = useState(true);
  const { isVisible, ref, setIsVisible } = useVisible();

  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  };

  const commentMenuData = [
    { name: "Copy link", url: "/copy" },
    { name: "Settings", url: "/settings" },
    { name: "Report abuse", url: "/report_abuse" },
    { name: "Edit", url: "/edit" },
    { name: "Delete", url: "/delete" },
  ];

  return (
    <div className="bg-white my-4 p-0">
      <Details isOpen={isOpen} open>
        <Summary
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{!isOpen && "Austin Ofor + 1 replies"}</span>
        </Summary>
        <div className="flex gap-1">
          <Link passHref href="/test">
            <a>
              <div className="relative w-8 h-8 top-0 left-0">
                <Image
                  alt="commenter"
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--HMZIR_Gv--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/555812/2bf2e16e-98a9-450b-af3a-1fbd51fce623.png"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </a>
          </Link>

          <div className="flex flex-col gap-1">
            <div className="rounded-md p-0 border border-gray-300 mb-0 ml-4">
              <div className="flex p-2 flex-col">
                <div className="flex justify-between mb-2">
                  <div className="flex space-x-1 items-center">
                    <p className="font-semibold cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                      Austin Ofor
                    </p>
                    <p className="text-gray-400">•</p>
                    <span className="text-gray-500 text-sm">Jul 21</span>
                  </div>

                  <div
                    onClick={handleShowMenu}
                    ref={ref}
                    className="cursor-pointer text-gray-400 hover:bg-gray-100 p-1 rounded-md self-center hover:text-gray-700 relative"
                  >
                    <DotsHorizontalIcon className="h-5" />
                  </div>
                </div>
                {isVisible && (
                  <div className="absolute right-0 top-10 z-[400]">
                    <div className="bg-white border-black border-2 rounded-md overflow-hidden w-56 my-shadow-drop">
                      <ul>
                        {commentMenuData.map((menu, i) => (
                          <Link passHref href={menu.url} key={i}>
                            <a>
                              <li className="p-2 cursor-pointer hover:bg-gray-100 hover:text-purple-500 rounded">
                                {menu.name}
                              </li>
                            </a>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="p-2 pt-1">
                  <p className="text-lg">
                    Thanks, the SS redirect helped me. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Obcaecati natus et ipsum adipisci, fugit
                    quis doloremque, esse perferendis rem, distinctio nisi minima! Dicta,
                    maiores. Dolores illo commodi animi iure aperiam.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-4 mt-1 flex space-x-1 mb-5">
              <div className="p-1 flex space-x-1 text-gray-600 text-sm items-center cursor-pointer px-3 hover:bg-gray-50 hover:text-gray-700 rounded-md bg-red-100">
                {/* <HeartIcon className="h-5 text-gray-400" /> */}
                <SolidHeartIcon className="h-5 text-red-600" />
                <p>1 like</p>
              </div>
              <div className="p-1 flex space-x-1 text-gray-600 text-sm items-center cursor-pointer px-3 hover:bg-gray-50 hover:text-gray-700 rounded-md">
                <ChatIcon className="h-5" />
                <p>Reply</p>
              </div>
            </div>
          </div>
        </div>
      </Details>
    </div>
  );
}

const Details = styled.details`
  position: relative;

  ${({ isOpen }) =>
    isOpen &&
    css`
      & summary {
       position: absolute;
       top: 40px;
       background: none;
       left: 0px;
       padding: 0 0.9em;
    `}
`;

const Summary = styled.summary`
  cursor: pointer;
  color: #64707d;
  font-style: italic;
  font-size: 0.875em;
  background: #f9fafa;
  padding: 0.5em;
  border-radius: 5px;
`;
