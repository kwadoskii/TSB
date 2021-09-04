import Link from "next/link";

export default function Sidebar() {
  const data = [
    { name: "Posts", url: "/dashboard", count: 0, active: true },
    { name: "Followers", url: "/dashboard/followers", count: 0 },
    { name: "Following", url: "/dashboard/following", count: 0 },
    { name: "Following tags", url: "/dashboard/following_tags", count: 0 },
  ];

  return (
    <div className="flex flex-col col-span-full md:col-span-1">
      {data.map((d, i) => (
        <Link passHref href={d.url}>
          <a
            className={`flex cursor-pointer hover:bg-gray-200 rounded-md p-2 ${
              d.active ? "bg-white" : ""
            }`}
            key={i}
          >
            <p
              className={`hover:text-blue-700 flex-grow ${d.active ? "font-medium" : ""}`}
            >
              {d.name}
            </p>
            <p className="rounded-md bg-gray-300 p-1 text-xs">{d.count}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
