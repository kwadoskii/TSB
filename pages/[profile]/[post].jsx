import React from "react";
import Image from "next/image";
import { HeartIcon, DotsHorizontalIcon, SaveIcon } from "@heroicons/react/solid";
import Link from "next/link";

import Comment from "../../components/Comment";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReadMore from "../../components/ReadMore";
import ArthurInfoCard from "../../components/ArthurInfoCard";
import MoreFromArthur from "../../components/MoreFromArthur";

export default function PostPage() {
  const tags = [
    { name: "politics", url: "/t/politics", bgColor: "bg-yellow-500", textBlack: true },
    { name: "football", url: "/t/football", bgColor: "bg-purple-400", textBlack: false },
    { name: "music", url: "/t/music", bgColor: "bg-green-800", textBlack: false },
    { name: "crime", url: "/t/crime", bgColor: "bg-blue-700", textBlack: false },
  ];

  return (
    <>
      {/* update article title */}
      <Title title="Client-Side and Server-Side Redirects in Next.js" />
      <Navbar />

      <main className="bg-gray-100 relative">
        <section className="my-screen grid gap-3 md:grid-cols-post lg:pt-3 pt-0 md:pt-2 px-0">
          <aside className="md:block md:row-end-[initial] md:w-[4em]">
            <div className="fixed bottom-0 z-[100] left-0 right-0 bg-white rounded-t-md px-4 py-1 shadow-soft md:block md:shadow-none md:bg-transparent md:p-0 md:relative md:min-h-full">
              <div className="flex justify-between md:flex-col md:gap-8 md:w-full md:sticky right-0 top-32">
                <div className="flex items-center gap-1 text-gray-400 md:flex-col md:gap-0">
                  <div className="rounded-full border-[3px] border-transparent hover:bg-red-100 md:flex-col p-1 cursor-pointer">
                    {/* border should be on active state of the control border-red-600 */}
                    <HeartIcon className="h-8 hover:text-red-600" />
                  </div>
                  <p className="text-sm">178</p>
                </div>

                <div className="flex items-center gap-1 text-gray-400 md:flex-col md:gap-0">
                  <div className="rounded-full border-[3px] border-transparent hover:bg-blue-100 p-1 cursor-pointer">
                    <SaveIcon className="h-8 hover:text-blue-600" />
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
                  <div className="relative h-[200px] sm:h-[280px] md:h-[350px] xl:h-[380px] 2xl:h-[400px]">
                    {/* image yes or no -- make image to fill across all screen size */}
                    {/* <div className="relative lg:h-80 md:h-72 h-36"> */}
                    <Image
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--OfyhQsDc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5412klb67fxqqzoe8mjn.png"
                      objectFit="cover"
                      layout="fill"
                      alt="article"
                    />
                  </div>

                  <article className="my-min-height border-b border-gray-100">
                    <div className="bg-white py-2 px-3 flex-grow md:pt-10 md:px-12 md:pb-5">
                      <h2 className="font-bold md:font-extrabold text-3xl md:text-5xl leading-snug">
                        Client-Side and Server-Side Redirects in Next.js
                      </h2>

                      <div className="flex gap-2 my-3 mt-2 lg:mt-6">
                        {tags.map((tag, i) => (
                          <Link passHref href={tag.url} key={i}>
                            <a
                              className={`${tag.bgColor} rounded-md p-1 text-sm ${
                                !tag.textBlack && "text-white"
                              }`}
                            >
                              <span className="text-gray-300">#</span>
                              {tag.name}
                            </a>
                          </Link>
                        ))}
                      </div>

                      {/* arthur details */}
                      <div className="mt-5 flex space-x-1 md:space-x-2 items-center">
                        <div className="relative w-8 h-8">
                          <Image
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-full"
                            alt="arthur"
                          />
                        </div>
                        <div className="font-semibold px-3 py-2 text-gray-800 cursor-pointer hover:bg-gray-100 rounded-md">
                          <p>sudarshan</p>
                        </div>
                        <div className="text-gray-600 text-sm">
                          <p>May 3</p>
                        </div>
                        <div className="text-gray-600 text-sm">
                          <p>・ 3 min read</p>
                        </div>
                      </div>

                      {/* newsletter */}
                      <div className="mt-10 mb-3 text-lg md:text-xl text-black border-gray-300">
                        <p>
                          Most of the time out javascript code becomes clumsier if we inserted the
                          multiple null checks for the several entities. Those checks are kind of
                          mandatory and if those checks were removed then this happens.
                          <br />
                          <br />
                          Thanks, the SS redirect helped me. Lorem ipsum dolor, sit amet consectetur
                          adipisicing elit. Obcaecati natus et ipsum adipisci, fugit quis
                          doloremque, esse perferendis rem, distinctio nisi minima! Dicta, maiores.
                          Dolores illo commodi animi iure aperiam.
                          <br />
                          <br />
                          This is most useful operator in day to day life. Whether you are dealing
                          with async API calls or dealing with blocking tasks, we easily assume the
                          key will be present in the response of an API or output JSON object of any
                          operation But, what if key is absent of undefined. Here is the trick
                          <br />
                          <br />
                          This my small try to explain you all the usage of some operators which
                          could possibly make your code neater and smaller rather than your previous
                          code 🤗Please let me know your thoughts in comments 🙏hanks For Reading
                          ...
                          <br />
                          Understanding the scoping of variables is pretty important while coding.
                          Variables declared with let are specifically blocked scope. Whereas, if
                          you used var then you can hoist it anywhere in your code, but using var
                          should be avoided as much as possible (suggested by many !).
                          <br />
                          <br />
                          I often find the behavior of the this is pretty confusing in javascript
                          for me. Coming from the background of java and PHP, I assumed that I will
                          definitely feel at home if I used it but, then I was pretty confused when
                          getting started with the React or ES6. After several weird things, I left
                          it and then approached the programming in javascript using functional
                          approach.
                          <br />
                          <br />
                          It is still pretty confusing for me to know how this works, but if you
                          wanna use it then know it perfectly.
                        </p>
                      </div>
                    </div>
                  </article>

                  {/* comment area */}
                  <div className="bg-white py-2 px-3 md:pt-8 md:px-12 md:pb-5" id="comments">
                    <div className="flex justify-between">
                      <h2 className="font-bold text-2xl">Discussion (8)</h2>
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
                <ArthurInfoCard />
                <MoreFromArthur />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
