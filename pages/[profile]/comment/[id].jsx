import Link from "next/link";
import { getCommentById } from "../../../apis/post";

import Comment from "../../../components/Comment";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Title from "../../../components/Title";

export default function CommentPage({ comment }) {
  return (
    <>
      <Title title={comment.comment} />
      <Navbar />
      <main className="my-min-height bg-gray-200">
        <div className="my-screen">
          <div className="w-11/12 lg:w-9/12 mx-auto">
            <div className="rounded-md border border-gray-300 p-5 pb-12 bg-gray-50">
              <h1 className="font-bold text-2xl">
                <span className="text-gray-500 font-normal">Discussion on: </span>
                {comment.postId?.title}
              </h1>
              <div className="flex gap-3 mt-4">
                <Link
                  passHref
                  href={`/${comment.postId?.author?.username}/${comment.postId.slug}` || "/"}
                >
                  <a>
                    <button className="my-button-transparent">View post</button>
                  </a>
                </Link>
                <Link
                  passHref
                  href={
                    `/${comment.postId?.author?.username}/${comment.postId.slug}#comments` || "/"
                  }
                >
                  <a>
                    <button className="my-button-transparent">Full discussion</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Replies of comments goes here!!! */}
          <section className="-mt-10 mb-6 py-2 px-4 lg:px-10 bg-white rounded-md border border-gray-300 mx-auto w-full lg:w-10/12 shadow-md">
            <Comment />
            {/* <Comment /> */}
            <Comment />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const {
    data: { data, status },
  } = await getCommentById(params.id);

  if (status === "error") return { notFound: true };

  return {
    props: { comment: data },
  };
}
