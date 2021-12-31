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

export default function DashboardIndexPage() {
  const data = [
    { name: "Total post reactions", count: "0" },
    { name: "Total post views", count: "< 500" },
    { name: "Total comments", count: "11" },
  ];

  const [loading, setLoading] = useState(true);

  const posts = [1, 3];
  const router = useRouter();

  useEffect(() => {
    if (!authService.getCurrentUser()) {
      return router.push("/enter");
    }
    setLoading(false);
  }, [loading]);

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
              <SmallCard key={i} title={d.count} subtitle={d.name} />
            ))}
          </div>

          <div className="grid md:grid-cols-5 my-4 gap-3">
            <Sidebar hasLinks />

            {/* content */}
            <div className="flex flex-col col-span-full md:col-span-4">
              <h2 className="font-bold text-xl my-1">Posts</h2>
              {posts.length <= 0 ? (
                <div className="bg-gray-50 border rounded-md border-gray-300 mt-2">
                  <div className="flex items-center justify-center py-16 flex-col gap-10">
                    {/* image */}
                    <div className="h-64 relative w-1/3">
                      <Image
                        alt="no post"
                        layout="fill"
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--XHE_XeFn--/c_imagga_scale,f_auto,fl_progressive,q_auto,w_300/https://dev-to-uploads.s3.amazonaws.com/i/y5767q6brm62skiyywvc.png"
                        objectFit="contain"
                      />
                    </div>

                    <div className="flex flex-col gap-5">
                      <p>
                        This is where you can manage your posts, but you haven't written anything
                        yet.
                      </p>

                      <Link passHref href="/write">
                        <a className="mx-auto my-button">Write your first post now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="">
                  {posts.map((p, i) => (
                    <ArticleCard key={i} userPost />
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
