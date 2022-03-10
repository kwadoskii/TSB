import Image from "next/image";
import Link from "next/link";
import ArticleCard from "../../components/ArticleCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import SmallCard from "../../components/SmallCard";
import Title from "../../components/Title";
import authService from "../../apis/authService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  reactions,
  savedPosts,
  savePost,
  unsavePost,
  userComments,
  userPosts,
} from "../../apis/user";
import { likePost, unlikePost } from "../../apis/post";

export default function DashboardIndexPage({
  userPosts,
  userComments,
  userReactions,
  userSavedPosts,
}) {
  const [dashboardCounters, setDashboardCounters] = useState([
    { name: "Total post reaction", count: 0 },
    { name: "Total post view", count: 0 },
    { name: "Total post comment", count: 0 },
  ]);

  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const router = useRouter();

  console.log(userPosts);

  //route protection
  useEffect(() => {
    if (!authService.getCurrentUser()) {
      return router.push("/enter");
    }

    const views = userPosts.reduce((prev, u) => prev + u.views, 0);
    const commentsCount = userPosts.reduce((prev, u) => prev + u.commentsCount, 0);
    const likesCount = userPosts.reduce((prev, u) => prev + u.likesCount, 0);

    const prevDashboardCounters = dashboardCounters;

    prevDashboardCounters[0].count = likesCount;
    prevDashboardCounters[1].count = views;
    prevDashboardCounters[2].count = commentsCount;

    setDashboardCounters([...prevDashboardCounters]);
    setLoading(false);
    setToken(authService.getJwt());
  }, [loading]);

  //route protection of content
  return loading ? null : (
    <>
      <Navbar />
      <Title title="Dashboard" />

      <div className="my-min-height bg-gray-100">
        <div className="relative gap-2 mx-auto px-1 py-1 max-w-7xl lg:px-6 lg:py-4">
          <div className="pb-5 py-3">
            <h2 className="text-2xl font-bold">Dashboard </h2>
          </div>

          {/* smallcard */}
          <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
            {dashboardCounters.map((d, i) => (
              <SmallCard key={i} title={d.count} subtitle={d.count <= 1 ? d.name : d.name + "s"} />
            ))}
          </div>

          <div className="grid gap-3 my-4 md:grid-cols-5">
            <Sidebar hasLinks />

            {/* content */}
            <div className="flex flex-col col-span-full md:col-span-4">
              <h2 className="my-1 text-xl font-bold">Posts</h2>
              {userPosts?.length === 0 ? (
                <div className="mt-2 bg-gray-50 border border-gray-300 rounded-md">
                  <div className="flex flex-col gap-10 items-center justify-center py-16">
                    {/* image */}
                    <div className="relative w-1/3 h-64">
                      <Image
                        alt="no post"
                        layout="fill"
                        src="/images/nopostyet.png"
                        objectFit="contain"
                      />
                    </div>

                    <div className="flex flex-col gap-5">
                      <p>
                        This is where you can manage your posts, but you haven't written anything
                        yet.
                      </p>

                      <Link passHref href="/write">
                        <a className="my-button !mr-auto mx-auto">Write your first post now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="">
                  {userPosts?.map((post) => (
                    <ArticleCard
                      key={post._id}
                      userPost
                      articleDetails={post}
                      user={authService.getCurrentUser()}
                      onLike={() => likePost(post._id, token)}
                      onUnlike={() => unlikePost(post._id, token)}
                      onSave={() => savePost(post._id, token)}
                      onUnsave={() => unsavePost(post._id, token)}
                      liked={() => userReactions?.some((ur) => ur._id === post._id)}
                      saved={() => userSavedPosts?.some((usp) => usp._id === post._id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;

  const {
    data: { data: _userPosts },
  } = await userPosts(token);
  const {
    data: { data: _userComments },
  } = await userComments(token);
  const {
    data: { data: _userReactions },
  } = await reactions(token);
  const {
    data: { data: _userSavedPosts },
  } = await savedPosts(token);

  return {
    props: {
      userPosts: _userPosts,
      userComments: _userComments,
      userReactions: _userReactions?.reactions?.map((ur) => ur.postId) || [],
      userSavedPosts: _userSavedPosts.map((usp) => usp.postId) || [],
    },
  };
}
