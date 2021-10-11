import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import marked from "marked";
import sanitizeHtml, { defaults } from "sanitize-html";
import hljs from "highlight.js";

import Title from "../components/Title";

export default function Write() {
  const titleRef = useRef(null);
  const contentDivRef = useRef(null);
  const contentRef = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postTags, setPostTags] = useState("");
  const [editMode, setEditMode] = useState(true);
  const [bannerLink, setBannerLink] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const route = useRouter();

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    },
    gfm: true,
  });

  return (
    <>
      <Title title="Write post">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark-reasonable.min.css"
          integrity="sha512-RwXJS3k4Z0IK6TGoL3pgQlA9g2THFhKL7z9TYWdAI8u6xK0AUuMWieJuWgTRayywC9A94ifUj1RzjDa1NIlUIg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Title>

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
              <div
                className={`relative w-full inline-flex flex-col overflow-hidden transition duration-100 ease-out after:right-3 after:left-3 after:absolute after:bottom-0 hover:text-blue-700 text-gray-800 cursor-pointer rounded-md hover:bg-gray-200 items-center py-2 px-3.5 select-none ${
                  editMode
                    ? "font-semibold text-blue-700 after:h-[3.5px] after:bg-blue-700 after:rounded-lg after:bottom-0 hover:after:right-0 hover:after:left-0 hover:after:w-full"
                    : ""
                }`}
                onClick={() => setEditMode(true)}
              >
                <p className="">Edit</p>
              </div>

              <div
                className={`relative w-full inline-flex flex-col overflow-hidden transition duration-100 ease-out after:right-3 after:left-3 after:absolute after:bottom-0 hover:text-blue-700 text-gray-800 cursor-pointer rounded-md hover:bg-gray-200 items-center py-2 px-3.5 select-none ${
                  !editMode
                    ? "font-semibold text-blue-700 after:h-[3.5px] after:bg-blue-700 after:rounded-lg after:bottom-0 hover:after:right-0 hover:after:left-0 hover:after:w-full"
                    : ""
                }`}
                onClick={() => setEditMode(false)}
              >
                <p className="">Preview</p>
              </div>

              <div
                className="absolute top-2 right-3 p-[10px] cursor-pointer hover:bg-gray-200 rounded-lg"
                onClick={() => route.back()}
              >
                <XIcon className="h-5 text-gray-700" />
              </div>
            </div>
          </div>

          {/* editor area */}
          <div className="col-start-2 gap-4 flex flex-col mt-2 h-writeContent overflow-auto bg-white rounded-md border border-gray-300">
            {editMode ? (
              <>
                <div className="flex flex-col flex-grow gap-4 w-10/12 mx-auto py-8">
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
                              "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ydpav198t18pvae5x144.jpg"
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
                                console.log("Image changed");
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

                  <div className="flex flex-grow flex-col gap-1 md:gap-3">
                    <textarea
                      ref={titleRef}
                      type="text"
                      placeholder="New post title here..."
                      className="outline-none font-extrabold text-2xl md:text-5xl rounded-md placeholder-gray-400 overflow-y-hidden resize-none leading-snug h-[40px] md:h-[66px]"
                      data-gramm_editor="false"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);

                        //used below code to make the textarea dynamic
                        // titleRef.current.style.height = minHeight;
                        titleRef.current.style.minHeight = titleRef.current.clientHeight + "px";
                        titleRef.current.style.height = titleRef.current.scrollHeight + "px";
                      }}
                    />

                    <input
                      type="text"
                      className="outline-none placeholder-gray-400 font-mono rounded-md"
                      placeholder="Add up to 4 tags..."
                      value={postTags}
                      onChange={(e) => {
                        setPostTags(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === ",") {
                          e.preventDefault();
                          setPostTags(postTags + ", ");
                        }
                        if (e.key === " ") e.preventDefault();
                      }}
                    />

                    <div
                      className="h-full flex-grow"
                      ref={contentDivRef}
                      style={{ height: minHeight }}
                    >
                      <textarea
                        className="flex-grow outline-none placeholder-shown:font-mono rounded-md placeholder-gray-400 resize-none text-lg mt-3 w-full h-full"
                        data-gramm_editor="false"
                        onChange={(e) => {
                          console.log(
                            parseInt(contentDivRef.current.style.minHeight.substr(0, 3)),
                            contentRef.current.scrollHeight
                          );
                          setContent(e.target.value);
                          setMinHeight(contentRef.current.scrollHeight + "px");
                        }}
                        placeholder="Write your post content here..."
                        ref={contentRef}
                        type="text"
                        value={content}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="mb-7">
                {bannerLink && (
                  <div className="relative h-80">
                    <Image
                      src={bannerLink}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-md"
                    />
                  </div>
                )}

                <div className="w-10/12 mx-auto mt-8 flex flex-col">
                  <h2 className="text-black text-5xl font-extrabold">{title}</h2>
                  <div className="mb-8 mt-4 text-sm text-gray-500 flex gap-2">
                    {postTags.split(",").map((tag) => {
                      tag = tag.trim();
                      return tag !== "" ? (
                        <span className="text-gray-600">
                          <span className="text-gray-400 opacity-85">#</span>
                          {tag}
                        </span>
                      ) : null;
                    })}
                  </div>
                  <div
                    className="prose prose-blue"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(marked(content), {
                        allowedTags: [...defaults.allowedTags, "img", "a", "hr"],
                        allowedAttributes: false,
                      }),
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center col-start-2 gap-2 h-[68px]">
            <button className="bg-blue-700 text-white rounded-md font-semibold p-2 px-3.5 hover:bg-blue-800 transition duration-100 ease-out outline-none">
              Publish
            </button>
            <button
              className="rounded-md font-semibold p-2 px-3.5 text-gray-600 bg-gray-200 hover:text-gray-800 hover:bg-gray-300 transition duration-100 ease-out outline-none"
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
