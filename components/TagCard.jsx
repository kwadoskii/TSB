import Link from "next/link";

export default function TagCard({ barColor, name, subtitle }) {
  return (
    <div className="rounded-md border border-gray-200 bg-white shadow-sm relative overflow-hidden">
      <div className="h-2" style={{ backgroundColor: barColor }}></div>
      <div className="px-4 py-4 flex flex-col gap-1">
        <Link passHref href={`/t/${name}`}>
          <a>
            <p className="text-lg text-gray-500 hover:text-black cursor-pointer font-semibold transition duration-100 ease-in-out">
              <span className="opacity-40 font-normal">#</span>
              {name}
            </p>
          </a>
        </Link>

        <div className="mb-2">
          {subtitle && <p className="text-gray-500 text-sm line-clamp-3">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
