import { useRouter } from "next/router";

import Navbar from "../components/Navbar";
import Nav from "../components/Nav";
import ArticleCard from "../components/ArticleCard";
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
          <div className="flex flex-wrap justify-between items-center">
            <h2>Search results ({q})</h2>
            <Nav />
          </div>

          <div className="flex flex-col mb-10">
            {searchResults.map((sr, i) => (
              <ArticleCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
