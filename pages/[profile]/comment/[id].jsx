import Link from "next/link";
import React from "react";

import Comment from "../../../components/Comment";
import Navbar from "../../../components/Navbar";
import Title from "../../../components/Title";

export default function CommentPage() {
  return (
    <>
      <Title title={"Comment goes here"} /> {/* Get the title from the actual comment */}
      <Navbar />
      <main className="my-min-height bg-white">
        <div className="my-screen">
          <div className="w-11/12 lg:w-9/12 mx-auto">
            <div className="rounded-md border border-gray-300 p-5 pb-12 bg-gray-50">
              <h1 className="font-bold text-2xl">
                <span className="text-gray-500 font-normal">Discussion on: </span>6
                Nullish coalescing operators every javascript programmer must know!
              </h1>
              <div className="flex gap-3 mt-4">
                <Link passHref href="/kwadoskii/i-love-javascript">
                  <a>
                    <button className="my-button-transparent">View post</button>
                  </a>
                </Link>
                <Link passHref href="/kwadoskii/i-love-javascript#comments">
                  <a>
                    <button className="my-button-transparent">Full discussion</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <section className="-mt-10 py-2 px-10 bg-white rounded-md border border-gray-200 mx-auto w-full lg:w-10/12">
            <Comment />
            <Comment />
            <Comment />
          </section>
        </div>
      </main>
    </>
  );
}
