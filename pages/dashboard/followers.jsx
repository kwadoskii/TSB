import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Sidebar from "../../components/Sidebar";

export default function followers() {
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
          </div>
        </div>
      </div>
    </>
  );
}
