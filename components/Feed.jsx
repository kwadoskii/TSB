import ArticleCard from "./ArticleCard";
import { useRouter } from "next/router";

export default function Feed({ tag = "npm" }) {
  // border-b-4 border-blue-600
  const router = useRouter();
  const formattedTag = tag === "" ? "/" : "/t/" + tag + "/";

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-gray-800 font-bold">Posts</h3>
        <div className="hidden sm:flex gap-1">
          <div className="my-feed-link" onClick={() => router.push(formattedTag)}>
            Feed
          </div>
          <div
            className="my-feed-link"
            onClick={() => router.push(`${formattedTag}top/week`)}
          >
            Week
          </div>
          <div
            className="my-feed-link"
            onClick={() => router.push(`${formattedTag}top/month`)}
          >
            Month
          </div>
          <div
            className="my-feed-link"
            onClick={() => router.push(`${formattedTag}top/year`)}
          >
            Year
          </div>
          <div
            className="my-feed-link"
            onClick={() => router.push(`${formattedTag}/top/infinity`)}
          >
            Infinity
          </div>
          <div
            className="my-feed-link"
            onClick={() => router.push(`${formattedTag}/top/latest`)}
          >
            Latest
          </div>
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
        {[..."hell"].map((h, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
    </div>
  );
}
