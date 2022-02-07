import ArticleCard from "./ArticleCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Feed({ tag = "", data, userPostLikesIds, userSavedPostsIds }) {
  const router = useRouter();
  const path = router.asPath;
  const formattedTag = tag === "" ? "/" : "/t/" + tag + "/";

  const [navs, _] = useState([
    { name: "Feed", sortUrl: "" },
    { name: "Week", sortUrl: "top/week" },
    { name: "Month", sortUrl: "top/month" },
    { name: "Year", sortUrl: "top/year" },
    { name: "Infinity", sortUrl: "top/infinity" },
    { name: "Latest", sortUrl: "top/latest" },
  ]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if ((tag && path.split("/").length === 3) || path.split("/").length === 2)
      return setSelected("feed");

    setSelected(path.split("/").pop());
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-2 md:mb-6">
        <h3 className="text-gray-800 text-xl font-bold">Posts</h3>
        <div className="hidden gap-0 grid-flow-col sm:grid">
          {navs.map(({ name, sortUrl }) => (
            <div className="relative" key={name}>
              <div
                onClick={() => {
                  router.push(formattedTag + sortUrl);
                }}
                className={`"w-full inline-flex flex-col relative cursor-pointer overflow-hidden transition duration-100 ease-out after:right-3 after:left-3 after:absolute after:bottom-0" ${
                  selected === name.toLowerCase()
                    ? "font-semibold text-blue-700 after:h-[4px] after:bg-blue-700 after:rounded-lg after:bottom-0 hover:after:right-0 hover:after:left-0 hover:after:w-full"
                    : ""
                }`}
              >
                <p className="pb-2 pt-1 px-3 hover:text-blue-700 text-gray-700 hover:bg-gray-50 hover:rounded-md">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <select
          onChange={(e) => router.push(formattedTag + e.target.value)}
          className="inline-block p-2 border active:border-blue-700 border-gray-300 rounded-md outline-none sm:hidden"
          value={selected !== "" ? `top/${selected}` : ""}
        >
          {navs.map(({ name, sortUrl }, i) => (
            <option value={sortUrl} key={i}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div>
        {data?.map((post, i) => (
          <ArticleCard
            key={i}
            hasImage={post.banner}
            articleDetails={post}
            user={post.author}
            liked={userPostLikesIds?.some((id) => id === post._id)}
            saved={userSavedPostsIds?.some((id) => id === post._id)}
          />
        ))}
      </div>
    </div>
  );
}
