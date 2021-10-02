import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const initialData = [
  { name: "Posts", url: "/dashboard", count: 0 },
  { name: "Followers", url: "/dashboard/followers", count: 0 },
  { name: "Following", url: "/dashboard/following", count: 0 },
  { name: "Following tags", url: "/dashboard/following_tags", count: 0 },
];

export default function Sidebar({
  notLinked = false,
  data = initialData,
  selected,
  onItemSelect,
  idProperty = "id",
  textProperty = "name",
  displayName,
}) {
  const { asPath } = useRouter();

  if (notLinked === false)
    //linked sidebars
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
                className={`hover:text-blue-700 flex-grow ${asPath === d.url ? "font-medium" : ""}`}
              >
                {d.name}
              </p>
              <p className="rounded bg-gray-300 p-1 text-xs">{d.count}</p>
            </a>
          </Link>
        ))}
      </div>
    );

  return (
    <div className="flex flex-col col-span-full md:col-span-1">
      <div
        className={`flex cursor-pointer  rounded-md p-2 mb-2 hover:text-blue-700 ${
          selected === "" ? "bg-white shadow-sm font-semibold" : "hover:bg-gray-200"
        }`}
        onClick={() => onItemSelect("")}
      >
        all {displayName}
      </div>

      {data.map((d, i) => (
        <div
          key={i}
          className={`flex cursor-pointer  rounded-md p-2 mb-2 hover:text-blue-700 ${
            d?.name === selected ? "bg-white shadow-sm font-semibold" : "hover:bg-gray-200"
          }`}
          onClick={() => onItemSelect(d.name)}
        >
          <p className={`flex-grow ${d.name === selected ? "font-medium" : ""}`}>
            #{d?.[textProperty]}
          </p>
        </div>
      ))}
    </div>
  );
}
