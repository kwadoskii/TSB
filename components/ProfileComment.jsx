import Link from "next/link";

export default function ProfileComment({ comment, profileUrl }) {
  return (
    <Link href={`${profileUrl}/comment/${comment?.id || "12334"}`} passHref>
      <a className="block hover:bg-gray-50 py-4 px-4 border-b border-gray-300">
        <h4 className="font-bold">
          6 Nullish coalescing operators every javascript programmer must know !
        </h4>
        <div className="flex gap-1 flex-col">
          <p className="text-base">Super intuitive and neat.</p>
          <span className="text-gray-500 text-sm">May 21</span>
        </div>
      </a>
    </Link>
  );
}
