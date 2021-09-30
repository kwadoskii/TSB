import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Advert from "../components/Advert";

export default function Home() {
  return (
    <>
      <Title title="Home" />
      <Navbar />

      <main>
        <div className="bg-gray-100 my-min-height">
          <div className="max-w-7xl relative px-2 py-1 lg:py-4 lg:px-6 mx-auto">
            <div className="grid grid-cols-9 gap-5 my-0">
              <div className="col-span-2 relative">
                <div className="min-h-screen rounded-md sticky top-8 hidden md:flex flex-col gap-3">
                  {/* <Advert />
                  <Advert />
                  <Advert /> */}
                </div>
              </div>

              <div className="col-span-full md:col-span-5">
                <Feed />
              </div>

              <div className="col-span-2 hidden md:flex"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
