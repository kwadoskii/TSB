import { useRouter } from "next/router";

import ArticleCard from "../components/ArticleCard";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function Search() {
  const {
    query: { q },
  } = useRouter();

  const searchResults = [1, 2, 3, 4, 9, 9];

  return (
    <>
      <Title title="Search" />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-1 py-1 lg:py-4 lg:px-6 mx-auto">
          <div className="flex flex-wrap justify-between items-center my-2">
            <h2 className="font-bold text-xl md:text-3xl">Search results ({q})</h2>
            <Nav />
          </div>

          <div className="grid grid-cols-9 gap-5 my-0">
            <div className="col-span-2 relative">
              <div className="min-h-screen rounded-md sticky top-8 hidden md:flex flex-col gap-3">
                {/* <Advert />
                  <Advert />
                  <Advert /> */}
              </div>
            </div>

            <div className="col-span-full md:col-span-5">
              {searchResults.map((sr, i) => (
                <ArticleCard key={i} />
              ))}
            </div>

            <div className="col-span-2 hidden md:flex"></div>
          </div>
        </div>
      </div>
    </>
  );
}
