import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Advert from "../../../components/Advert";
import Feed from "../../../components/Feed";
import Navbar from "../../../components/Navbar";
import TagCard from "../../../components/TagCard";
import Title from "../../../components/Title";

export default function TagPage() {
  const { query } = useRouter();
  const tag = query.tag;

  return (
    <>
      <Title title={tag} />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-1 py-1 lg:py-4 lg:px-6 mx-auto">
          <div>
            <TagCard barColor="gold" name={query.tag} subtitle="lorem ispsum dolum test one to three" large />
          </div>

          <div className="grid grid-cols-9 gap-5 my-8">
            <div className="col-span-2 relative">{/* <Advert /> */}</div>

            <div className="col-span-5">
              <Feed tag={tag} data={[1, 1, 1, 11, 1, , 1, 1]} />
            </div>

            <div className="col-span-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
