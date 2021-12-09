import Card from "../Card";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/solid";

export default function Reacted({ reactor, commentLink, comment }) {
  return (
    <Card className="px-6 py-0 mb-2">
      <div className="grid grid-cols-small py-4 px-0 gap-3">
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
            <Link passHref href="/sharma">
              <a className="font-bold cursor-pointer hover:text-blue-700">Jatin Sharma </a>
            </Link>
            reacted to{" "}
            <Link passHref href="/sharma/comment/123">
              <a className="font-bold cursor-pointer hover:text-blue-700">
                i was omitting this before:absolute and my before was not showing. Thanks{" "}
              </a>
            </Link>
            with <HeartIcon className="h-6 text-red-500 inline" />
          </p>
        </div>
      </div>
    </Card>
  );
}
