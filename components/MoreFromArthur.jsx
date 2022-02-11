import Link from "next/link";

export default function MoreFromArthur({ profile, previousPosts, numberOfPosts = 5 }) {
  if (Array.isArray(previousPosts) && previousPosts?.length === 0) return null;

  return (
    <div className="flex flex-col mt-3 bg-gray-50 border last:border-b-0 border-gray-300 rounded-md shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-xl font-bold">
          More from{" "}
          <Link passHref href={`/${profile.username}`}>
            <a className="text-blue-700">{profile.firstname + " " + profile.lastname}</a>
          </Link>
        </h2>
      </div>

      {previousPosts?.slice(0, numberOfPosts).map((post) => (
        <div
          className="p-4 hover:text-blue-600 text-gray-800 hover:bg-white border-b border-gray-300 cursor-pointer"
          key={post._id.toString()}
        >
          <Link passHref href={`/${profile.username}/${post.slug}`}>
            <a>
              <p>{post.title}</p>

              <div className="flex flex-wrap gap-2 my-2 text-gray-500 text-sm">
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
