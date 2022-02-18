import Link from "next/link";
import { getCommentById } from "../../../apis/comment";

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
          <div className="mx-auto w-11/12 lg:w-9/12">
            <div className="p-5 pb-12 bg-gray-50 border border-gray-300 rounded-md">
              <h1 className="text-2xl font-bold">
                <span className="text-gray-500 font-normal">Discussion on: </span>
                {comment.postId?.title}
              </h1>
              <div className="flex gap-3 mt-4">
                <Link
                  passHref
                  href={`/${comment.postId?.author?.username}/${comment?.postId?.slug}` || "/"}
                >
                  <a>
                    <button className="my-button-transparent">View post</button>
                  </a>
                </Link>
                <Link
                  passHref
                  href={
                    `/${comment.postId?.author?.username}/${comment?.postId?.slug}#comments` || "/"
                  }
                >
                  <a>
                    <button className="my-button-transparent">Full discussion</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <section className="-mt-10 mb-6 mx-auto px-4 py-1 w-full bg-white border border-gray-300 rounded-md shadow-md lg:px-10 lg:w-10/12">
            <Comment comment={comment} />
            {/* Replies to comments goes here!!! */}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const {
    data: { status, data },
  } = await getCommentById(params.id);

  if (status === "error") return { notFound: true };

  return {
    props: { comment: data },
  };
}
