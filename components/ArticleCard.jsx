import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon, ChatAltIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import useVisible from "../hooks/useVisible";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getPostComments, getPostLikes } from "../apis/post";
import authService from "../apis/authService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function ArticleCard({
  hasImage = false,
  userPost = false,
  articleDetails,
  user,
  liked,
  onLike,
  onUnlike,
  saved,
  onSave,
  onUnsave,
}) {
  dayjs.extend(relativeTime);

  const { isVisible, ref, setIsVisible } = useVisible();

  const [comments, setComments] = useState("");
  const [likesCount, setLikesCount] = useState("");
  const [_liked, setLiked] = useState(liked);
  const [_saved, setSaved] = useState(saved);
  const router = useRouter();

  let formatedCreatedAt =
    dayjs().format("YYYY") === dayjs(articleDetails?.createdAt).format("YYYY")
      ? dayjs(articleDetails?.createdAt).format("MMM DD")
      : dayjs(articleDetails?.createdAt).format("YYYY MMM DD");

  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleLike = async () => {
    const { data, status } = await onLike();
    if (status === 200 && data.status === "success") {
      setLikesCount(likesCount + 1);
      return setLiked(true);
    }

    return toast.error("Could not like post.");
  };

  const handleUnlike = async () => {
    const { data, status } = await onUnlike();
    if (status === 200 && data.status === "success") {
      setLikesCount(likesCount - 1);
      return setLiked(false);
    }

    return toast.error("Could not unlike post.");
  };

  const handleSave = async () => {
    setSaved(true);

    const { data, status } = await onSave();
    if (status === 200 && data.status === "success") return;

    setSaved(false);
    return toast.error("Could not save post.");
  };

  const handleUnsave = async () => {
    setSaved(false);

    const { data, status } = await onUnsave();
    if (status === 200 && data.status === "success") return;

    setSaved(true);
    return toast.error("Could not unsave post.");
  };

  useEffect(async () => {
    const {
      data: { data: comments },
    } = await getPostComments(articleDetails?._id);
    const {
      data: { data: likes },
    } = await getPostLikes(articleDetails?._id);

    setComments(comments);
    setLikesCount(likes?.length);
  }, []);

  return (
    <div className="w-full rounded-md border border-gray-300 shadow-md mb-3 active:border-blue-700 relative">
      {hasImage && articleDetails?.banner && (
        <Link href={`/${user?.username}/${articleDetails?.slug}` || "/"} passHref>
          <a>
            <div className="w-full h-[230px] relative">
              <Image alt="banner" layout="fill" objectFit="cover" src={articleDetails?.banner} />
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
                  src={
                    user?.profileImage ||
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--HMZIR_Gv--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/555812/2bf2e16e-98a9-450b-af3a-1fbd51fce623.png"
                  }
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
              {formatedCreatedAt} ({dayjs(articleDetails?.createdAt).fromNow()})
            </span>
          </div>
        </div>

        <div className="flex flex-col md:pl-9 w-full">
          <Link href={`/${user?.username}/${articleDetails?.slug}` || "/"} passHref>
            <a>
              <h2 className="lg:text-2xl font-bold hover:text-blue-700 px-1 text-xl line-clamp-2">
                {articleDetails?.title}
              </h2>
            </a>
          </Link>

          <div className="flex text-gray-400 text-sm gap-1">
            {articleDetails?.tags.map((tag) => (
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
                className={`py-1 px-1 rounded-md text-gray-800 flex items-center cursor-pointer text-sm gap-1 hover:bg-gray-50 ${
                  _liked && "bg-red-100/50"
                }`}
                onClick={
                  authService.getCurrentUser()
                    ? _liked
                      ? () => handleUnlike()
                      : () => handleLike()
                    : () => toast.info("Login or register to like a post.")
                }
              >
                {_liked ? (
                  <SolidHeartIcon className="h-5 text-red-500" />
                ) : (
                  <HeartIcon className="h-5 text-red-500" />
                )}
                <p className="text-sm">
                  {likesCount}{" "}
                  <span className="hidden md:inline">reaction{likesCount > 1 && "s"}</span>
                </p>
              </div>

              <div
                className="py-1 px-1 rounded-md text-gray-800 flex items-center cursor-pointer text-sm gap-1 hover:bg-gray-50"
                onClick={() => router.push(`/${user?.username}/${articleDetails?.slug}#comments`)}
              >
                <ChatAltIcon className="h-5 text-gray-500" />
                <p className="text-sm">
                  {comments?.length}{" "}
                  <span className="hidden md:inline">comment{comments?.length > 1 && "s"}</span>
                </p>
              </div>
            </div>

            {authService.getCurrentUser() && (
              <button
                className={`my-button-transparent text-sm font-normal py-1 ${
                  _saved && "bg-gray-300/80 hover:bg-gray-400/70 hover:border-transparent"
                }`}
                onClick={_saved ? () => handleUnsave() : () => handleSave()}
              >
                {_saved ? "Saved" : "Save"}
              </button>
            )}
          </div>
        </div>
      </div>

      {userPost && (
        <div
          onClick={handleShowMenu}
          className="cursor-pointer text-gray-400 hover:bg-gray-100 p-1 rounded-md self-center hover:text-gray-700 absolute top-1 right-3"
        >
          <DotsHorizontalIcon className="h-5" />
        </div>
      )}

      {userPost && isVisible && (
        <div className="absolute right-3 top-9 z-[500]">
          <div className="bg-white border-black border-2 rounded-md overflow-hidden w-56 my-shadow-drop">
            <ul ref={ref}>
              <li
                className="p-2 cursor-pointer hover:bg-gray-100 hover:text-purple-500 rounded"
                onClick={() => console.log("/edit/" + articleDetails._id)}
              >
                Edit
              </li>
              <li
                className="p-2 cursor-pointer hover:bg-gray-100 hover:text-purple-500 rounded"
                onClick={() => console.log("/delele/" + articleDetails._id)}
              >
                Delete
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
