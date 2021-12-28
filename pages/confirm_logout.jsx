import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function ConfirmLogoutPage() {
  return (
    <>
      <Title title="Confirm Logout" />
      <Navbar />

      <div className="h-screen bg-gray-200">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="font-bold text-2xl">Are you sure you want to sign out?</p>
            <button className="bg-blue-700 px-4 py-2.5 rounded-md items-center font-semibold text-white">
              Yes, sign out
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
