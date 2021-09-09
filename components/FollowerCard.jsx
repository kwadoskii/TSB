import Image from "next/image";
import Link from "next/link";

export default function FollowerCard({ username, img, name }) {
  return (
    <div className="md:col-span-1 border border-gray-300 bg-white rounded-md py-5 gap-2">
      <Link passHref href={`/${username}`}>
        <a className="flex flex-col items-center justify-center gap-1 lg:gap-2 pb-5">
          <div className="relative w-16 h-16 rounded-full border border-gray-300">
            <Image
              layout="fill"
              alt="follower"
              src={img}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <p className="text-blue-700 font-bold text-sm lg:text-xl">{name}</p>
          <p className="text-gray-500 text-xs lg:text-base">@{username}</p>
        </a>
      </Link>
    </div>
  );
}
