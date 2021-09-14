import ArticleCard from "./ArticleCard";

export default function Feed() {
  // border-b-4 border-blue-600

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-gray-800 font-bold">Posts</h3>
        <div className="flex gap-1">
          <div className="my-feed-link">Feed</div>
          <div className="my-feed-link">Week</div>
          <div className="my-feed-link">Month</div>
          <div className="my-feed-link">Year</div>
          <div className="my-feed-link">Infinity</div>
          <div className="my-feed-link">Latest</div>
        </div>
      </div>

      <div>
        {[..."hellogdhshhshdhshsh"].map((h, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
    </div>
  );
}
