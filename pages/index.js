import Feed from "../components/Feed";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function Home() {
  return (
    <>
      <Title title="Home" />
      <Navbar />

      <main>
        <div className="bg-gray-100 my-min-height">
          <div className="max-w-7xl relative px-1 py-1 lg:py-4 lg:px-6 mx-auto">
            <div className="grid grid-cols-9 gap-5 my-0">
              <div className="col-span-2 relative">
                <div className="min-h-screen rounded-md sticky top-8 flex flex-col gap-3">
                  <div className="h-52 w-full relative">
                    <Link passHref href="https://www.google.com">
                      <a target="_blank" referrerPolicy="no-referrer">
                        <Image
                          src="https://www.lindaikejisblog.com/photos/shares/thumbs/614103d96f046.png"
                          layout="fill"
                          objectFit="contain"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="h-52 w-full relative">
                    <Link passHref href="https://www.google.com">
                      <a target="_blank" referrerPolicy="no-referrer">
                        <Image
                          src="https://www.lindaikejisblog.com/photos/shares/thumbs/614103d96f046.png"
                          layout="fill"
                          objectFit="contain"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="h-52 w-full relative">
                    <Link passHref href="https://www.google.com">
                      <a target="_blank" referrerPolicy="no-referrer">
                        <Image
                          src="https://www.lindaikejisblog.com/photos/shares/thumbs/614103d96f046.png"
                          layout="fill"
                          objectFit="contain"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="h-52 w-full relative">
                    <Link passHref href="https://www.google.com">
                      <a target="_blank" referrerPolicy="no-referrer">
                        <Image
                          src="https://www.lindaikejisblog.com/photos/shares/thumbs/614103d96f046.png"
                          layout="fill"
                          objectFit="contain"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-span-5">
                <Feed />
              </div>

              <div className="col-span-2"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
