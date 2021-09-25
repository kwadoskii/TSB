import Image from "next/image";

export default function CompetitonCard({ data, position, first = false }) {
  return (
    <div
      className={`bg-white w-full border-[3px] border-transparent border-gray-300 shadow-lg p-4 rounded-md ${
        first && "border-yellow-400 scale-105"
      }`}
    >
      <div className="grid grid-cols-tiny md:grid-cols-small gap-0 cursor-pointer">
        <p className="text-2xl font-semibold">{position + "."}</p>

        <div className="flex gap-3 md:gap-8 items-center">
          <div className="relative h-20 w-20 md:h-28 md:w-28">
            <Image
              layout="fill"
              src={data.profilePicture}
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          <div className="flex-grow flex-col">
            <h2 className="text-2xl font-semibold">{data.name}</h2>
            <div className="flex flex-col md:flex-row gap-1 my-2 text-xs md:text-base md:gap-3">
              <p className="text-gray-500">
                Posts: <span className="font-semibold text-gray-800">{data.activities.posts}</span>
              </p>
              <p className="text-gray-500">
                Comments:{" "}
                <span className="font-semibold text-gray-800">{data.activities.comments}</span>
              </p>
              <p className="text-gray-500">
                Likes: <span className="font-semibold text-gray-800">{data.activities.likes}</span>
              </p>
              <p className="text-gray-500">
                Shares:{" "}
                <span className="font-semibold text-gray-800">{data.activities.shares}</span>
              </p>
            </div>

            <p className="font-semibold text-lg">
              <span className="text-red-700">Aggregate:</span> {data.aggregate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
