import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Feed from "../../components/Feed";
import Navbar from "../../components/Navbar";
import TagCard from "../../components/TagCard";
import Title from "../../components/Title";

export default function TagPage() {
  const { query } = useRouter();

  return (
    <>
      <Title title={query.tag} />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-1 py-1 lg:py-4 lg:px-6 mx-auto">
          <div>
            <TagCard
              barColor="gold"
              name={query.tag}
              subtitle="lorem ispsum dolum test one to three"
              large
            />
          </div>

          <div className="grid grid-cols-9 gap-5 my-8">
            <div className="col-span-2 relative">
              <div className="h-2/3 rounded-md sticky top-8">
                <div className="h-full w-full relative">
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
    </>
  );
}
