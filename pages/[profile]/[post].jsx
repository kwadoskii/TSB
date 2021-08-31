import React from "react";
import Image from "next/image";
import { HeartIcon, DotsHorizontalIcon } from "@heroicons/react/outline";

import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Post() {
  return (
    <>
      {/* update article title */}
      <Title title="Client-Side and Server-Side Redirects in Next.js" />
      <Navbar />

      <section className="bg-gray-200">
        <div className="max-w-7xl relative flex flex-wrap px-1 gap-2 py-4 lg:px-6 mx-auto">
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

          <div className="relative grid grid-cols-3 gap-2 lg:pl-16">
            {/* article */}
            <article className="col-span-2 flex-grow rounded-md border border-gray-300 overflow-hidden">
              {/* image yes or no */}
              <div className="relative h-80">
                <Image
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--OfyhQsDc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5412klb67fxqqzoe8mjn.png"
                  objectFit="cover"
                  layout="fill"
                  className=""
                />
              </div>

              <div className="bg-white py-10 px-16 flex-grow">
                <h2 className="font-extrabold text-5xl leading-snug">
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
                <div className="mt-5 flex space-x-2 items-center">
                  <div className="relative w-8 h-8">
                    <Image
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-full"
                    />
                  </div>
                  <div className="font-semibold px-3 py-2 text-gray-600 cursor-pointer hover:bg-gray-100 rounded-md">
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
                <div className="mt-10 mb-3 text-xl text-black">
                  <p>
                    Most of the time out javascript code becomes clumsier if we inserted
                    the multiple null checks for the several entities. Those checks are
                    kind of mandatory and if those checks were removed then this happens.
                    <br />
                    Quo veniam autem repellat ipsam debitis obcaecati dolore minima ex
                    reiciendis similique! Fuga animi eveniet ipsam doloremque. Vitae
                    incidunt id quod quam. Odit officiis omnis necessitatibus unde
                    adipisci et, at fugit quia perspiciatis tempore ipsam laboriosam vero
                    est qui nostrum, aperiam sunt accusamus, expedita accusantium. Quo
                    sapiente explicabo ducimus blanditiis rerum placeat. Dignissimos natus
                    vero ea ratione necessitatibus dolore possimus modi quasi, delectus,
                    deserunt laudantium? Aliquid odio facere dignissimos. Aspernatur nemo
                    harum dolores laboriosam laudantium magnam. Quae aperiam quidem quia
                    quos incidunt. Necessitatibus aliquam rerum amet animi dicta voluptas
                    ducimus unde non. Ullam eaque quod sint quisquam enim, a libero
                    delectus. Fugit recusandae facilis illo vitae laborum modi nam quos
                    suscipit sequi! Debitis esse quae fuga reiciendis earum veniam
                    dignissimos asperiores cumque placeat deleniti! Dolore obcaecati quos
                    at ipsa impedit? Reprehenderit itaque nostrum in dicta ex quae
                    incidunt consectetur veritatis vero perferendis. Accusantium eius
                    vitae illo nihil dignissimos nisi magnam vel modi quas? Hic,
                    voluptates, est sunt ullam commodi exercitationem dolores odio aliquid
                    consectetur nam corporis nulla eum, asperiores ipsa temporibus totam.
                    Consectetur iusto sint quidem sed blanditiis recusandae dolorem a
                    perspiciatis? Aliquam molestias, consectetur nostrum illo consequuntur
                    dolorem? Itaque aspernatur libero minus amet, corrupti dolorem tempore
                    quos ullam reiciendis, officia deleniti! Corrupti facilis modi
                    doloremque magnam mollitia impedit odio assumenda similique sapiente
                    soluta repudiandae veritatis veniam sed suscipit, libero vero aperiam
                    architecto reprehenderit nam. Vero blanditiis ullam libero. At, sed
                    explicabo! Eos, maxime exercitationem. Quidem autem cupiditate ut
                    delectus quis porro id similique. Veniam sint tempora magnam minima
                    sed, ratione obcaecati quis numquam. Praesentium iusto, hic eligendi
                    beatae corrupti temporibus mollitia! Blanditiis iure alias sed
                    veritatis repellat corrupti, at perspiciatis velit optio odit numquam
                    reprehenderit expedita autem sapiente laborum ipsum tenetur sequi,
                    praesentium quod delectus sunt esse totam magni nihil. Vero! Facilis,
                    consequatur autem porro ea voluptate optio. Eius maxime iure totam,
                    molestias vel corporis. Ducimus sed illum, tempore est at quidem atque
                    esse minus magni in suscipit accusamus natus vero. Optio soluta magnam
                    quisquam tempora id expedita similique distinctio numquam sequi nisi
                    repellat quidem laborum earum suscipit quibusdam, temporibus
                    exercitationem perferendis voluptatem quas voluptatibus obcaecati aut
                    mollitia nobis. Id, dicta? Laudantium tenetur, pariatur quas repellat
                    repellendus omnis optio. Minima veniam, vero quibusdam quidem
                    perspiciatis doloribus sapiente voluptates illum nobis modi obcaecati
                    voluptatem qui magnam. Neque explicabo voluptatum placeat at
                    consectetur. Ab ad sit aliquid tempore at pariatur vitae eos quis?
                    Corporis eaque consequatur ullam quis error mollitia aspernatur
                    inventore. Maxime dicta porro, aliquid tempora impedit sint inventore
                    aperiam ullam voluptatibus? Esse earum fugit, maxime atque dolorem
                    aliquid impedit eum culpa perspiciatis dolorum ea voluptates, itaque
                    praesentium magnam, omnis illum placeat voluptate similique. Quos
                    itaque natus repellendus reiciendis facere, labore commodi?
                  </p>
                </div>
              </div>
            </article>

            {/* follow arthur */}
            <div className="w-min-[300px] sticky top-0 border">
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

                      <div className="flex my-2 space-x-2 text-gray-500 text-sm">
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

                      <div className="flex my-2 space-x-2 text-gray-500 text-sm">
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

                      <div className="flex my-2 space-x-2 text-gray-500 text-sm">
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
    </>
  );
}
