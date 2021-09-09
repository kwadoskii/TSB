import Link from "next/link";
import config from "../constants/config.json";

export default function NavbarDropdown({
  username = "lemon1",
  firstname = "Lemon",
  lastname = "Uno",
}) {
  const navs = config.navs;

  return (
    <div className="list-none m-0">
      <div className="p-1 border-b border-gray-200">
        <div className="cursor-pointer p-1 rounded-md hover:bg-gray-100 hover:text-blue-600">
          <Link href={`/${username}`} passHref>
            <a className="flex cursor-pointer flex-col py-2 px-1 font-medium">
              {`${firstname} ${lastname}`}
              <span className="inline-block text-gray-500 text-sm font-medium">
                @{username}
              </span>
            </a>
          </Link>
        </div>
      </div>

      <div className="p-1">
        {navs.map((n, i) =>
          i !== navs.length - 1 ? (
            <li
              className="cursor-pointer rounded-md hover:bg-gray-100 hover:text-blue-600"
              key={i}
            >
              <Link href={n.href} passHref>
                <a className="flex cursor-pointer flex-col p-2">
                  <p>{n.title}</p>
                </a>
              </Link>
            </li>
          ) : null
        )}
      </div>

      {navs.map((n, i) =>
        i === navs.length - 1 ? (
          <div className="p-1 border-t border-gray-200" key={i}>
            <li className="cursor-pointer rounded-md hover:bg-gray-100 hover:text-blue-600">
              <Link href={n.href} passHref>
                <a className="flex cursor-pointer flex-col p-2">
                  <p>{n.title}</p>
                </a>
              </Link>
            </li>
          </div>
        ) : null
      )}
    </div>
  );
}
