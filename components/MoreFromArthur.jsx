import Link from "next/link";

export default function MoreFromArthur({ profile, previousPosts, numberOfPosts = 5 }) {
  // previousPosts = [
  //   {
  //     _id: "one",
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     url: "/jwad/i-love-javascript",
  //     tags: [{ name: "politics" }, { name: "football" }, { name: "music" }, { name: "crime" }],
  //   },
  //   {
  //     _id: "two",
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     url: "/jwad/i-love-javascript",
  //     tags: [{ name: "politics" }, { name: "football" }, { name: "music" }, { name: "crime" }],
  //   },
  //   {
  //     _id: "three",
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     url: "/jwad/i-love-javascript",
  //     tags: [{ name: "politics" }, { name: "football" }, { name: "music" }, { name: "crime" }],
  //   },
  //   {
  //     _id: "four",
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     url: "/jwad/i-love-javascript",
  //     tags: [{ name: "politics" }, { name: "football" }, { name: "music" }, { name: "crime" }],
  //   },
  //   {
  //     _id: "five",
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     url: "/jwad/i-love-javascript",
  //     tags: [{ name: "politics" }, { name: "football" }, { name: "music" }, { name: "crime" }],
  //   },
  // ];

  if (Array.isArray(previousPosts) && previousPosts?.length === 0) return null;

  return (
    <div className="flex flex-col border-gray-300 rounded-md bg-gray-50 mt-3 border last:border-b-0 overflow-hidden shadow-md">
      <div className="border-b border-gray-300 p-4">
        <h2 className="font-bold text-xl">
          More from{" "}
          <Link passHref href={`/${profile.username}`}>
            <a className="text-blue-700">{profile.firstname + " " + profile.lastname}</a>
          </Link>
        </h2>
      </div>

      {previousPosts?.slice(0, numberOfPosts).map((post) => (
        <div
          className="border-b border-gray-300 p-4 cursor-pointer text-gray-800 hover:bg-white hover:text-blue-600"
          key={post._id.toString()}
        >
          <Link passHref href={`/${profile.username}/${post.slug}`}>
            <a>
              <p>{post.title}</p>

              <div className="flex flex-wrap my-2 gap-2 text-gray-500 text-sm">
                {post.tags?.map((tag, i) => (
                  <p key={i}>
                    <span className="text-gray-300">#</span>
                    {tag.name}
                  </p>
                ))}
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
