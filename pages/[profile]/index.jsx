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
import { LinkIcon, MailIcon } from "@heroicons/react/outline";

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
      userFollowingUsers?.some((followingUser) => followingUser._id === profileDetails._id)
    );
  }, []);

  return (
    <>
      <Title title={profileDetails.username} />
      <Navbar />

      <main className="my-min-height relative p-0 pb-8 bg-gray-200">
        <div className="h-[230px] absolute top-0 w-full bg-my-purple"></div>
        <div className="relative flex-col items-center mx-auto pt-6 px-3 max-w-5xl md:px-6">
          <div className="pt-12 lg:pt-20">
            <div className="relative flex flex-col gap-0 items-start pb-9 w-full bg-white border border-gray-300 rounded-t-md">
              <div className="relative -mt-12 mx-auto w-24 h-24 border-my-purple rounded-full shadow-2xl md:-mt-14 md:w-32 md:h-32 lg:-mt-20 lg:w-40 lg:h-40">
                <Image
                  src={
                    profileDetails?.profileImage ||
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--rIMJB0Lh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/881jdm7sdnril6hn3f3l.PNG"
                  }
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  priority={true}
                />
              </div>

              {authService.getCurrentUser() ? (
                authService.getCurrentUser(token)?._id === profileDetails._id ? (
                  <div className="absolute right-3 top-3">
                    <button
                      className="items-start self-end p-2.5 px-4 text-white text-sm font-medium bg-blue-700 hover:bg-blue-800 border-none rounded-md outline-none cursor-pointer transition duration-100 ease-out"
                      onClick={gotoSettings}
                    >
                      Edit profile
                    </button>
                  </div>
                ) : (
                  <div className="absolute right-3 top-3">
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

            <div className="px-1 py-6 w-full text-center bg-white border-l border-r border-gray-300">
              <h2 className="text-4xl font-black">
                {profileDetails.firstname + " " + profileDetails.lastname} ({profile})
              </h2>

              <p className="mx-auto py-1 w-3/4 text-lg">{profileDetails.bio}</p>

              <div className="row flex flex-wrap gap-4 gap-y-1 items-center justify-center mx-auto my-4 text-gray-500 md:w-8/12">
                {profileDetails.location && (
                  <div className="flex gap-0.5 items-center my-0">
                    <MapPin size={19} />
                    <span className="ml-1 text-sm">{profileDetails.location}</span>
                  </div>
                )}

                <div className="flex gap-0.5 items-center my-0">
                  <Gift size={19} />
                  <span className="ml-1 text-sm">
                    Joined on {dayjs(profileDetails.joined).format("MMM DD, YYYY")}
                  </span>
                </div>

                {profileDetails.displayEmail && (
                  <div className="flex gap-0.5 items-center">
                    <MailIcon className="h-6" />
                    <a href={`mailto:${profileDetails.email}`} className="text-sm">
                      {profileDetails.email}
                    </a>
                  </div>
                )}

                {profileDetails.displayWebsite && profileDetails.website && (
                  <div className="flex gap-0.5 items-center">
                    <LinkIcon className="h-5" />
                    <a href={profileDetails.website} className="text-sm">
                      {profileDetails.website}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full text-center bg-white border border-gray-300 rounded-b-md shadow-md">
            <div className="my-8 text-gray-500">
              {profileDetails.occupation?.position && (
                <>
                  <h5 className="text-sm font-medium">Work</h5>
                  <p className="text-gray-800">{profileDetails.occupation?.position}</p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="relative grid gap-3 grid-cols-6 items-start mt-2 mx-auto px-3 max-w-5xl md:px-6">
          <div className="flex flex-col gap-4 col-span-full p-4 text-gray-800 bg-gray-50 border border-gray-300 rounded-md shadow-md md:col-span-2">
            <div className="flex flex-wrap gap-2 items-center">
              <Book size={21} className="text-gray-500" />
              <span>
                {profileDetails.posts?.length || 0} post{profileDetails.posts?.length > 1 && "s"}{" "}
                published
              </span>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <MessageSquare size={21} className="text-gray-500" />
              <span>
                {profileDetails.comments?.length || 0} comment
                {profileDetails.comments?.length > 1 && "s"} written
              </span>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Hash size={21} className="text-gray-500" />
              <span>
                {profileDetails.followingTags?.tagId?.length || 0} tag
                {profileDetails.followingTags?.tagId?.length > 1 && "s"} followed
              </span>
            </div>
          </div>

          <div className="flex flex-col flex-wrap gap-2 col-span-full md:col-span-4">
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
                    liked={userLikes?.reactions?.some((ul) => ul.postId._id === post._id)}
                    saved={userPosts?.some((up) => up.postId._id === post._id)}
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
