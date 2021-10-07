import ArticleCard from "./ArticleCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Feed({ tag = "", data = [..."hell"] }) {
  // border-b-4 border-blue-600
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
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-gray-800 font-bold">Posts</h3>
        <div className="hidden sm:grid grid-flow-col gap-0">
          {navs.map(({ name, sortUrl }) => (
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
          onChange={(e) => router.push(formattedTag + e.target.value)}
          className="inline-block sm:hidden p-2 outline-none border border-gray-300 rounded-md active:border-blue-700"
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
        {data.map((h, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
    </div>
  );
}
