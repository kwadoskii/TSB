import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Sidebar({
  notLinked = false,
  data = [
    // { name: "Posts", url: "/dashboard", count: 0 },
    // { name: "Followers", url: "/dashboard/followers", count: 0 },
    // { name: "Following", url: "/dashboard/following", count: 0 },
    // { name: "Following tags", url: "/dashboard/following_tags", count: 0 },
  ],
}) {
  // const data = [
  //   { name: "Posts", url: "/dashboard", count: 0 },
  //   { name: "Followers", url: "/dashboard/followers", count: 0 },
  //   { name: "Following", url: "/dashboard/following", count: 0 },
  //   { name: "Following tags", url: "/dashboard/following_tags", count: 0 },
  // ];

  // const data2 = [
  //   { name: "all tags", id: 1 },
  //   { name: "api", id: 2 },
  //   { name: "aws", id: 3 },
  //   { name: "javascript", id: 4 },
  //   { name: "test", id: 5 },
  // ];

  const onClickHandler = (id) => setActive(id);
  const [active, setActive] = useState(data[0]?.id);

  useEffect(() => {
    setActive(data[0]?.id);
  }, []);

  const { asPath } = useRouter();

  return (
    <div className="flex flex-col col-span-full md:col-span-1">
      {!notLinked
        ? data.map((d, i) => (
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
          ))
        : data.map((d, i) => (
            <div
              key={i}
              className={`flex cursor-pointer  rounded-md p-2 mb-2 hover:text-blue-700 ${
                d?.id === active ? "bg-white shadow-sm font-semibold" : "hover:bg-gray-200"
              }`}
              onClick={() => onClickHandler(d.id)}
            >
              <p className={`flex-grow ${d.active ? "font-medium" : ""}`}>{`${
                d.id !== 0 ? "#" : ""
              }${d.name}`}</p>
            </div>
          ))}
    </div>
  );
}
