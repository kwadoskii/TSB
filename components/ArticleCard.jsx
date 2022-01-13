import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon, ChatAltIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import useVisible from "../hooks/useVisible";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getPostComments, getPostLikes } from "../apis/post";

export default function ArticleCard({ hasImage = false, userPost = false, articleDetails, user }) {
  const commentHandler = () => console.log("handler clicked");
  const likeHandler = () => console.log("handler clicked");
  const saveHandler = () => console.log("handler clicked");

  const { isVisible, ref, setIsVisible } = useVisible();

  const [comments, setComments] = useState("");
  const [likes, setLikes] = useState("");

  dayjs.extend(relativeTime);

  let formatedCreatedAt =
    dayjs().format("YYYY") === dayjs(articleDetails.createdAt).format("YYYY")
      ? dayjs(articleDetails.createdAt).format("MMM DD")
      : dayjs(articleDetails.createdAt).format("YYYY MMM DD");

  const menuData = [
    { name: "Edit", url: "/edit" },
    { name: "Delete", url: "/delete" },
  ];

  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  };

  useEffect(async () => {
    const {
      data: { data: comments },
    } = await getPostComments(articleDetails._id);
    const {
      data: { data: likes },
    } = await getPostLikes(articleDetails._id);
    setComments(comments);
    setLikes(likes);
  }, []);

  return (
    <div className="w-full rounded-md border border-gray-300 overflow-hidden shadow-md mb-2 active:border-blue-700 relative">
      {hasImage && articleDetails?.banner && (
        <Link href={`/${user?.username}/${articleDetails?.slug}` || "/"} passHref>
          <a>
            <div className="w-full h-[230px] relative">
              <Image
                alt="banner"
                layout="fill"
                objectFit="cover"
                // src="https://res.cloudinary.com/practicaldev/image/fetch/s--rIMJB0Lh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/881jdm7sdnril6hn3f3l.PNG"
                src={articleDetails?.banner}
              />
            </div>
          </a>
        </Link>
      )}

      <div
        className={`bg-white p-3 flex flex-col w-full gap-1 items-start ${
          hasImage ? "rounded-b-md" : "rounded-md"
        }`}
      >
        <div className="flex items-center">
          <Link href={user?.username || "/"} passHref>
            <a>
              <div className="w-9 h-9 relative">
                <Image
                  src={user?.profileImage}
                  alt="profile of user"
                  layout="fill"
                  className="rounded-full"
                  objectFit="cover"
                />
              </div>
            </a>
          </Link>
          <div className="flex-grow-0 flex flex-col gap-0 ml-2">
            <Link href={user?.username || "/"} passHref>
              <a>
                <p className="text-gray-800 text-sm font-medium hover:bg-gray-50 inline-block rounded-md transition duration-100 ease-out">
                  {`${user?.firstname} ${user?.lastname}`}
                </p>
              </a>
            </Link>
            <span className="text-xs text-gray-500 block">
              {formatedCreatedAt} ({dayjs(articleDetails.createdAt).fromNow()})
            </span>
          </div>
        </div>

        <div className="flex flex-col md:pl-9 w-full">
          <Link href={`/${user?.username}/${articleDetails?.slug}` || "/"} passHref>
            <a>
              <h2 className="lg:text-2xl font-bold hover:text-blue-700 px-1 text-xl line-clamp-2">
                {articleDetails.title}
              </h2>
            </a>
          </Link>

          <div className="flex text-gray-400 text-sm gap-1">
            {articleDetails.tags.map((tag) => (
              <Link href={`/t/${tag.name.toLowerCase()}`} key={tag._id}>
                <a className="p-1 hover:text-black">
                  <span className="opacity-40">#</span>
                  {tag.name.toLowerCase()}
                </a>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="py-1 px-1 rounded-md text-gray-800 flex items-center cursor-pointer text-sm gap-1 hover:bg-gray-50"
                onClick={likeHandler}
              >
                <HeartIcon className="h-5 text-red-500" />
                <p className="text-sm">
                  {likes?.length}{" "}
                  <span className="hidden md:inline">reaction{likes?.length > 1 && "s"}</span>
                </p>
              </div>

              <div
                className="py-1 px-1 rounded-md text-gray-800 flex items-center cursor-pointer text-sm gap-1 hover:bg-gray-50"
                onClick={commentHandler}
              >
                <ChatAltIcon className="h-5 text-gray-500" />
                <p className="text-sm">
                  {comments?.length}{" "}
                  <span className="hidden md:inline">comment{comments?.length > 1 && "s"}</span>
                </p>
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

      {userPost && (
        <div
          onClick={handleShowMenu}
          ref={ref}
          className="cursor-pointer text-gray-400 hover:bg-gray-100 p-1 rounded-md self-center hover:text-gray-700 absolute top-1 right-3"
        >
          <DotsHorizontalIcon className="h-5" />
        </div>
      )}

      {userPost && isVisible && (
        <div className="absolute right-3 top-9 z-[400]">
          <div className="bg-white border-black border-2 rounded-md overflow-hidden w-56 my-shadow-drop">
            <ul>
              {menuData.map((menu, i) => (
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
    </div>
  );
}
