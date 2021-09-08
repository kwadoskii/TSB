import { useRouter } from "next/router";

import Title from "../components/Title";
import Link from "next/link";

export default function FourOFour() {
  const router = useRouter();

  const handleHome = (e) => {
    e.preventDefault();
    router.replace("/");
  };

  return (
    <>
      <Title title={"oops page not found"} />

      <div className="w-full h-[92vh] flex flex-col items-center justify-center gap-3">
        <div className="bg-blue-500 rounded-2xl flex items-center justify-center p-2 w-10/12 md:w-3/5 lg:w-1/2 h-2/5 lg:h-3/5">
          <div className="bg-black text-white h-[85%] w-[90%] rounded-xl flex items-center justify-center">
            <p className="text-7xl lg:text-9xl my-7 mx-0 font-bold">404</p>
          </div>
        </div>

        <p className="text-gray-700">This page does not exist</p>
        <Link passHref href="/">
          <a
            className="text-base md:text-lg mt-0 underline text-blue-700 cursor-pointer hover:text-blue-800 opacity-90"
            onClick={handleHome}
            href="/"
          >
            Go to Home Page
          </a>
        </Link>
      </div>
    </>
  );
}
