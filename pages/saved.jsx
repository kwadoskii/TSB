import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { BookmarkIcon } from "@heroicons/react/outline";
import authService from "../apis/authService";
import { useRouter } from "next/router";
import { savedPosts } from "../apis/user";
import dayjs from "dayjs";

export default function SavedPage({ userSavedPosts }) {
  const [postss, setPostss] = useState(userSavedPosts);
  const [tags, setTags] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const getPageData = () => {
    let searchText = searchValue.toLowerCase().trim().replace(/\\/g, "");
    let filtered = postss;

    if (searchText.length > 1 || selectedTag) {
      filtered = selectedTag
        ? postss.filter((p) => p.tags.filter((t) => t.name === selectedTag).length > 0)
        : postss;

      filtered = searchText
        ? filtered.filter((p) =>
            p.title.toLowerCase().search(searchText) > -1 ||
            p.tags.filter((t) => t.name.toLowerCase().search(searchText) > -1).length > 0 ||
            p.author.firstname.toLowerCase().search(searchText) > -1 ||
            p.author.lastname.toLowerCase().search(searchText) > -1
              ? p
              : null
          )
        : filtered;
    }

    filtered = filtered.sort((a, b) => new Date(b.savedDate) - new Date(a.savedDate));

    return { totalCount: filtered.length, data: filtered };
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  const filterTags = (posts) => {
    const tagLists = new Set();

    posts.forEach((p) => {
      p.tags.forEach((t) => {
        tagLists.add(t.name);
      });
    });

    setTags(
      [...tagLists]
        .map((tag, i) => ({ id: i + 1, name: tag }))
        .sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

          if (fa < fb) return -1;
          if (fa > fb) return 1;

          return 0;
        })
    );
  };

  const { data: filteredPost, totalCount } = getPageData();

  useEffect(() => {
    if (!authService.getCurrentUser()) {
      return router.push("/enter");
    }
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    filterTags(postss);
  }, []);

  return loading ? null : (
    <>
      <Title title="Saved Articles" />
      <Navbar />

      <div className="my-min-height bg-gray-100">
        <div className="relative mx-auto px-1 py-1 max-w-7xl lg:px-6 lg:py-4">
          <div className="grid gap-3 grid-cols-2">
            <div className="col-span-full lg:col-span-1">
              <h2 className="text-xl font-bold md:text-3xl">Saved posts ({totalCount})</h2>
            </div>

            <div className="col-span-full lg:col-span-1">
              <div className="flex">
                {/* <button className="px-3 border-2 border-gray-300 rounded-md font-semibold hover:border-gray-400 transition duration-200 ease-out hover:bg-gray-200 py-[0.4em]">
                  View archive
                </button> */}
                <Input
                  noVerticalMargin
                  placeholder="Enter some text to filter on..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-16 md:gap-2 md:mt-5 lg:gap-4">
            <div className="col-span-full my-2 md:col-span-4 md:m-0 lg:col-span-3">
              <Sidebar
                hasLinks={false}
                data={tags}
                selected={selectedTag}
                onItemSelect={handleTagSelect}
                displayName="tags"
              />
            </div>

            <div className="col-span-full md:col-span-12 lg:col-span-13">
              <div className="px-5 py-4 bg-white border border-gray-200 rounded-md">
                {Array.isArray(filteredPost) && filteredPost.length > 0 ? (
                  filteredPost.map((fp, i) => {
                    return (
                      <div className="flex gap-4 mb-8" key={i}>
                        <Link passHref href="/kwadoskii">
                          <a>
                            <div className="relative w-8 h-8 border rounded-full cursor-pointer">
                              <Image
                                src={fp.author.profileImage}
                                objectFit="cover"
                                layout="fill"
                                className="rounded-full"
                              />
                            </div>
                          </a>
                        </Link>

                        <div className="flex flex-col flex-grow gap-1">
                          <Link passHref href={`/${fp.author.username}/${fp.slug}`}>
                            <a className="hover:text-blue-800">
                              <h3 className="text-lg font-bold">{fp.title}</h3>
                            </a>
                          </Link>

                          <div className="flex flex-col gap-2 text-gray-500 text-sm md:flex-row md:items-center">
                            <Link passHref href={`/${fp.author.username}`}>
                              <a className="hover:text-blue-800 text-gray-800">
                                <p className="text-sm font-semibold">
                                  {`${fp.author?.firstname} ${fp.author.lastname}`}
                                </p>
                              </a>
                            </Link>
                            <p>
                              <span className="hidden text-gray-300 md:inline">• </span>
                              {" " + dayjs(fp.createdAt).format("MMM DD 'YY") + " "}
                              <span className="hidden text-gray-300 md:inline">• </span>
                            </p>
                            <div className="flex gap-2">
                              {fp.tags?.map((tag, i) => (
                                <Link passHref href={`/t/${tag.name}`} key={i}>
                                  <a className="hover:text-gray-900">
                                    <p key={tag._id}>{`#${tag.name}`}</p>
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center my-24">
                    <p className="text-gray-700 text-lg font-bold">
                      No saved posts from search filter 🤔
                    </p>
                    <div className="w-full">
                      <div className="mt-2">
                        <p className="mx-auto w-5/6 text-center text-gray-500">
                          Click the <span className="font-bold">bookmark reaction</span>{" "}
                          <BookmarkIcon className="inline h-6 text-gray-500" /> when viewing a post
                          to add it to your saved post.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const {
    data: { data: userSavedPosts },
  } = await savedPosts(req.cookies.token);

  return {
    props: {
      userSavedPosts: userSavedPosts.map((usp) => ({ ...usp.postId, savedDate: usp.savedDate })),
    },
  };
}
