import { useRouter } from "next/router";
import { MapPin, Gift, Book, MessageSquare, Hash } from "react-feather";

import ArticleCard from "../../components/ArticleCard";
import Navbar from "../../components/Navbar";
import RecentComments from "../../components/RecentComments";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Image from "next/image";
import {
  followingUsers,
  followUser,
  profile as profileApi,
  reactions,
  savedPosts,
  savePost,
  unfollowUser,
  unsavePost,
} from "../../apis/user";
import authService from "../../apis/authService";
import dayjs from "dayjs";
import { likePost, unlikePost } from "../../apis/post";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProfilePage({
  commentsOnly = false,
  profileDetails,
  token,
  userLikes,
  userPosts,
  userFollowingUsers,
}) {
  const router = useRouter();
  const {
    query: { profile },
  } = router;
  const [followed, setFollowed] = useState("");

  const gotoSettings = (e) => {
    e.preventDefault();
    router.push("/settings");
  };

  const handleFollow = async (userId) => {
    setFollowed(true);

    const { data, status } = await followUser(userId, token);
    if (status === 200 && data.status === "success") return;

    setFollowed(false);
    return toast.error(data.message);
  };

  const handleUnfollow = async (userId) => {
    setFollowed(false);

    const { data, status } = await unfollowUser(userId, token);
    if (status === 200 && data.status === "success") return;

    setFollowed(true);
    return toast.error(data.message);
  };

  useEffect(() => {
    setFollowed(
      userFollowingUsers.some((followingUser) => followingUser._id === profileDetails._id)
    );
  }, []);

  return (
    <>
      <Title title={profileDetails.username} />
      <Navbar />

      <main className="my-min-height p-0 bg-gray-200 pb-8 relative">
        <div className="absolute top-0 w-full h-[230px] bg-my-purple"></div>
        <div className="pt-6 max-w-5xl mx-auto flex-col items-center md:px-6 px-3 relative">
          <div className="pt-12 lg:pt-20">
            <div className="w-full rounded-t-md border border-gray-300 flex bg-white pb-9 relative items-start flex-col gap-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32 lg:h-40 lg:w-40 mx-auto rounded-full border-my-purple -mt-12 md:-mt-14 lg:-mt-20 shadow-2xl">
                <Image
                  src={
                    profileDetails?.profileImage ||
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--rIMJB0Lh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/881jdm7sdnril6hn3f3l.PNG"
                  }
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>

              {authService.getCurrentUser() ? (
                authService.getCurrentUser(token)?._id === profileDetails._id ? (
                  <div className="absolute top-3 right-3">
                    <button
                      className="border-none p-2.5 px-4 bg-blue-700 text-white font-medium text-sm cursor-pointer rounded-md hover:bg-blue-800 transition duration-100 ease-out self-end items-start outline-none"
                      onClick={gotoSettings}
                    >
                      Edit profile
                    </button>
                  </div>
                ) : (
                  <div className="absolute top-3 right-3">
                    <button
                      className={`border-none p-3 bg-transparent text-blue-700 font-semibold text-sm cursor-pointer rounded-md hover:bg-blue-200/30 transition duration-100 ease-out self-end items-start ring-1 ring-blue-600 ${
                        !followed && "!bg-blue-600 !text-white hover:!bg-blue-600/80"
                      }`}
                      onClick={
                        followed
                          ? () => handleUnfollow(profileDetails._id)
                          : () => handleFollow(profileDetails._id)
                      }
                    >
                      {followed ? "Following" : "Follow"}
                    </button>
                  </div>
                )
              ) : (
                ""
              )}
            </div>

            <div className="w-full bg-white border-r border-l border-gray-300 text-center py-6 px-1">
              <h2 className="text-4xl font-black">
                {profileDetails.firstname + " " + profileDetails.lastname} ({profile})
              </h2>

              <p className="w-3/4 mx-auto text-lg py-1">{profileDetails.bio}</p>

              <div className="flex row flex-wrap text-gray-500 justify-center items-center my-4">
                {profileDetails.location && (
                  <div className="my-0 mx-4 flex min-w-min items-center">
                    <MapPin size={20} />
                    <span className="ml-1 text-sm">{profileDetails.location}</span>
                  </div>
                )}

                <div className="my-0 mx-4 flex min-w-min items-center">
                  <Gift size={20} />
                  <span className="ml-1 text-sm">
                    Joined on {dayjs(profileDetails.joined).format("MMM DD, YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-center w-full border rounded-b-md border-gray-300 shadow-md">
            <div className="my-8 text-gray-500">
              {profileDetails.occupation?.position && (
                <>
                  <h5 className="font-medium text-sm">Work</h5>
                  <p className="text-gray-800">{profileDetails.occupation?.position}</p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-3 mt-2 max-w-5xl mx-auto md:px-6 px-3 relative items-start">
          <div className="flex p-4 flex-col col-span-full md:col-span-2 bg-gray-50 rounded-md border border-gray-300 text-gray-800 gap-4 shadow-md">
            <div className="flex flex-wrap items-center gap-2">
              <Book size={21} className="text-gray-500" />
              <span>
                {profileDetails.posts?.length || 0} post{profileDetails.posts?.length > 1 && "s"}{" "}
                published
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <MessageSquare size={21} className="text-gray-500" />
              <span>
                {profileDetails.comments?.length || 0} comment
                {profileDetails.comments?.length > 1 && "s"} written
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Hash size={21} className="text-gray-500" />
              <span>
                {profileDetails.followingTags?.tagId?.length || 0} tag
                {profileDetails.followingTags?.tagId?.length > 1 && "s"} followed
              </span>
            </div>
          </div>

          <div className="flex flex-col flex-wrap col-span-full md:col-span-4 gap-2">
            {profileDetails.comments.length > 0 && (
              <RecentComments
                profileUrl={profile}
                commentsOnly={commentsOnly}
                comments={profileDetails.comments}
              />
            )}

            {!commentsOnly && (
              <div>
                {profileDetails.posts.map((post) => (
                  <ArticleCard
                    articleDetails={post}
                    key={post._id}
                    userPost={authService.getCurrentUser(token)?._id === profileDetails._id}
                    user={{
                      firstname: profileDetails.firstname,
                      lastname: profileDetails.lastname,
                      profileImage: profileDetails.profileImage,
                      username: profileDetails.username,
                    }}
                    onLike={() => likePost(post._id, token)}
                    onUnlike={() => unlikePost(post._id, token)}
                    liked={userLikes?.reactions?.some((ul) => ul._id === post._id)}
                    onSave={() => savePost(post._id, token)}
                    onUnsave={() => unsavePost(post._id, token)}
                    saved={userPosts?.some((up) => up._id === post._id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const { token } = req.cookies;

  const {
    data: { data: profileDetails, status },
  } = await profileApi(params.profile);

  const {
    data: { data: userLikes },
  } = await reactions(token);

  const {
    data: { data: userPosts },
  } = await savedPosts(token);

  const {
    data: { data: userFollowingUsers },
  } = await followingUsers(token);

  if (status === "error") return { notFound: true };

  return {
    props: {
      profileDetails,
      token: token || "",
      userLikes: userLikes || [],
      userPosts: userPosts || [],
      userFollowingUsers: userFollowingUsers || [],
    },
  };
}
