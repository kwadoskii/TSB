import Link from "next/link";
import dayjs from "dayjs";

export default function ProfileComment({ comment, profileUrl }) {
  let formatedCreatedAt = "";

  formatedCreatedAt =
    dayjs().format("YYYY") === dayjs(comment.createdAt).format("YYYY")
      ? dayjs(comment.createdAt).format("MMM DD")
      : dayjs(comment.createdAt).format("MMM DD, YYYY");

  return (
    <Link href={`/${profileUrl}/comment/${comment?._id}`} passHref>
      <a className="flex flex-col gap-2 px-4 py-4 hover:bg-gray-50 border-b last:border-b-0 border-gray-300">
        <h4 className="font-bold">{comment.postId?.title}</h4>
        <div className="flex gap-2 items-center text-sm">
          <p className="text-gray-700">{comment.comment}</p>
          <span className="text-gray-500 text-xs">{formatedCreatedAt}</span>
        </div>
      </a>
    </Link>
  );
}
