import React from "react";
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
import { getMoreFromAuthor, getPostBySlug } from "../../apis/post";
import dayjs from "dayjs";
import Radium from "radium";

export default function PostPage({ post, previousPosts }) {
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
        <div className="max-w-7xl relative md:px-1 py-1 lg:px-6 mx-auto">
          <section className="grid mg:gap-3 md:grid-cols-post lg:pt-3 pt-0 md:pt-2 px-0">
            <aside className="md:block md:row-end-[initial] md:w-[4em]">
              <div className="fixed bottom-0 z-[100] left-0 right-0 bg-white rounded-t-md px-4 py-1 shadow-soft md:block md:shadow-none md:bg-transparent md:p-0 md:relative md:min-h-full">
                <div className="flex justify-between md:flex-col md:gap-8 md:w-full md:sticky right-0 top-28">
                  <div className="flex items-center gap-1 text-gray-400 md:flex-col md:gap-0">
                    <div className="rounded-full border-[3px] border-transparent hover:bg-red-100 md:flex-col p-1 cursor-pointer">
                      {/* border should be on active state of the control border-red-600 */}
                      <HeartIcon className="h-8 hover:text-red-600" />
                    </div>
                    <p className="text-sm">178</p>
                  </div>

                  <div className="flex items-center gap-1 text-gray-400 md:flex-col md:gap-0">
                    <div className="rounded-full border-[3px] border-transparent hover:bg-blue-100 p-1 cursor-pointer">
                      <BookmarkIcon className="h-8 hover:text-blue-600" />
                    </div>
                    <p className="text-sm">17</p>
                  </div>

                  <div className="flex items-center gap-1 text-gray-400 md:flex-col md:gap-0">
                    <div className="rounded-full border-[3px] border-transparent hover:bg-gray-200 p-1 cursor-pointer">
                      <DotsHorizontalIcon className="h-6 hover:text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="grid grid-cols-16 gap-4">
              <div className="relative col-span-full lg:col-span-11 grid">
                {/* article */}
                <div className="lg:col-span-3 flex-grow  md:col-span-1">
                  <div className="border border-t-0 border-gray-300 rounded-md overflow-hidden shadow-md">
                    {post.banner && (
                      <div className="relative h-[200px] sm:h-[280px] md:h-[350px] xl:h-[380px] 2xl:h-[400px]">
                        {/* image yes or no -- make image to fill across all screen size */}
                        {/* <div className="relative lg:h-80 md:h-72 h-36"> */}
                        <Image src={post.banner} objectFit="cover" layout="fill" alt="article" />
                      </div>
                    )}

                    <article className="border-b border-gray-100">
                      <div className="bg-white py-2 px-3 flex-grow md:pt-10 md:px-12 md:pb-5">
                        {/* arthur details */}
                        <div className="mb-5 flex gap-x-1 md:gap-x-2 items-center">
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

                          <div className="px-1 py-2 text-gray-800 hover:text-blue-800 transition-all duration-200 ease-out">
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

                        <h2 className="font-bold md:font-extrabold text-3xl md:text-5xl leading-snug">
                          {post.title}
                        </h2>

                        <div className="flex gap-2 my-3 mt-2 lg:mt-3">
                          {post?.tags.map((tag, i) => {
                            {
                              /* const bgColor = "bg-[" + tag.backgroundColor + "]"; */
                            }

                            return (
                              <MiniTag
                                key={i}
                                name={tag.name}
                                backgroundColor={tag.backgroundColor}
                                textBlack={tag.textBlack}
                              />
                            );
                          })}
                        </div>

                        {/* newsletter */}
                        <div
                          className="mt-10 mb-3 border-gray-300 w-full prose lg:prose-lg prose-blue"
                          dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
                        >
                          {/* {post.content} */}
                        </div>
                      </div>
                    </article>

                    {/* comment area */}
                    <div className="bg-white py-2 px-3 md:pt-8 md:px-12 md:pb-5" id="comments">
                      <div className="flex justify-between">
                        <h2 className="font-bold text-2xl">Discussion (3)</h2>
                        {/* <button className="my-button-transparent">Subscribe</button> */}
                      </div>

                      <div className="flex items-center gap-5 mt-5">
                        <div className="relative w-8 h-8 self-start">
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
                              className="outline-none p-3 border border-gray-300 rounded-md resize-none text-base transition duration-100 w-full placeholder-gray-400 placeholder-shown:bg-gray-50 focus:my-shadow-blue"
                              rows={3}
                            />
                          </div>
                          <button
                            className="bg-blue-600 text-white font-semibold py-2 px-3 rounded-md mb-4 mt-1 cursor-pointer hover:bg-blue-800"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>

                      <div>
                        <Comment />
                        <Comment />
                        <Comment />
                      </div>
                    </div>
                  </div>

                  <ReadMore />
                </div>
              </div>

              {/* follow arthur */}
              <div className="col-span-full lg:col-span-5 lg:my-min-height">
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

const MiniTagWithoutRadium = ({ name, textBlack, backgroundColor }) => (
  <Link passHref href={`/t/${name}`}>
    <a
      className={`${backgroundColor} rounded-md py-0.5 transition-all duration-100 ease-out px-2 ${
        !textBlack && "text-white"
      } border border-transparent`}
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

export async function getServerSideProps({ params }) {
  const {
    data: { data: post },
  } = await getPostBySlug(params.slug);

  if (!post)
    return {
      notFound: true,
    };

  const {
    data: { data: previousPosts },
  } = await getMoreFromAuthor(post.author._id);

  return {
    props: {
      post,
      previousPosts,
    },
  };
}
