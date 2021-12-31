import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";
import Radium from "radium";
import { server } from "../config/server";
import api from "../apis/base";

export default function TagPage({ tags }) {
  return (
    <>
      <Title title="Tags" />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-2 gap-2 py-1 pb-6 lg:px-6 mx-auto">
          <div className="py-1.5 pb-5 flex justify-between items-center mb-3 md:mb-6 mt-2">
            <h2 className="md:text-3xl font-bold">Top tags</h2>
            <Link passHref href="/dashboard/following_tags">
              <a className="p-2 px-3.5 font-semibold text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200/75 transition-all duration-200 ease-out">
                Following tags
              </a>
            </Link>
          </div>

          <div className="mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tags.map((t, i) => (
              <TagCard
                name={t.name}
                paragraph={t.description}
                color={t.backgroundColor}
                imageUrl={t.image}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  // const { data: tags } = await fetch(`${server}/tags`, { method: "GET" }).then((res) => res.json());
  const {
    data: { data: tags },
  } = await api.get("/tags");

  return {
    props: {
      tags,
    },
  };
}

const TagCardx = ({ color, name, paragraph, count = 0, imageUrl }) => {
  return (
    <div className="rounded-md shadow-md border-gray-200 overflow-hidden">
      <div className="h-4" style={{ backgroundColor: color + "e6" }}></div>
      <div className="p-6 bg-white flex flex-col">
        <Link passHref href={`/t/${name.toLowerCase()}`}>
          <a>
            <h2
              className="text-lg font-bold text-gray-600 cursor-pointer p-1 px-1.5 grow rounded-md group border border-opacity-0 w-min hover:text-gray-900 hover:border transition-all duration-200 ease-out"
              style={{ ":hover": { background: color + "26", border: `1px solid ${color}` } }}
            >
              <span className="" style={{ color: color + "e6" }}>
                #
              </span>
              {name.toLowerCase()}
            </h2>
          </a>
        </Link>

        <div className="px-2">
          <p className="my-2 mb-1 text-gray-800">{paragraph}</p>

          <p className="text-gray-500 text-sm">{count + " posts published"}</p>

          <div className="flex justify-between mt-2.5 items-center">
            <button className="my-button-transparent !px-4 !py-1.5">Follow</button>

            {imageUrl && (
              <div className="h-14 w-14 relative rotate-6">
                <Image src={imageUrl} objectFit="contain" layout="fill" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TagCard = Radium(TagCardx);
