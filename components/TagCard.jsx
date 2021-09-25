import Image from "next/image";
import Link from "next/link";

export default function TagCard({ barColor, name, subtitle, large = false }) {
  return (
    <div>
      <div className={`rounded-t-md ${large ? "h-4" : "h-2"}`} style={{ backgroundColor: barColor }}></div>
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

            <div className="mb-2">{subtitle && <p className="text-gray-500 text-sm line-clamp-3">{subtitle}</p>}</div>
          </div>
        ) : (
          <div className="relative p-6 flex gap-4">
            <div className="relative h-14 w-14 rotate-6 hidden lg:block">
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--e4kQ9nis--/c_limit,f_auto,fl_progressive,q_80,w_64/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex-grow">
              <div className="flex gap-2 justify-between items-center">
                <h3 className="text-3xl font-bold">{name}</h3>
                <button className="my-button px-5 m-0 py-2 text-base">Follow</button>
              </div>

              <p className="pt-5 md:w-9/12 text-gray-800">{subtitle}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
