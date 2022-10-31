import { useRef, useState } from "react";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import auth from "../apis/authService";
import { toast } from "react-toastify";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const formRef = useRef(null);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const { data } = await auth.forgotPassword(email);

      if (data.status !== "success") return toast.error(data.message);

      toast.success(data.message);
      setEmail("");
    } catch (error) {
      toast.error("An error occured, please try again.");
    }
  };

  return (
    <>
      <Title title="Forgot Password" />
      <Navbar />

      <div className="h-screen bg-gray-200">
        <div className="flex flex-col items-center justify-center px-2 py-10">
          <div className="flex flex-col pb-6 px-8 py-4 w-full bg-white border border-gray-300 rounded-md md:w-2/5">
            <h2 className="text-[1.65rem] font-bold">Forgot your password?</h2>

            <form className="" ref={formRef} onSubmit={(e) => handleForgotPassword(e)}>
              <Input
                hasLabel
                type="email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@example.com"
                onKeyDown={(e) => e.key === "Enter" && formRef.current.handleForgotPassword}
              />

              <button
                className="items-center px-4 py-2.5 w-full text-white font-semibold bg-blue-700 hover:bg-blue-800 rounded-md outline-none transition-all duration-200 ease-out"
                type="submit"
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
