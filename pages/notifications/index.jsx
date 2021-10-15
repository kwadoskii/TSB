import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Title from "../../components/Title";
import Link from "next/link";
import Image from "next/image";
import Card from "../../components/Card";

export default function NotificationPage() {
  const data = [
    { name: "All", url: "/notifications" },
    { name: "Comments", url: "/notifications/comments" },
    { name: "Posts", url: "/notifications/posts" },
  ];

  return (
    <>
      <Title title="Notifications" />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-6xl relative px-1 py-1 lg:py-4 lg:px-6 mx-auto">
          <div className="lg:w-11/12 mx-auto flex items-center mb-3 md:mb-6 mt-2 justify-between">
            <h2 className="text-xl md:text-3xl font-bold">Notifications</h2>
            <Link passHref href="/settings">
              <a className="p-2 px-3.5 font-semibold text-gray-600 rounded-md hover:text-gray-800 hover:bg-gray-200 transition duration-100 ease-out">
                Settings
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-12 lg:w-11/12 mx-auto gap-4">
            <div className="col-span-full md:col-span-4 lg:col-span-3">
              <Sidebar hasLinks data={data} hasCount={false} />
            </div>
            <div className="col-span-full md:col-span-8 lg:col-span-9">
              <Card className="grid grid-cols-small">
                <div className="relative h-12 w-12">
                  <Image
                    className="rounded-full"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--yG9NaJlu--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/161327/2ff05281-db58-4dcb-946a-4b679e4a266b.jpeg"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
