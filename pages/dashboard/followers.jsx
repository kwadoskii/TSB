import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Sidebar from "../../components/Sidebar";
import FollowerCard from "../../components/FollowerCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import authService from "../../apis/authService";
import { followers as followersApi } from "../../apis/user";

export default function FollowersPage({ followers }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //route protection
  useEffect(() => {
    if (!authService.getCurrentUser()) {
      return router.push("/enter");
    }
    setLoading(false);
  }, [loading]);

  //route protection of content
  return loading ? null : (
    <>
      <Title title="Dashboard" />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-1 gap-2 py-1 lg:py-4 lg:px-6 mx-auto">
          <div className="py-3 pb-5">
            <h2 className="font-bold text-2xl">Dashboard » Followers</h2>
          </div>

          <div className="grid md:grid-cols-5 my-4 gap-3">
            <Sidebar hasLinks />

            <div className="flex flex-col col-span-full md:col-span-4">
              <div className="grid grid-cols-3 gap-1 lg:gap-3">
                {followers?.map(({ _id, profileImage, firstname, lastname, username }) => (
                  <FollowerCard
                    key={_id}
                    img={profileImage}
                    name={firstname + " " + lastname}
                    username={username}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const {
    data: { data: _followers },
  } = await followersApi(req.cookies.token);

  return {
    props: {
      followers: _followers,
    },
  };
}
