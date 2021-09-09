import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Sidebar from "../../components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import FollowerCard from "../../components/FollowerCard";

export default function followers() {
  const followers = [
    {
      username: "unohanandez",
      name: "Uno Hanandez",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--dQPUaLyU--/c_fill,f_auto,fl_progressive,h_60,q_auto,w_60/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/632113/ce3053da-2661-4bd7-bf26-c0bc7600f4a4.jpeg",
    },
    {
      username: "dosmiguel",
      name: "Dos Miguel",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--lkWGw_C8--/c_fill,f_auto,fl_progressive,h_60,q_auto,w_60/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/649917/ea1d8682-3af5-40c2-a3d3-58a5c663cc4c.png",
    },
    {
      username: "tressilva",
      name: "Tres Silva",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--lkWGw_C8--/c_fill,f_auto,fl_progressive,h_60,q_auto,w_60/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/649917/ea1d8682-3af5-40c2-a3d3-58a5c663cc4c.png",
    },
    {
      username: "tressilva",
      name: "Tres Silva",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--lkWGw_C8--/c_fill,f_auto,fl_progressive,h_60,q_auto,w_60/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/649917/ea1d8682-3af5-40c2-a3d3-58a5c663cc4c.png",
    },
    {
      username: "tressilva",
      name: "Tres Silva",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--lkWGw_C8--/c_fill,f_auto,fl_progressive,h_60,q_auto,w_60/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/649917/ea1d8682-3af5-40c2-a3d3-58a5c663cc4c.png",
    },
  ];

  return (
    <>
      <Title title="Dashboard" />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-1 gap-2 py-1 lg:py-4 lg:px-6 mx-auto">
          <div className="py-3 pb-5">
            <h2 className="font-bold text-2xl">Dashboard » Followers</h2>
          </div>

          <div className="grid grid-cols-5 my-4 gap-3">
            <Sidebar />

            <div className="flex flex-col col-span-full md:col-span-4">
              <div className="grid grid-cols-3 gap-1 lg:gap-3">
                {followers.map(({ img, name, username }, i) => (
                  <FollowerCard key={i} img={img} name={name} username={username} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
