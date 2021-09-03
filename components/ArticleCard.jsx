import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon, ChatAltIcon } from "@heroicons/react/outline";

export default function ArticleCard({ hasImage = false }) {
  const commentHandler = () => console.log("handler clicked");
  const likeHandler = () => console.log("handler clicked");
  const saveHandler = () => console.log("handler clicked");

  const tags = ["next", "tailwind", "javascript", "react"];

  return (
    <div className="w-full rounded-md border border-gray-300 overflow-hidden shadow-md mt-2">
      {hasImage && (
        <Link href="/kwadoskii/post-url" passHref>
          <a>
            <ImageBanner
              style={{
                background: `url("https://res.cloudinary.com/practicaldev/image/fetch/s--rIMJB0Lh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/881jdm7sdnril6hn3f3l.PNG") no-repeat center`,
                backgroundSize: "cover",
                width: "100%",
                height: "230px",
              }}
            ></ImageBanner>
          </a>
        </Link>
      )}

      <div className="bg-white rounded-md p-4 flex w-full gap-2 items-start focus:border-blue-700">
        <Link href="/kwadoskii" passHref>
          <a>
            <div className="w-9 h-9 relative border rounded-full">
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--HMZIR_Gv--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/555812/2bf2e16e-98a9-450b-af3a-1fbd51fce623.png"
                alt="profile of user"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        </Link>

        <div className="flex-grow flex flex-col gap-1">
          <div className="flex-grow-0">
            <Link href="/kwadoskii" passHref>
              <a>
                <p className="text-gray-800 text-sm font-medium py-2 pb-1 px-1 hover:bg-gray-50 inline-block rounded-md transition duration-100 ease-out -mt-3">
                  Test Arthur
                </p>
                <span className="text-xs text-gray-500 block px-1">
                  May 6 (3 hours ago)
                </span>
              </a>
            </Link>
          </div>

          <Link href="/kwadoskii/post-url" passHref>
            <a>
              <h2 className="lg:text-2xl font-bold hover:text-blue-700 px-1 text-xl">
                A multi-line CSS only Typewriter effect
              </h2>
            </a>
          </Link>

          <div className="my-1 flex text-gray-400 text-sm gap-1">
            {tags.map((tag, i) => (
              <Link href={`/t/${tag}`} key={i}>
                <a className="p-1 hover:text-black">
                  <span className="opacity-40">#</span>
                  {tag}
                </a>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="py-1 px-1 rounded-md text-gray-800 flex items-center cursor-pointer text-sm gap-2 hover:bg-gray-50"
                onClick={likeHandler}
              >
                <HeartIcon className="h-6 text-red-500" />
                <p>345 reactions</p>
              </div>

              <div
                className="py-1 px-1 rounded-md text-gray-800 flex items-center cursor-pointer text-sm gap-1 hover:bg-gray-50"
                onClick={commentHandler}
              >
                <ChatAltIcon className="h-6 text-gray-500" />
                <p>3 comments</p>
              </div>
            </div>

            <button
              className="my-button-transparent text-sm font-normal py-1 bg-gray-300"
              onClick={saveHandler}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
