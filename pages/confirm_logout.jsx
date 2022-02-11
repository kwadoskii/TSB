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
      <Navbar hideSearch />

      <div className="h-screen bg-gray-200">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="text-2xl font-bold">Are you sure you want to sign out?</p>
            <button
              className="items-center px-4 py-2.5 text-white font-semibold bg-blue-700 hover:bg-blue-800 rounded-md outline-none transition-all duration-200 ease-out"
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
