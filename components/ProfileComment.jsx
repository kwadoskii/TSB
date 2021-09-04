import Link from "next/link";

export default function ProfileComment({ comment, profileUrl }) {
  return (
    <Link href={`/${profileUrl}/comment/${comment?.id || "12334"}`} passHref>
      <a className="hover:bg-gray-50 py-4 px-4 border-b border-gray-300 flex flex-col gap-2">
        <h4 className="font-bold">
          6 Nullish coalescing operators every javascript programmer must know !
        </h4>
        <div className="flex gap-2 items-center text-sm">
          <p className="text-gray-700">Super intuitive and neat.</p>
          <span className="text-gray-500">May 21</span>
        </div>
      </a>
    </Link>
  );
}
