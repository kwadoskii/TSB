import { useRouter } from "next/router";
import authService from "../apis/authService";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function ConfirmLogoutPage() {
  const router = useRouter();

  const handleSignout = () => {
    authService.logout();
    router.push("/enter");
  };

  return (
    <>
      <Title title="Confirm Logout" />
      <Navbar />

      <div className="h-screen bg-gray-200">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="font-bold text-2xl">Are you sure you want to sign out?</p>
            <button
              className="bg-blue-700 px-4 py-2.5 rounded-md items-center font-semibold text-white hover:bg-blue-800 transition-all duration-200 ease-out outline-none"
              onClick={handleSignout}
            >
              Yes, sign out
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
