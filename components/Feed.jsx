import ArticleCard from "./ArticleCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Feed({ tag = "", data = [..."hell"] }) {
  // border-b-4 border-blue-600
  const router = useRouter();
  const path = router.asPath;
  const formattedTag = tag === "" ? "/" : "/t/" + tag + "/";

  const [navs, setNavs] = useState([
    { name: "Feed", postfixUrl: "" },
    { name: "Week", postfixUrl: "top/week" },
    { name: "Month", postfixUrl: "top/month" },
    { name: "Year", postfixUrl: "top/year" },
    { name: "Infinity", postfixUrl: "top/infinity" },
    { name: "Latest", postfixUrl: "top/latest" },
  ]);
  const [selected, setSelected] = useState("home");

  useEffect(() => {
    if (path.split("/").length <= 3) return setSelected("feed");

    setSelected(path.split("/").pop());
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-gray-800 font-bold">Posts</h3>
        <div className="hidden sm:flex gap-1">
          {navs.map(({ name, postfixUrl }) => (
            <div
              key={name}
              className={`my-feed-link ${selected === name.toLocaleLowerCase() && "font-bold text-blue-700"}`}
              onClick={() => {
                router.push(formattedTag + postfixUrl);
              }}
            >
              {name}
            </div>
          ))}
          {/* <div
            className={`my-feed-link ${path.split("/").pop() === "week" && "font-bold text-blue-700"}`}
            onClick={() => {
              router.push(`${formattedTag}top/week`);
              setSelected("week");
            }}
          >
            Week
          </div>
          <div className="my-feed-link" onClick={() => router.push(`${formattedTag}top/month`)}>
            Month
          </div>
          <div className="my-feed-link" onClick={() => router.push(`${formattedTag}top/year`)}>
            Year
          </div>
          <div className="my-feed-link" onClick={() => router.push(`${formattedTag}/top/infinity`)}>
            Infinity
          </div>
          <div className="my-feed-link" onClick={() => router.push(`${formattedTag}/top/latest`)}>
            Latest
          </div> */}
        </div>

        <select
          onChange={(e) => router.push(tag + e.target.value)}
          className="inline-block sm:hidden p-2 outline-none border border-gray-300 rounded-md active:border-blue-700"
        >
          <option value="/">Feed</option>
          <option value="/top/week">Week</option>
          <option value="/top/month">Month</option>
          <option value="/top/year">Year</option>
          <option value="/top/infinity">Infinity</option>
          <option value="/top/latest">Latest</option>
        </select>
      </div>

      <div>
        {data.map((h, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
    </div>
  );
}
