import { useRouter } from "next/router";
import { MapPin, Gift, Book, MessageSquare, Hash, User } from "react-feather";

import ArticleCard from "../../components/ArticleCard";
import Navbar from "../../components/Navbar";
import RecentComments from "../../components/RecentComments";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Image from "next/image";
import { profile as profileApi } from "../../apis/user";
import authService from "../../apis/authService";
import dayjs from "dayjs";

export default function ProfilePage({ commentsOnly = false, profileDetails, token }) {
  const router = useRouter();
  const {
    query: { profile },
  } = router;

  const gotoSettings = (e) => {
    e.preventDefault();

    router.push("/settings");
  };

  return (
    <>
      <Title title={profileDetails.username} />
      <Navbar />

      <main className="my-min-height p-0 bg-gray-200 pb-8 relative">
        <div className="absolute top-0 w-full h-[230px] bg-my-purple"></div>
        <div className="pt-6 max-w-5xl mx-auto flex-col items-center md:px-6 px-3 relative">
          <div className="pt-12 lg:pt-20">
            <div className="w-full rounded-t-md border border-gray-300 flex bg-white pb-9 relative items-start flex-col gap-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32 lg:h-40 lg:w-40 mx-auto border-[5px] rounded-full border-my-purple -mt-12 md:-mt-14 lg:-mt-20 md:border-[6px]">
                <Image
                  src={profileDetails?.profileImage}
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>

              {authService.getCurrentUser(token)?._id === profileDetails._id && (
                <div className="absolute top-3 right-3">
                  <button
                    className="border-none p-3 bg-blue-700 text-white font-medium text-sm cursor-pointer rounded-md hover:bg-blue-800 transition duration-100 ease-out self-end items-start"
                    onClick={gotoSettings}
                  >
                    Edit profile
                  </button>
                </div>
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
              <span>{profileDetails.posts?.length || 0} posts published</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <MessageSquare size={21} className="text-gray-500" />
              <span>{profileDetails.comments?.length || 0} comments written</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Hash size={21} className="text-gray-500" />
              <span>{profileDetails.followingTags?.length || 0} tags followed</span>
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
  const {
    data: { data, status },
  } = await profileApi(params.profile, req.cookies.token);

  if (status === "error") return { notFound: true };

  return {
    props: { profileDetails: data, token: req.cookies.token },
  };
}
