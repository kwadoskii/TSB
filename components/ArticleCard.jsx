import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon, ChatAltIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import useVisible from "../hooks/useVisible";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getPostComments, getPostLikes, likePost, unlikePost } from "../apis/post";
import authService from "../apis/authService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { savePost, unsavePost } from "../apis/user";

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

  const [commentsCount, setCommentsCount] = useState("");
  const [likesCount, setLikesCount] = useState("");
  const [_liked, setLiked] = useState(liked);
  const [_saved, setSaved] = useState(saved);
  const [token, setToken] = useState();
  const router = useRouter();

  let formatedCreatedAt =
    dayjs().format("YYYY") === dayjs(articleDetails?.createdAt).format("YYYY")
      ? dayjs(articleDetails?.createdAt).format("MMM DD")
      : dayjs(articleDetails?.createdAt).format("YYYY MMM DD");

  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleLike = async (id) => {
    let prevLikeCount = likesCount;

    setLiked(true);
    setLikesCount(prevLikeCount + 1);

    const { data, status } = await likePost(id, token);
    if (status !== 200 && data.status !== "success") {
      setLiked(false);
      setLikesCount(prevLikeCount);

      return toast.error("Could not like post.");
    }
  };

  const handleUnlike = async (id) => {
    let prevLikeCount = likesCount;

    setLiked(false);
    setLikesCount(prevLikeCount - 1);

    const { data, status } = await unlikePost(id, token);
    if (status !== 200 && data.status !== "success") {
      setLiked(true);
      setLikesCount(prevLikeCount);

      return toast.error("Could not unlike post.");
    }
  };

  const handleSave = async (id) => {
    setSaved(true);

    const { data, status } = await savePost(id, token);
    if (status === 200 && data.status === "success") return;

    setSaved(false);
    return toast.error("Could not save post.");
  };

  const handleUnsave = async (id) => {
    setSaved(false);

    const { data, status } = await unsavePost(id, token);
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

    setToken(authService.getJwt());
    setCommentsCount(comments?.length);
    setLikesCount(likes?.length);
  }, []);

  return (
    <div className="relative mb-1.5 w-full border active:border-blue-800 border-gray-300 rounded-md shadow-sm overflow-hidden">
      {hasImage && articleDetails?.banner && (
        <Link href={`/${user?.username}/${articleDetails?.slug}` || "/"} passHref>
          <a>
            <div className="h-[230px] relative pb-1/3 w-full">
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
          <Link href={`/${user?.username}` || "/"} passHref>
            <a>
              <div className="relative w-9 h-9">
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
          <div className="flex flex-col flex-grow-0 gap-0 ml-2">
            <Link href={`/${user?.username}` || "/"} passHref>
              <a>
                <p className="inline-block text-gray-800 text-sm font-medium hover:bg-gray-50 rounded-md transition duration-100 ease-out">
                  {`${user?.firstname} ${user?.lastname}`}
                </p>
              </a>
            </Link>
            <span className="block text-gray-500 text-xs">
              {formatedCreatedAt} ({dayjs(articleDetails?.createdAt).fromNow()})
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full md:pl-9">
          <Link href={`/${user?.username}/${articleDetails?.slug}` || "/"} passHref>
            <a>
              <h2 className="line-clamp-2 px-1 hover:text-blue-700 text-xl font-bold lg:text-2xl">
                {articleDetails?.title}
              </h2>
            </a>
          </Link>

          <div className="flex gap-1 text-gray-400 text-sm">
            {articleDetails?.tags.map((tag, i) => (
              <Link href={`/t/${tag.name.toLowerCase()}`} key={i}>
                <a className="p-1 hover:text-black">
                  <span className="opacity-40">#</span>
                  {tag.name.toLowerCase()}
                </a>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between">
            <div className="flex gap-2 items-center">
              <div
                className={`py-1 px-1 rounded-md text-gray-800 flex items-center cursor-pointer text-sm gap-1 hover:bg-gray-50 ${
                  _liked && "bg-red-100/50"
                }`}
                onClick={
                  authService.getCurrentUser()
                    ? _liked
                      ? () => handleUnlike(articleDetails._id)
                      : () => handleLike(articleDetails._id)
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
                className="flex gap-1 items-center px-1 py-1 text-gray-800 text-sm hover:bg-gray-50 rounded-md cursor-pointer"
                onClick={() => router.push(`/${user?.username}/${articleDetails?.slug}#comments`)}
              >
                <ChatAltIcon className="h-5 text-gray-500" />
                <p className="text-sm">
                  {commentsCount}{" "}
                  <span className="hidden md:inline">comment{commentsCount > 1 && "s"}</span>
                </p>
              </div>
            </div>

            {authService.getCurrentUser() && (
              <button
                className={`my-button-transparent text-sm font-normal py-1 ${
                  _saved && "bg-gray-300/80 hover:bg-gray-400/70 hover:border-transparent"
                }`}
                onClick={
                  _saved
                    ? () => handleUnsave(articleDetails._id)
                    : () => handleSave(articleDetails._id)
                }
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
          className="absolute right-3 top-1 self-center p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <DotsHorizontalIcon className="h-5" />
        </div>
      )}

      {userPost && isVisible && (
        <div className="z-[500] absolute right-3 top-9">
          <div className="my-shadow-drop w-56 bg-white border-2 border-black rounded-md overflow-hidden">
            <ul ref={ref}>
              <li
                className="p-2 hover:text-purple-500 hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => console.log("/edit/" + articleDetails._id)}
              >
                Edit
              </li>
              <li
                className="p-2 hover:text-purple-500 hover:bg-gray-100 rounded cursor-pointer"
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
