import Footer from "../components/Footer";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function ForgotPasswordPage() {
  return (
    <>
      <Title title="Forgot Password" />
      <Navbar />

      <div className="h-screen bg-gray-200">
        <div className="flex flex-col justify-center items-center py-10 px-2">
          <div className="flex flex-col bg-white py-4 px-8 pb-6 border rounded-md border-gray-300 w-full md:w-2/5">
            <h2 className="font-bold text-[1.65rem]">Forgot your password?</h2>

            <div className="">
              <Input hasLabel type="email" name="Email" placeholder="johndoe@example.com" />

              <button className="bg-blue-700 px-4 py-2.5 rounded-md items-center font-semibold text-white hover:bg-blue-800 transition-all duration-200 ease-out w-full outline-none">
                Reset password
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer  />
    </>
  );
}
