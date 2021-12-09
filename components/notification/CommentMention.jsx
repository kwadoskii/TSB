import Card from "../Card";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import { ChatIcon, EyeIcon } from "@heroicons/react/outline";

export default function CommentMention({ mentioningUser }) {
  return (
    <Card className="mb-2 px-6 py-4">
      <div className="grid grid-cols-small px-0 gap-3">
        <div className="relative h-10 w-full">
          <Image
            className="rounded-full"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--yG9NaJlu--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/161327/2ff05281-db58-4dcb-946a-4b679e4a266b.jpeg"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div>
          <p>
            <Link passHref href="/abayomi">
              <a className="font-bold cursor-pointer hover:text-blue-700">Abayomi Ogunnusi </a>
            </Link>
            mentioned you in a comment
          </p>

          <div className="rounded-md border  border-gray-200 px-1 mt-4 pb-1">
            <div className="flex flex-col p-3 pt-4">
              <p>
                <Link passHref href="/kwadoskii">
                  <a className="text-blue-700 underline cursor-pointer hover:text-blue-900">
                    @kwadoskii
                  </a>
                </Link>{" "}
                I'm delighted you found it useful.
              </p>
            </div>

            <div className="border-b border-gray-200 my-1.5"></div>

            <div className="flex gap-2 mt-1">
              <div className="p-1 flex space-x-1 text-gray-600 text-sm items-center cursor-pointer px-3 hover:bg-gray-50 hover:text-gray-700 rounded-md bg-red-100">
                <SolidHeartIcon className="h-5 text-red-600" />
                <p>1 like</p>
              </div>
              <div className="p-1 flex space-x-1 text-gray-600 text-sm items-center cursor-pointer px-3 hover:bg-gray-50 hover:text-gray-700 rounded-md">
                <ChatIcon className="h-5" />
                <p>Reply</p>
              </div>
              <div className="p-1 flex space-x-1 text-gray-600 text-sm items-center cursor-pointer px-3 hover:bg-gray-50 hover:text-gray-700 rounded-md">
                <EyeIcon className="h-5" />
                <p>View</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
