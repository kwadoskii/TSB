import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";
import Radium from "radium";
import dynamic from "next/dynamic";
import { getTags } from "../apis/tag";
import { getUserFollowingTags, followTag, unfollowTag } from "../apis/user";
import { useState } from "react";
import { toast } from "react-toastify";
import authService from "../apis/authService";

const TagPage = ({ tags, followingTags: { tags: followingTags }, token }) => {
  return (
    <>
      <Title title="Tags" />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-2 gap-2 py-1 pb-6 lg:px-6 mx-auto">
          <div className="py-1.5 pb-5 flex justify-between items-center mb-3 md:mb-6 mt-2">
            <h2 className="md:text-3xl font-bold">Top tags</h2>
            <Link passHref href="/dashboard/following_tags">
              <a className="p-2 px-3.5 font-semibold text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200/75 transition-all duration-200 ease-out">
                Following tags
              </a>
            </Link>
          </div>

          <div className="mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tags?.map((tag) => (
              <TagCard
                tag={tag}
                key={tag._id}
                followed={followingTags?.some((f) => f._id === tag._id)}
                onFollow={() => followTag(tag._id, token)}
                onUnfollow={() => unfollowTag(tag._id, token)}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const TagCardForRadium = ({ tag, followed, onFollow, onUnfollow }) => {
  const [_followed, setFollowed] = useState(followed);

  const handleFollow = async () => {
    setFollowed(true);

    const { data, status } = await onFollow();
    if (status === 200 && data.status === "success") return;

    setFollowed(false);
    return toast.error("Could not follow this tag.");
  };

  const handleUnfollow = async () => {
    setFollowed(false);

    const { data, status } = await onUnfollow();
    if (status === 200 && data.status === "success") return;

    setFollowed(true);
    return toast.error("Could not unfollow this tag.");
  };

  return (
    <div className="rounded-md shadow-md border-gray-200 overflow-hidden bg-white">
      <div className="h-4" style={{ backgroundColor: tag?.backgroundColor + "e6" }}></div>
      <div className="p-6 bg-white flex flex-col">
        <Link passHref href={`/t/${tag?.name.toLowerCase()}`}>
          <a>
            <h2
              className="text-lg font-bold text-gray-600 cursor-pointer p-1 px-1.5 grow rounded-md group border border-opacity-0 w-min hover:text-gray-900 hover:border transition-all duration-200 ease-out"
              style={{
                ":hover": {
                  background: tag?.backgroundColor + "26",
                  border: `1px solid ${tag?.backgroundColor}`,
                },
              }}
            >
              <span className="" style={{ color: tag?.backgroundColor + "e6" }}>
                #
              </span>
              {tag?.name.toLowerCase()}
            </h2>
          </a>
        </Link>

        <div className="px-2">
          <p className="my-2 mb-1 text-gray-800">{tag?.paragraph}</p>

          <p className="text-gray-500 text-sm">{`${tag?.postCount} post${
            tag?.postCount > 1 ? "s" : ""
          } published`}</p>

          <div className="flex justify-between mt-2.5 items-center">
            {authService.getCurrentUser() && (
              <button
                className={`my-button-transparent !px-4 !py-1.5 ${
                  !_followed && "bg-gray-300/80 hover:bg-gray-400/70 hover:border-transparent"
                }`}
                onClick={_followed ? handleUnfollow : handleFollow}
              >
                {_followed ? "Following" : "Follow"}
              </button>
            )}

            {tag?.image && (
              <div className="h-14 w-14 relative rotate-6">
                <Image src={tag?.image} objectFit="contain" layout="fill" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TagCard = Radium(TagCardForRadium);

export async function getServerSideProps({ req }) {
  const {
    data: { data: tags },
  } = await getTags();

  const {
    data: { data: followingTags },
  } = await getUserFollowingTags(req.cookies.token);

  return {
    props: {
      followingTags: followingTags || [],
      tags,
      token: req.cookies.token || "",
    },
  };
}

export default dynamic(() => Promise.resolve(TagPage), {
  ssr: false,
});
