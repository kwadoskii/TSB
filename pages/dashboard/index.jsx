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
import { reactions, userComments, userPosts } from "../../apis/user";

export default function DashboardIndexPage({ userPosts, userComments, userReaction }) {
  const [data, setData] = useState([
    { name: "Total post reaction", count: 0 },
    { name: "Total post view", count: 0 },
    { name: "Total comment", count: 0 },
  ]);

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //route protection
  useEffect(() => {
    if (!authService.getCurrentUser()) {
      return router.push("/enter");
    }

    const views = userPosts.reduce((prev, u) => prev + u.views, 0);
    const clone = data;

    clone[0].count = userReaction?.length;
    clone[1].count = views;
    clone[2].count = userComments?.length;

    setData([...clone]);
    setLoading(false);
  }, [loading]);

  //route protection of content
  return loading ? null : (
    <>
      <Navbar />
      <Title title="Dashboard" />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-1 gap-2 py-1 lg:py-4 lg:px-6 mx-auto">
          <div className="py-3 pb-5">
            <h2 className="font-bold text-2xl">Dashboard </h2>
          </div>

          {/* smallcard */}
          <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
            {data.map((d, i) => (
              <SmallCard key={i} title={d.count} subtitle={d.count <= 1 ? d.name : d.name + "s"} />
            ))}
          </div>

          <div className="grid md:grid-cols-5 my-4 gap-3">
            <Sidebar hasLinks />

            {/* content */}
            <div className="flex flex-col col-span-full md:col-span-4">
              <h2 className="font-bold text-xl my-1">Posts</h2>
              {userPosts?.length === 0 ? (
                <div className="bg-gray-50 border rounded-md border-gray-300 mt-2">
                  <div className="flex items-center justify-center py-16 flex-col gap-10">
                    {/* image */}
                    <div className="h-64 relative w-1/3">
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
                        <a className="mx-auto my-button !mr-auto">Write your first post now</a>
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

  return {
    props: {
      userPosts: _userPosts,
      userComments: _userComments,
      userReaction: _userReactions?.reactions || [],
    },
  };
}
