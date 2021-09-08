import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const data = [
    { name: "Posts", url: "/dashboard", count: 0 },
    { name: "Followers", url: "/dashboard/followers", count: 0 },
    { name: "Following", url: "/dashboard/following", count: 0 },
    { name: "Following tags", url: "/dashboard/following_tags", count: 0 },
  ];

  const { asPath } = useRouter();

  return (
    <div className="flex flex-col col-span-full md:col-span-1">
      {data.map((d, i) => (
        <Link passHref href={d.url} key={i}>
          <a
            className={`flex cursor-pointer hover:bg-gray-200 rounded-md p-2 ${
              asPath === d.url ? "bg-white" : ""
            }`}
          >
            <p
              className={`hover:text-blue-700 flex-grow ${
                asPath === d.url ? "font-medium" : ""
              }`}
            >
              {d.name}
            </p>
            <p className="rounded bg-gray-300 p-1 text-xs">{d.count}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
