import ArticleCard from "./ArticleCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Feed({ tag = "", data }) {
  const router = useRouter();
  const path = router.asPath;
  const formattedTag = tag === "" ? "/" : "/t/" + tag?.name + "/";

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
      <div className="flex justify-between items-center mb-2 md:mb-6">
        <h3 className="text-xl text-gray-800 font-bold">Posts</h3>
        <div className="hidden sm:grid grid-flow-col gap-0">
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
                <p className="text-gray-700 hover:text-blue-700 hover:rounded-md hover:bg-gray-50 pb-2 pt-1 px-3">
                  {name}
                </p>
              </div>
            </div>
          ))}
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
        {data?.map((h, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
    </div>
  );
}
