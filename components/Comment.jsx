import { useEffect, useState } from "react";
import Image from "next/image";
import { DotsHorizontalIcon, ChatIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import Link from "next/link";

import useVisible from "../hooks/useVisible";
import dayjs from "dayjs";
import authService from "../apis/authService";
import { likeComment, unlikeComment } from "../apis/comment";
import { toast } from "react-toastify";

export default function Comment({ comment }) {
  const [isOpen, setIsOpen] = useState(true);
  const { isVisible, ref, setIsVisible } = useVisible();
  const [liked, setLiked] = useState("");
  const [likesCount, setLikesCount] = useState("");
  const [token, setToken] = useState("");

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

  let formatedCreatedAt = "";
  formatedCreatedAt =
    dayjs().format("YYYY") === dayjs(comment.createdAt).format("YYYY")
      ? dayjs(comment.createdAt).format("MMM DD")
      : dayjs(comment.createdAt).format("MMM DD, YYYY");

  const handleLike = async (id) => {
    let prevLikeCount = likesCount;

    setLiked(true);
    setLikesCount(prevLikeCount + 1);

    const { data, status } = await likeComment(id, token);
    if (status !== 200 && data.status !== "success") {
      setLiked(false);
      setLikesCount(prevLikeCount);

      return toast.error("Could not like comment.");
    }
  };

  const handleUnlike = async (id) => {
    let prevLikeCount = likesCount;

    setLiked(false);
    setLikesCount(prevLikeCount - 1);

    const { data, status } = await unlikeComment(id, token);
    if (status !== 200 && data.status !== "success") {
      setLiked(true);
      setLikesCount(prevLikeCount);

      return toast.error("Could not unlike comment.");
    }
  };

  useEffect(() => {
    setLiked(comment.likes?.some((l) => l === authService.getCurrentUser()?._id));
    setLikesCount(comment.likes?.length);
    setToken(authService.getJwt());
  }, []);

  return (
    <div className="my-3 p-0 bg-white">
      <details className="relative" open>
        <summary
          className={`cursor-pointer text-gray-500 italic text-sm bg-gray-50 p-2 rounded-md ${
            isOpen && "absolute top-10 bg-transparent left-0 py-0"
          }`}
          onClick={() => {
            setIsOpen((prevState) => !prevState);
          }}
        >
          <span>
            {/* {!isOpen && `${comment.userId.firstname + " " + comment.userId.lastname} + 1 replies"`}  make the plus replies work*/}
            {!isOpen && `${comment.userId.firstname + " " + comment.userId.lastname}`}
          </span>
        </summary>
        <div className="flex gap-1">
          <Link passHref href={`/${comment.userId.username}`}>
            <a className="h-0">
              <div className="relative left-0 top-0 w-8 h-8">
                <Image
                  alt="commenter"
                  src={comment.userId.profileImage}
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </a>
          </Link>

          <div className="flex flex-col flex-grow gap-1">
            <div className="mb-0 ml-1.5 p-0 border border-gray-300 rounded-md">
              <div className="flex flex-col p-2">
                <div className="flex justify-between mb-0.5">
                  <div className="flex gap-1.5 items-center">
                    <Link passHref href={`/${comment.userId.username}`}>
                      <p className="p-2 font-semibold hover:bg-gray-100 rounded-lg cursor-pointer">
                        {comment.userId?.firstname + " " + comment.userId?.lastname}
                      </p>
                    </Link>
                    <p className="text-gray-400">•</p>
                    <span className="text-gray-500 text-sm">{formatedCreatedAt}</span>
                  </div>

                  <div
                    onClick={handleShowMenu}
                    ref={ref}
                    className="relative self-center p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
                  >
                    <DotsHorizontalIcon className="h-5" />
                  </div>
                </div>
                {isVisible && (
                  <div className="z-[400] absolute right-0 top-10">
                    <div className="my-shadow-drop w-56 bg-white border-2 border-black rounded-md overflow-hidden">
                      <ul>
                        {commentMenuData.map((menu, i) => (
                          <Link passHref href={menu.url} key={i}>
                            <a>
                              <li className="p-2 hover:text-purple-500 hover:bg-gray-100 rounded cursor-pointer">
                                {menu.name}
                              </li>
                            </a>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="p-1.5 pt-0">
                  <p className="text-gray-800">{comment.comment}</p>
                </div>
              </div>
            </div>

            <div className="flex mb-5 mt-1 px-1.5 space-x-1">
              <div
                className={`flex items-center p-1 px-1.5 text-gray-600 hover:text-gray-700 text-sm hover:bg-gray-50  rounded-md cursor-pointer space-x-1 md:px-2 ${
                  liked && "bg-red-100"
                }`}
                onClick={
                  authService.getCurrentUser()
                    ? liked
                      ? () => handleUnlike(comment._id)
                      : () => handleLike(comment._id)
                    : () => toast.info("Login or register to like a comment.")
                }
              >
                <SolidHeartIcon className={`h-5 ${liked && "text-red-600"}`} />
                <p className="text-gray-900">{likesCount}</p>
              </div>
              <div className="flex items-center p-1 px-3 text-gray-600 hover:text-gray-700 text-sm hover:bg-gray-50 rounded-md cursor-pointer space-x-1">
                <ChatIcon className="h-5" />
                <p>Reply</p>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}
