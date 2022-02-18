import { search } from "../apis/post";

import ArticleCard from "../components/ArticleCard";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function Search({ searchResults, query }) {
  return (
    <>
      <Title title="Search" />
      <Navbar />

      <div className="my-min-height bg-gray-100">
        <div className="relative mx-auto px-1 py-1 max-w-7xl lg:px-6 lg:py-4">
          <div className="flex flex-wrap items-center justify-between my-2">
            <h2 className="text-xl font-bold md:text-3xl">Search results ({query})</h2>
            <Nav />
          </div>

          <div className="grid gap-5 grid-cols-9 my-0">
            <div className="relative col-span-2">
              <div className="sticky top-8 hidden flex-col gap-3 min-h-screen rounded-md md:flex">
                {/* <Advert />
                  <Advert />
                  <Advert /> */}
              </div>
            </div>

            <div className="col-span-full md:col-span-6">
              {searchResults.length > 0 ? (
                searchResults.map((sr) => (
                  <ArticleCard articleDetails={sr} user={sr.author} key={sr._id} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center my-10">
                  <p className="text-gray-700 text-lg font-bold">No posts from search query 🤔</p>
                  <div className="mt-2">
                    <p className="text-center text-gray-500">
                      Try modifying your search query and retry.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden col-span-2 md:flex"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ query: { q: query } }) {
  const {
    data: { data: searchResults },
  } = await search(query);

  return {
    props: {
      searchResults,
      query,
    },
  };
}
