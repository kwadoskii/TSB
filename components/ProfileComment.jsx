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
      <a className="flex flex-col gap-1 pt-2 px-4 py-4 hover:bg-gray-50 border-b last:border-b-0 border-gray-300">
        <h4 className="font-bold">{comment.postId?.title}</h4>
        <div className="flex flex-col gap-2 text-sm">
          <p className="line-clamp-4 text-gray-700 whitespace-pre-wrap">{comment.comment}</p>
          <p className="text-gray-500 text-xs">{formatedCreatedAt}</p>
        </div>
      </a>
    </Link>
  );
}
