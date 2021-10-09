import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

import Title from "../components/Title";

export default function Write() {
  const titleRef = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(true);
  const [bannerLink, setBannerLink] = useState("");
  const route = useRouter();

  return (
    <>
      <Title title="Write post" />

      <div className="bg-gray-100">
        <div className="block md:grid grid-cols-write grid-rows-write h-screen p-3 relative gap-x-4 max-w-7xl mx-auto">
          {/* nav */}
          <div className="col-start-1 col-span-2 flex justify-between h-[56px]">
            <div className="flex justify-start items-center flex-1 gap-4">
              <Link href="/">
                <a className="outline-none">
                  <p className="cursor-pointer select-none bg-black p-[5px] rounded font-semibold text-white text-lg">
                    TSB
                  </p>
                </a>
              </Link>
              <h3 className="font-semibold">Create Post</h3>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-800 rounded-md hover:bg-blue-100 hover:text-blue-700">
                Edit
              </button>
              <button className="p-2 text-gray-800 rounded-md hover:bg-blue-100 hover:text-blue-700">
                Preview
              </button>
              <div
                className="absolute top-2 right-3 p-[10px] cursor-pointer hover:bg-gray-200 rounded-lg"
                onClick={() => route.back()}
              >
                <XIcon className="h-5 text-gray-700" />
              </div>
            </div>
          </div>

          <div className="col-start-2 gap-4 flex flex-col mt-2 h-writeContent">
            <div className="col-start-2 flex flex-col flex-grow bg-white rounded-md border border-gray-300 py-8">
              <div className="flex flex-col flex-grow gap-4 w-10/12 mx-auto">
                <div className="mb-4">
                  {bannerLink === "" ? (
                    <label className="my-button-transparent" htmlFor="banner">
                      Add a cover image
                      <input
                        type="file"
                        id="banner"
                        className="hidden"
                        onChange={() => {
                          console.log("Image uploaded");
                          setBannerLink(
                            "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j65tbwm3c6t379ed64by.png"
                          );
                        }}
                      />
                    </label>
                  ) : (
                    <div className="grid grid-cols-7 gap-4">
                      <div className="relative h-28 col-span-3">
                        <Image
                          objectFit="cover"
                          src={bannerLink}
                          layout="fill"
                          className="rounded-md"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="my-button-transparent" htmlFor="changeBanner">
                          Change
                          <input
                            type="file"
                            id="changeBanner"
                            className="hidden"
                            onChange={() => {
                              console.log("Image uploaded");
                              setBannerLink(
                                "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j65tbwm3c6t379ed64by.png"
                              );
                            }}
                          />
                        </label>

                        <button
                          className="text-red-600 font-semibold rounded-md px-3 py-2 border border-transparent hover:bg-gray-50"
                          onClick={() => setBannerLink("")}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-grow flex-col gap-3">
                  <textarea
                    ref={titleRef}
                    type="text"
                    placeholder="New post title here..."
                    className="outline-none font-extrabold text-2xl md:text-5xl rounded-md placeholder-gray-400 overflow-y-hidden resize-none leading-snug h-[40px] md:h-[66px]"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);

                      //used below code to make the textarea dynamic
                      titleRef.current.style.minHeight = titleRef.current.clientHeight + "px";
                      titleRef.current.style.height = titleRef.current.scrollHeight + "px";
                    }}
                  />

                  <input
                    type="text"
                    className="outline-none placeholder-gray-400 font-mono rounded-md"
                    placeholder="Add up to 4 tags..."
                  />

                  <textarea
                    type="text"
                    placeholder="Write your post content here..."
                    className="flex-grow outline-none placeholder-shown:font-mono rounded-md placeholder-gray-400 resize-none text-lg mt-3"
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center col-start-2 gap-2 h-[68px]">
            <button className="bg-blue-700 text-white rounded-md font-semibold p-2 px-3.5 hover:bg-blue-800 transition duration-100 ease-out">
              Publish
            </button>
            <button
              className="rounded-md font-semibold p-2 px-3.5 text-gray-600 bg-gray-200 hover:text-gray-800 hover:bg-gray-300 transition duration-100 ease-out"
              onClick={() => route.back()}
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
