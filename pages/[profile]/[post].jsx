import React from "react";
import Image from "next/image";
import { HeartIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import Link from "next/link";

import Comment from "../../components/Comment";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReadMore from "../../components/ReadMore";

export default function PostPage() {
  return (
    <>
      {/* update article title */}
      <Title title="Client-Side and Server-Side Redirects in Next.js" />
      <Navbar />

      <main className="bg-gray-200">
        <section className="max-w-7xl relative flex flex-wrap px-1 gap-2 py-4 lg:px-6 mx-auto">
          {/* navs */}
          <div className="fixed flex items-center space-y-7 lg:w-20 lg:flex-col lg:block lg:left-10 lg:top-1/4 justify-center">
            <div className="flex p-1 h-10 w-10 rounded-full flex-col items-center hover:bg-gray-300 hover:text-gray-800 text-gray-600 cursor-pointer">
              <div>
                <HeartIcon className="h-10 border-2 rounded-full" />
              </div>
              <p className="text-xs mt-2">178</p>
            </div>
            <div className="p-1 h-10 w-10 rounded-full text-center hover:bg-gray-300 hover:text-gray-800 text-gray-400 cursor-pointer">
              <HeartIcon className="w-full" />
            </div>
            <div className="p-1 h-10 w-10 rounded-full text-center hover:bg-gray-300 hover:text-gray-800 text-gray-400 cursor-pointer">
              <HeartIcon className="w-full" />
            </div>

            <div className="p-1 h-10 w-10 rounded-full text-center hover:bg-gray-300 hover:text-gray-800 text-gray-400 cursor-pointer">
              <DotsHorizontalIcon className="w-full" />
            </div>
          </div>

          <div className="relative grid md:grid-cols-1 lg:grid-cols-4 gap-2 lg:pl-16">
            {/* article */}

            <div className="lg:col-span-3 flex-grow  md:col-span-1">
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <article className="my-min-height border-b border-gray-300">
                  {/* image yes or no -- make image to fill across all screen size */}
                  <div className="relative lg:h-80 md:h-72 h-36">
                    <Image
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--OfyhQsDc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5412klb67fxqqzoe8mjn.png"
                      objectFit="cover"
                      layout="fill"
                      alt="article"
                    />
                  </div>

                  <div className="bg-white py-2 px-3 flex-grow md:pt-10 md:px-12 md:pb-5">
                    <h2 className="font-bold md:font-extrabold text-3xl md:text-5xl leading-snug">
                      Client-Side and Server-Side Redirects in Next.js
                    </h2>

                    <div className="flex space-x-2 my-3 mt-2">
                      <Link passHref href="/tag">
                        <a className="bg-yellow-500 rounded-md p-1 text-sm">
                          <span className="text-gray-300">#</span>
                          politics
                        </a>
                      </Link>
                      <Link passHref href="/tag">
                        <a className="bg-purple-400 rounded-md p-1 text-sm text-white">
                          <span className="text-gray-300">#</span>
                          football
                        </a>
                      </Link>
                      <Link passHref href="/tag">
                        <a className="bg-green-800 rounded-md p-1 text-sm text-white">
                          <span className="text-gray-300">#</span>
                          music
                        </a>
                      </Link>
                      <Link passHref href="/tag">
                        <a className="bg-blue-700 rounded-md p-1 text-sm text-white">
                          <span className="text-gray-300">#</span>
                          crime
                        </a>
                      </Link>
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
                        Most of the time out javascript code becomes clumsier if we
                        inserted the multiple null checks for the several entities. Those
                        checks are kind of mandatory and if those checks were removed then
                        this happens.
                        <br />
                        <br />
                        Thanks, the SS redirect helped me. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Obcaecati natus et ipsum adipisci,
                        fugit quis doloremque, esse perferendis rem, distinctio nisi
                        minima! Dicta, maiores. Dolores illo commodi animi iure aperiam.
                        <br />
                        <br />
                        This is most useful operator in day to day life. Whether you are
                        dealing with async API calls or dealing with blocking tasks, we
                        easily assume the key will be present in the response of an API or
                        output JSON object of any operation But, what if key is absent of
                        undefined. Here is the trick
                        <br />
                        <br />
                        This my small try to explain you all the usage of some operators
                        which could possibly make your code neater and smaller rather than
                        your previous code 🤗Please let me know your thoughts in comments
                        🙏hanks For Reading ...
                        <br />
                        Understanding the scoping of variables is pretty important while
                        coding. Variables declared with let are specifically blocked
                        scope. Whereas, if you used var then you can hoist it anywhere in
                        your code, but using var should be avoided as much as possible
                        (suggested by many !).
                        <br />
                        <br />
                        I often find the behavior of the this is pretty confusing in
                        javascript for me. Coming from the background of java and PHP, I
                        assumed that I will definitely feel at home if I used it but, then
                        I was pretty confused when getting started with the React or ES6.
                        After several weird things, I left it and then approached the
                        programming in javascript using functional approach.
                        <br />
                        <br />
                        It is still pretty confusing for me to know how this works, but if
                        you wanna use it then know it perfectly.
                      </p>
                    </div>
                  </div>
                </article>

                {/* comment area */}
                <div className="bg-white py-2 px-3 md:pt-8 md:px-12 md:pb-5">
                  <div className="flex justify-between">
                    <h2 className="font-bold text-2xl">Discussion (8)</h2>
                    <button className="my-button-transparent">Subscribe</button>
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
                          className="outline-none p-3 border border-gray-300 rounded-md resize-none text-base transition duration-100 w-full hover:my-shadow-blue placeholder-gray-400 placeholder-shown:bg-gray-50 focus:my-shadow-blue"
                          rows={5}
                        />
                      </div>

                      <button className="bg-blue-600 text-white font-semibold py-2 px-3 rounded-md mb-4 mt-1 cursor-pointer hover:bg-blue-800">
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

            {/* follow arthur */}
            <div className="my-min-height">
              <div className="sticky top-3">
                <div className="flex flex-col border-gray-300 rounded-md border">
                  <div className="p-4 w-full bg-yellow-900 rounded-t-md border-0"></div>

                  <div className="p-4 bg-gray-50 flex flex-col space-y-3 rounded-b-md">
                    <div className="flex space-x-2 -mt-2 -mb-4">
                      <div className="relative w-12 h-12 -top-6 left-0">
                        <Image
                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png"
                          layout="fill"
                          objectFit="contain"
                          className="rounded-full"
                        />
                      </div>
                      <p className="font-bold text-lg ">Haider Shaheen</p>
                    </div>

                    <button className="bg-blue-600 text-white font-semibold w-full py-2 rounded cursor-pointer hover:bg-blue-800">
                      Follow
                    </button>

                    <div className="pb-2">
                      <p className="text-gray-500">Frontend Engineer</p>
                    </div>

                    <div>
                      <h5 className="text-xs text-gray-500 font-bold">LOCATION</h5>
                      <p className="text-gray-700">Pakistan</p>
                    </div>

                    <div>
                      <h5 className="text-xs text-gray-500 font-bold">EDUCATION</h5>
                      <p className="text-gray-700">BSC Computer Science</p>
                    </div>

                    <div>
                      <h5 className="text-xs text-gray-500 font-bold">WORK</h5>
                      <p className="text-gray-700">Software Engineer</p>
                    </div>

                    <div>
                      <h5 className="text-xs text-gray-500 font-bold">JOINED</h5>
                      <p className="text-gray-700">Aug 28, 2018</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col border-gray-300 rounded-md bg-gray-50 mt-3 border last:border-b-0 overflow-hidden">
                  <div className="border-b border-gray-300 p-4">
                    <h2 className="font-bold text-xl">
                      More from{" "}
                      <Link passHref href="/kwadoskii">
                        <a className="text-blue-700">Zeeshan Haider Shaheen</a>
                      </Link>
                    </h2>
                  </div>

                  <div className="border-b border-gray-300 p-4 cursor-pointer text-gray-800 hover:bg-white hover:text-blue-600 ">
                    <Link passHref href="/i-love-javascript">
                      <a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div className="flex flex-wrap my-2 gap-2 text-gray-500 text-sm">
                          <p>
                            <span className="text-gray-300">#</span>
                            politics
                          </p>
                          <p>
                            <span className="text-gray-300">#</span>
                            football
                          </p>
                          <p>
                            <span className="text-gray-300">#</span>
                            music
                          </p>
                          <p>
                            <span className="text-gray-300">#</span>
                            crime
                          </p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="border-b border-gray-300 p-4 cursor-pointer text-gray-800 hover:bg-white hover:text-blue-600">
                    <Link passHref href="/i-love-javascript">
                      <a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div className="flex flex-wrap my-2 gap-2 text-gray-500 text-sm">
                          <p>
                            <span className="text-gray-300">#</span>
                            politics
                          </p>
                          <p>
                            <span className="text-gray-300">#</span>
                            football
                          </p>
                          <p>
                            <span className="text-gray-300">#</span>
                            music
                          </p>
                          <p>
                            <span className="text-gray-300">#</span>
                            crime
                          </p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="border-b border-gray-300 p-4 cursor-pointer text-gray-800 hover:bg-white hover:text-blue-600">
                    <Link passHref href="/i-love-javascript">
                      <a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div className="flex flex-wrap my-2 gap-2 text-gray-500 text-sm">
                          <p>
                            <span className="text-gray-300">#</span>
                            politics
                          </p>
                          <p>
                            <span className="text-gray-300">#</span>
                            football
                          </p>
                          <p>
                            <span className="text-gray-300">#</span>
                            music
                          </p>
                          <p>
                            <span className="text-gray-300">#</span>
                            crime
                          </p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
