import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import marked from "marked";
import sanitizeHtml, { defaults } from "sanitize-html";
import hljs from "highlight.js";

import Title from "../components/Title";
import authService from "../apis/authService";
import { create } from "../apis/post";
import { getTags } from "../apis/tag";
import { toast } from "react-toastify";

export default function Write({ token, tags }) {
  const titleRef = useRef(null);
  const router = useRouter();
  const contentDivRef = useRef(null);
  const contentRef = useRef(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postTags, setPostTags] = useState("");
  const [editMode, setEditMode] = useState(true);
  const [bannerLink, setBannerLink] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [bannerBase64, setBannerBase64] = useState("");
  const [loading, setLoading] = useState(true);

  const [_tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isFieldActive, setIsFieldActive] = useState(false);
  const tagInputRef = useRef();

  const [titleHeight, setTitleHeight] = useState();

  useEffect(() => {
    titleRef.current?.focus();
    setTags(tags);
    setTitleHeight(titleRef.current?.style.height);
  }, []);

  //route protection
  useEffect(() => {
    if (!authService.getCurrentUser()) {
      return router.push("/enter");
    }
    setLoading(false);
  }, [loading]);

  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    },
    gfm: true,
  });

  const handleSavePost = async () => {
    const contents = {
      title,
      tags: selectedTags.map((st) => st._id),
      content,
      banner: bannerLink,
    };

    const { data, status } = await create(contents, token);

    if (status === 201 && data.status === "success")
      return router.push(authService.getCurrentUser().username + "/" + data.data.slug);

    toast.info("Something went wrong, please retry.");
  };

  const selectTag = (tag) => {
    if (selectedTags.length < 4) {
      const oldSelectedTags = selectedTags;
      oldSelectedTags.push(tag);

      let oldTags = _tags;
      oldTags = oldTags.filter((oldTag) => oldTag._id !== tag._id);

      setPostTags("");
      setTags([...oldTags]);
      setSelectedTags([...oldSelectedTags]);
      tagInputRef.current?.focus();
    }
  };

  const removeSelectedTag = (tag) => {
    let oldSelectedTags = selectedTags;
    let oldTags = _tags;

    oldSelectedTags = oldSelectedTags.filter((oldTag) => oldTag._id !== tag._id);
    oldTags.push(tag);
    oldTags.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    setTags([...oldTags]);
    setSelectedTags([...oldSelectedTags]);
    tagInputRef.current?.focus();
  };

  const getData = () => {
    let value = postTags.toLowerCase().trim().replace(/\\/g, "");
    let filtered = isFieldActive && selectedTags.length === 4 ? _tags : [];

    if (value || isFieldActive) {
      filtered = _tags.filter((t) => {
        if (t.name.toLowerCase().startsWith(postTags.toLowerCase()) === true) return t;
      });
    }

    return { data: filtered };
  };

  const { data: filteredData } = getData();

  return loading ? null : (
    <>
      <Title title="Write post">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-dark-reasonable.min.css"
          integrity="sha512-RwXJS3k4Z0IK6TGoL3pgQlA9g2THFhKL7z9TYWdAI8u6xK0AUuMWieJuWgTRayywC9A94ifUj1RzjDa1NIlUIg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Title>

      <div className="bg-gray-100">
        <div className="relative block gap-x-4 grid-cols-write grid-rows-write mx-auto p-3 max-w-7xl h-screen md:grid">
          {/* nav */}
          <div className="h-[56px] flex col-span-2 col-start-1 justify-between">
            <div className="flex flex-1 gap-4 items-center justify-start">
              <Link href="/">
                <a className="outline-none">
                  <p className="p-[5px] text-white text-lg font-semibold bg-black rounded cursor-pointer select-none">
                    TSB
                  </p>
                </a>
              </Link>
              <h3 className="font-semibold">Create Post</h3>
            </div>

            <div className="flex gap-2 items-center">
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
                className="p-[10px] absolute -top-1 right-3 hover:bg-gray-200 rounded-lg cursor-pointer md:top-2"
                onClick={() => router.back()}
              >
                <XIcon className="h-5 text-gray-700" />
              </div>
            </div>
          </div>

          {/* editor area */}
          <div className="flex flex-col gap-4 col-start-2 mt-2 h-writeContent bg-white border border-gray-300 rounded-md overflow-auto">
            {editMode ? (
              <>
                <div className="flex flex-col flex-grow gap-4 mx-auto py-8 w-10/12">
                  <div className="mb-4">
                    {bannerBase64 === "" ? (
                      <label className="my-button-transparent cursor-pointer" htmlFor="banner">
                        Add a cover image
                        <input
                          type="file"
                          id="banner"
                          className="hidden"
                          onChange={(e) => {
                            setBannerLink(
                              "https://res.cloudinary.com/kwadoskii/image/upload/v1647791319/tsb-test/test_banner.jpg"
                            );

                            let reader = new FileReader();
                            reader.onload = function () {
                              setBannerBase64(reader.result);
                            };
                            reader.readAsDataURL(e.target.files[0]);
                          }}
                        />
                      </label>
                    ) : (
                      <div className="grid gap-4 grid-cols-7">
                        <div className="relative col-span-3 h-28">
                          <Image
                            src={bannerBase64}
                            objectFit="cover"
                            layout="fill"
                            className="rounded-md"
                          />
                        </div>
                        <div className="flex gap-1.5 items-center">
                          <label
                            className="my-button-transparent cursor-pointer"
                            htmlFor="changeBanner"
                          >
                            Change
                            <input
                              type="file"
                              id="changeBanner"
                              className="hidden"
                              onChange={(e) => {
                                setBannerLink(
                                  "https://res.cloudinary.com/kwadoskii/image/upload/v1647791319/tsb-test/test_banner.jpg"
                                );
                                let reader = new FileReader();
                                reader.onload = function () {
                                  setBannerBase64(reader.result);
                                };
                                reader.readAsDataURL(e.target.files[0]);
                              }}
                            />
                          </label>

                          <button
                            className="px-3 py-2 text-red-600 font-semibold hover:bg-gray-50 border border-transparent rounded-md"
                            onClick={() => setBannerBase64("")}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="relative flex flex-col flex-grow gap-1 md:gap-3">
                    <textarea
                      ref={titleRef}
                      style={{ height: titleHeight }}
                      type="text"
                      value={title}
                      placeholder="New post title here..."
                      className="placeholder-gray-400 h-[40px] md:min-h-[60px] text-2xl font-extrabold leading-snug rounded-md outline-none resize-none md:text-5xl"
                      data-gramm_editor="false"
                      maxLength={80}
                      onChange={(e) => {
                        setTitle(e.target.value);

                        //used below code to make the textarea dynamic
                        // titleRef.current.style.minHeight = titleRef.current.clientHeight + "px";
                        // titleRef.current.style.height = titleRef.current.scrollHeight + "px";
                        setTitleHeight(titleRef.current.scrollHeight + "px");
                      }}
                    />

                    <div className="relative flex flex-wrap gap-y-1.5 w-full">
                      {selectedTags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {selectedTags?.map((t, i) => MiniSelectedTag(i, t, removeSelectedTag))}
                        </div>
                      )}

                      <input
                        type="text"
                        className="placeholder-gray-400 flex-1 pl-2 font-mono rounded-md outline-none"
                        placeholder="Add up to 4 tags..."
                        value={postTags}
                        onChange={(e) => {
                          setPostTags(e.target.value);
                        }}
                        onKeyDown={(e) => {
                          // if (e.key === ",") {
                          //   e.preventDefault();
                          //   setPostTags(postTags + ", ");
                          // }
                          if (e.key === " " || e.key === "#" || e.key === ",") e.preventDefault();
                        }}
                        onBlur={() => setIsFieldActive(false)}
                        onFocus={() => setIsFieldActive(true)}
                        ref={tagInputRef}
                      />

                      <ul
                        className={`bg-white rounded mt-1 overflow-hidden max-h-80 shadow-md border-gray-400 absolute md:top-8 top-12 overflow-y-scroll p-1 ${
                          selectedTags.length < 4 && isFieldActive ? "" : " hidden "
                        }`}
                      >
                        {/* <ul
                        className={`bg-white rounded mt-1 overflow-hidden max-h-80 w-full shadow-md overflow-y-auto border-gray-400 absolute ${
                          selectedTags.length < 4 && isFieldActive ? "" : " hidden p-1"
                        }`}
                      > */}
                        {Array.isArray(filteredData) &&
                          filteredData.length > 0 &&
                          filteredData?.map((t, i) => SuggestedTag(i, selectTag, t))}
                      </ul>
                    </div>

                    <div
                      className="flex-grow h-full"
                      ref={contentDivRef}
                      style={{ height: minHeight }}
                    >
                      <textarea
                        className="placeholder-gray-400 flex-grow mt-3 w-full h-full placeholder-shown:font-mono text-lg rounded-md outline-none resize-none"
                        // data-gramm_editor="false"
                        onChange={(e) => {
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
                {bannerBase64 && (
                  <div className="relative h-80">
                    <Image
                      src={bannerBase64}
                      layout="fill"
                      objectFit="cover"
                      alt="banner"
                      className="rounded-t-md"
                    />
                  </div>
                )}

                <div className="flex flex-col mt-8 mx-auto w-10/12">
                  <h2 className="text-black text-5xl font-extrabold">{title}</h2>
                  <div className="flex gap-2 mb-8 mt-4 text-gray-500 text-sm">
                    {selectedTags.map((tag) => {
                      tag = tag.name.trim().toLowerCase();
                      return tag !== "" ? (
                        <span className="text-gray-600">
                          <span className="opacity-85 text-gray-400">#</span>
                          {tag}
                        </span>
                      ) : null;
                    })}
                  </div>
                  <div
                    className="prose prose-blue whitespace-pre-line"
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

          <div className="h-[68px] flex gap-2 col-start-2 items-center">
            <button
              className="p-2 px-3.5 text-white font-semibold bg-blue-700 hover:bg-blue-800 rounded-md outline-none transition duration-100 ease-out"
              onClick={handleSavePost}
            >
              Publish
            </button>
            <button
              className="p-2 px-3.5 text-gray-600 hover:text-gray-800 font-semibold bg-gray-200 hover:bg-gray-300 rounded-md outline-none transition duration-100 ease-out"
              onClick={() => router.back()}
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function SuggestedTag(i, selectTag, t) {
  return (
    <li
      className="hover:bg-gray-200/70 duration-50 group px-3 py-2.5 rounded hover:shadow cursor-pointer transition-all ease-in-out"
      key={i}
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();

        selectTag(t);
      }}
    >
      <p className="text-base font-bold">{"#" + t.name}</p>
      <p className="line-clamp-2 text-sm leading-tight to-gray-800">
        {t.description && t.description}
      </p>

      <div className="divide-gray-200/70 divide-y"></div>
    </li>
  );
}

function MiniSelectedTag(i, t, removeSelectedTag) {
  return (
    <div className="bg-lime-300/20 flex rounded shadow overflow-hidden" key={i}>
      <div className="flex gap-0.5 items-center">
        <p className="flex gap-0.5 px-2 py-1 text-sm">
          <span className="text-gray-500">#</span> {t.name}
        </p>
        <div
          className="text-slate-800 bg-red-600/60 flex-1 px-2 py-1 hover:text-white font-semibold hover:bg-red-900 cursor-pointer"
          onClick={() => removeSelectedTag(t)}
        >
          <span>x</span>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req: { cookies } }) {
  const token = cookies.token;

  const {
    data: { data: tags },
  } = await getTags();

  return {
    props: { token, tags },
  };
}
