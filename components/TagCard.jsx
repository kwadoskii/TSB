import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function TagCard({
  barColor,
  name,
  subtitle,
  large = false,
  image,
  followed,
  onFollow,
  onUnfollow,
  token,
}) {
  const [_followed, setFollowed] = useState(followed);
  const handleFollow = async () => {
    setFollowed(true);

    const { data, status } = await onFollow();
    if (status === 200 && data.status === "success") return;

    setFollowed(false);
    return toast.error(data.message);
  };

  const handleUnfollow = async () => {
    setFollowed(false);

    const { data, status } = await onUnfollow();
    if (status === 200 && data.status === "success") return;

    setFollowed(true);
    return toast.error(data.message);
  };

  return (
    <div>
      <div
        className={`rounded-t-md ${large ? "h-4" : "h-2"}`}
        style={{ backgroundColor: barColor }}
      ></div>
      <div className="rounded-b-md border-b border-gray-200 bg-white shadow-sm relative overflow-hidden">
        {!large ? (
          <div className="px-4 py-4 flex flex-col gap-1">
            <Link passHref href={`/t/${name}`}>
              <a>
                <p className="text-lg text-gray-500 hover:text-black cursor-pointer font-semibold transition duration-100 ease-in-out">
                  <span className="opacity-40 font-normal">#</span>
                  {name}
                </p>
              </a>
            </Link>

            <div className="mb-2">
              {subtitle && <p className="text-gray-500 text-sm line-clamp-3">{subtitle}</p>}
            </div>
          </div>
        ) : (
          <div className="relative p-6 flex gap-4">
            <div className="relative h-14 w-14 rotate-6 hidden lg:block">
              {image && <Image src={image} layout="fill" objectFit="cover" />}
            </div>
            <div className="flex-grow">
              <div className="flex gap-2 justify-between items-center">
                <h3 className="text-3xl font-bold">{name}</h3>
                {token && (
                  <button
                    className={`border-none p-3 bg-transparent text-blue-700 font-semibold text-sm cursor-pointer rounded-md hover:bg-blue-200/30 transition duration-100 ease-out self-end items-start ring-1 ring-blue-600 ${
                      !_followed && "!bg-blue-600 !text-white hover:!bg-blue-600/80"
                    }`}
                    onClick={_followed ? () => handleUnfollow() : () => handleFollow()}
                  >
                    {_followed ? "Following" : "Follow"}
                  </button>
                )}
              </div>

              <p className="pt-5 md:w-9/12 text-gray-800">{subtitle}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
