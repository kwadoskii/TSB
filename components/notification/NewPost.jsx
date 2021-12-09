import Card from "../Card";
import Image from "next/image";
import Link from "next/link";
import { SaveIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";

const tags = ["next", "tailwind", "javascript", "react"];

export default function NewPost({ newPoster }) {
  return (
    <Card className="mb-2">
      <div className="grid grid-cols-small px-0 gap-3">
        <div className="relative h-10 w-full">
          <Image
            className="rounded-full"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--yG9NaJlu--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/161327/2ff05281-db58-4dcb-946a-4b679e4a266b.jpeg"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className="flex flex-col">
          <p>
            <Link passHref href="/abayomi">
              <a className="font-bold cursor-pointer hover:text-blue-700">Abayomi Ogunnusi </a>
            </Link>
            made a new post
          </p>
          <p className="text-gray-500 font-normal text-sm">6 days ago</p>

          <div className="rounded-md border  border-gray-200 px-1 mt-4 pb-1">
            <div className="flex flex-col p-3 pt-4">
              <Link passHref href="/kwadoskee/tests">
                <a className="hover:text-blue-700 group">
                  <h2 className="lg:text-2xl font-bold px-1 text-xl">
                    Video as Text background using CSS
                  </h2>

                  <div className="flex text-gray-600 text-sm gap-1 group-hover:text-blue-700">
                    {tags.map((tag, i) => (
                      <p className="p-1 opacity-90" key={i}>
                        <span className="opacity-40">#</span>
                        {tag}
                      </p>
                    ))}
                  </div>
                </a>
              </Link>
            </div>

            <div className="border-b border-gray-200 my-1.5"></div>

            <div className="flex justify-between gap-2 mt-1">
              <div className="p-1 flex space-x-1 text-gray-600 text-sm items-center cursor-pointer px-3 hover:bg-gray-50 hover:text-gray-700 rounded-md bg-red-100">
                <SolidHeartIcon className="h-5 text-red-600" />
                <p>1 like</p>
              </div>
              <div className="p-1 flex space-x-1 text-gray-600 text-sm items-center cursor-pointer px-3 hover:bg-gray-50 hover:text-gray-700 rounded-md">
                <SaveIcon className="h-5" />
                <p>Save</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
