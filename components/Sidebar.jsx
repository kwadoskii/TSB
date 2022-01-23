import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import authService from "../apis/authService";
import { followers, followingUsers, getUserFollowingTags, profile, savedPosts } from "../apis/user";

const initialData = [
  { name: "Posts", url: "/dashboard", count: 0 },
  { name: "Followers", url: "/dashboard/followers", count: 0 },
  { name: "Following", url: "/dashboard/following", count: 0 },
  { name: "Following tags", url: "/dashboard/following_tags", count: 0 },
];

export default function Sidebar({
  data = initialData,
  displayName,
  hasLinks = false,
  idProperty = "id",
  hasCount = true,
  onItemSelect,
  selected,
  textProperty = "name",
}) {
  const { asPath } = useRouter();
  const [daata, setDaata] = useState(data);

  useEffect(async () => {
    let mounted = true;

    if (mounted) {
      const token = authService.getJwt();
      const {
        data: { data: _profile },
      } = await profile(authService.getCurrentUser().username, token);
      const {
        data: { data: _followingUsers },
      } = await followingUsers(token);
      const {
        data: { data: _followers },
      } = await followers(token);
      const {
        data: { data: _followingTags },
      } = await getUserFollowingTags(token);

      const clone = daata;
      clone[0].count = _profile.posts.length;
      clone[1].count = _followers.length;
      clone[2].count = _followingUsers.length;
      clone[3].count = _followingTags.tags.length;

      setDaata([...clone]);
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  if (hasLinks === true)
    //sidebar nav with links
    return (
      <div className="flex flex-col">
        {daata.map((d, i) => (
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
              {hasCount && <p className="rounded bg-gray-300 p-1 text-xs">{d.count}</p>}
            </a>
          </Link>
        ))}
      </div>
    );

  return (
    <>
      <div className="hidden md:flex flex-col col-span-full md:col-span-1">
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

      <div className="block md:hidden">
        <select
          className="w-full rounded-md border border-gray-300 p-2 outline-none z-50"
          onChange={(e) => onItemSelect(e.target.value)}
        >
          <option value="">all {displayName}</option>
          {data.map((d, i) => (
            <option value={d.name} key={i}>
              #{d.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
