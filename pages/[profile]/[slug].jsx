import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HeartIcon, DotsHorizontalIcon, BookmarkIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { Remarkable } from "remarkable";
import { linkify } from "remarkable/linkify";
import hljs from "highlight.js";

import Comment from "../../components/Comment";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReadMore from "../../components/ReadMore";
import ArthurInfoCard from "../../components/ArthurInfoCard";
import MoreFromArthur from "../../components/MoreFromArthur";
import {
  getMoreFromAuthor,
  getPostBySlug,
  getPostComments,
  getPostLikes,
  likePost,
  unlikePost,
} from "../../apis/post";
import dayjs from "dayjs";
import Radium from "radium";
import authService from "../../apis/authService";
import { toast } from "react-toastify";

export default function PostPage({
  liked,
  post,
  postComments,
  postLikeCount,
  previousPosts,
  saved,
  postSaveCount,
  token,
  postComments,
  postLikes,
}) {
  const md = new Remarkable({
    typographer: true,
    highlight: function (code, language) {
      if (language && hljs.getLanguage(language)) {
        try {
          return hljs.highlight(code, { language }).value;
        } catch (err) {}
      }

      try {
        return hljs.highlightAuto(code).value;
      } catch (err) {}

      return ""; // use external default escaping
    },
  });

  let formatedCreatedAt =
    dayjs().format("YYYY") === dayjs(post.createdAt).format("YYYY")
      ? dayjs(post.createdAt).format("MMM DD")
      : dayjs(post.createdAt).format("MMM DD, YYYY");

  md.use(linkify);

  const [_liked, setLiked] = useState("");
  const [_postLikesCount, setPostLikesCount] = useState("");
  const [_postSaveCount, setPostSaveCount] = useState("");
  const [_saved, setSaved] = useState("");
  const [_postComments, setPostComments] = useState([]);

  const handleLike = async (id) => {
    let prevLikeCount = _postLikesCounts;

    setLiked(true);
    setPostLikesCount(prevLikeCount + 1);

    const { data, status } = await likePost(id, token);
    if (status !== 200 && data.status !== "success") {
      setLiked(false);
      setPostLikesCount(prevLikeCount);

      return toast.error("Could not like post.");
    }
  };

  const handleUnlike = async (id) => {
    let prevLikeCount = _postLikesCounts;

    setLiked(false);
    setPostLikesCount(prevLikeCount - 1);

    const { data, status } = await unlikePost(id, token);
    if (status !== 200 && data.status !== "success") {
      setLiked(true);
      setPostLikesCount(prevLikeCount);

      return toast.error("Could not unlike post.");
    }
  };

  useEffect(() => {
    setLiked(liked);
    setPostComments(postComments);
    setPostLikesCount(postLikeCount);
  }, [post._id]);
  return (
    <>
      <Title title={post.title}>
        <link
          rel="stylesheet"
          // href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/arta.min.css"
          // href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/stackoverflow-dark.min.css"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/rainbow.min.css"
        />
      </Title>
      <Navbar />

      <main className="bg-gray-100">
        <div className="relative mx-auto py-1 max-w-7xl md:px-1 lg:px-6">
          <section className="grid mg:gap-3 pt-0 px-0 md:grid-cols-post md:pt-2 lg:pt-3">
            <aside className="md:row-end-[initial] md:w-[4em] md:block">
              <div className="z-[100] fixed bottom-0 left-0 right-0 px-4 py-1 bg-white rounded-t-md shadow-soft md:relative md:block md:p-0 md:min-h-full md:bg-transparent md:shadow-none">
                <div className="right-0 top-28 flex justify-between md:sticky md:flex-col md:gap-8 md:w-full">
                  <div className="flex gap-1 items-center text-gray-800 md:flex-col md:gap-0">
                    <div
                      className={`border-[3px] p-1 border-transparent rounded-full cursor-pointer md:flex-col ${
                        _liked && " bg-red-100"
                      }`}
                      onClick={
                        authService.getCurrentUser()
                          ? _liked
                            ? () => handleUnlike(post._id)
                            : () => handleLike(post._id)
                          : () => toast.info("Login or register to like a post.")
                      }
                    >
                      {/* border should be on active state of the control border-red-600 */}
                      <HeartIcon className={`h-8 ${_liked ? "text-red-600" : "text-gray-400"}`} />
                    </div>
                    <p className="text-sm">{_postLikesCounts}</p>
                  </div>

                  <div className="flex gap-1 items-center text-gray-400 md:flex-col md:gap-0">
                    <div className="border-[3px] p-1 hover:bg-blue-100 border-transparent rounded-full cursor-pointer">
                      <BookmarkIcon className="h-8 hover:text-blue-600" />
                    </div>
                    <p className="text-sm">17</p>
                  </div>

                  <div className="flex gap-1 items-center text-gray-400 md:flex-col md:gap-0">
                    <div className="border-[3px] p-1 hover:bg-gray-200 border-transparent rounded-full cursor-pointer">
                      <DotsHorizontalIcon className="h-6 hover:text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="grid gap-4 grid-cols-16">
              <div className="relative col-span-full lg:col-span-11">
                {/* article */}
                <div className="flex-grow md:col-span-1 lg:col-span-3">
                  <div className="border border-t-0 border-gray-300 rounded-md shadow-md overflow-hidden">
                    {post.banner && (
                      <div className="h-[200px] 2xl:h-[400px] sm:h-[280px] md:h-[350px] xl:h-[380px] relative">
                        {/* image yes or no -- make image to fill across all screen size */}
                        {/* <div className="relative lg:h-80 md:h-72 h-36"> */}
                        <Image src={post.banner} objectFit="cover" layout="fill" alt="article" />
                      </div>
                    )}

                    <article className="border-b border-gray-100">
                      <div className="flex-grow px-3 py-2 bg-white md:pb-5 md:pt-10 md:px-12">
                        {/* arthur details */}
                        <div className="flex gap-x-1 items-center mb-5 md:gap-x-2">
                          <div className="relative w-9 h-9">
                            {post.author?.profileImage && (
                              <Image
                                src={post.author.profileImage}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-full"
                                alt="arthur"
                              />
                            )}
                          </div>

                          <div className="px-1 py-2 hover:text-blue-800 text-gray-800 transition-all duration-200 ease-out">
                            <Link passHref href={`/${post.author.username}`}>
                              <a>
                                <p className="font-bold cursor-pointer">{`${post.author.firstname} ${post.author.lastname}`}</p>
                              </a>
                            </Link>
                            <div className="text-gray-600 text-xs">
                              <p>Posted on {formatedCreatedAt}</p>
                            </div>
                          </div>
                        </div>

                        <h2 className="text-3xl font-bold leading-snug md:text-5xl md:font-extrabold">
                          {post.title}
                        </h2>

                        <div className="flex gap-2 mt-2 my-3 lg:mt-3">
                          {post?.tags.map((tag, i) => (
                            <MiniTag
                              key={i}
                              name={tag.name}
                              backgroundColor={tag.backgroundColor}
                              textBlack={tag.textBlack}
                            />
                          ))}
                        </div>

                        {/* newsletter */}
                        <div
                          className="prose prose-blue lg:prose-lg mb-3 mt-10 w-full border-gray-300"
                          dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
                        />
                      </div>
                    </article>

                    {/* comment area */}
                    <div className="px-3 py-2 bg-white md:pb-5 md:pt-8 md:px-12" id="comments">
                      <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">Discussion ({_postComments.length})</h2>
                      </div>

                      <div className="flex gap-3 items-center mt-5">
                        <div className="relative self-start w-8 h-8">
                          <Image
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png"
                            alt="commenter"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="">
                            <textarea
                              placeholder="Add to the discussion"
                              name="comment"
                              className="placeholder-gray-400 focus:my-shadow-blue p-3 w-full text-base placeholder-shown:bg-gray-50 border border-gray-300 rounded-md outline-none resize-none transition duration-100"
                              rows={3}
                            />
                          </div>
                          <button
                            className="mb-4 mt-1 px-3 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-800 rounded-md cursor-pointer"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>

                      <div>
                        {_postComments.map((postComment) => (
                          <Comment key={postComment._id} comment={postComment} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <ReadMore />
                </div>
              </div>

              {/* follow arthur */}
              <div className="lg:my-min-height col-span-full lg:col-span-5">
                <div className="sticky top-3">
                  <ArthurInfoCard profile={post.author} />
                  <MoreFromArthur
                    profile={post.author}
                    previousPosts={previousPosts.filter((pp) => pp._id !== post._id)}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

const MiniTagWithoutRadium = ({ name, backgroundColor }) => (
  <Link passHref href={`/t/${name}`}>
    <a
      className={`${backgroundColor} rounded-md py-0.5 transition-all duration-100 ease-out px-2 border border-transparent`}
      style={{
        ":hover": {
          background: backgroundColor + "20",
          border: `1px solid ${backgroundColor + "cc"}`,
        },
      }}
    >
      <span style={{ color: `${backgroundColor + "cc"}` }}>#</span>
      {name}
    </a>
  </Link>
);

const MiniTag = Radium(MiniTagWithoutRadium);

export async function getServerSideProps({ params, req }) {
  let liked = false;
  const token = req.cookies.token || "";
  const userId = authService.getCurrentUser(token)?._id;

  const {
    data: { data: post },
  } = await getPostBySlug(params.slug);

  if (!post)
    return {
      notFound: true,
    };

  const {
    data: { data: postLikes },
  } = await getPostLikes(post._id);

  if (userId) liked = postLikes?.userId?.some((id) => id === userId);

  const {
    data: { data: previousPosts },
  } = await getMoreFromAuthor(post.author._id);

  const {
    data: { data: postComments },
  } = await getPostComments(post._id);
  // const {
  //   data: { data: postComments },
  // } = await getComment(post._id);

  return {
    props: {
      post,
      previousPosts,
      // postLikeCount: postLikes?.userId?.length,
      postLikes,
      liked,
      postComments: postComments || [],
      token,
    },
  };
}

// const getComment = async (postId) => await getPostComments(postId);