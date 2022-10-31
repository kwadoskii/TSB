import { useRef, useState } from "react";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import auth from "../../apis/authService";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function ResetPage() {
  const formRef = useRef(null);
  const { query, replace } = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleForgotPassword = async (e) => {
    setSubmitting(true);
    e.preventDefault();

    try {
      const { data, status } = await auth.resetPassword(query.resetToken, password);

      if (status !== 200) return toast.error(data?.message || "An error occured.");

      toast.success(data.message);
      setConfirmPassword("");
      setPassword("");

      return replace("/enter");
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Title title="Reset Password" />
      <Navbar />

      <div className="h-screen bg-gray-200">
        <div className="flex flex-col items-center justify-center px-2 py-10">
          <div className="flex flex-col pb-6 px-8 py-4 w-full bg-white border border-gray-300 rounded-md md:w-2/5">
            <h2 className="text-[1.65rem] font-bold">Reset your password.</h2>

            <form className="" ref={formRef} onSubmit={(e) => handleForgotPassword(e)}>
              <Input
                hasLabel
                type="password"
                name="New password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <Input
                hasLabel
                type="password"
                required
                name="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                onKeyDown={(e) => e.key === "Enter" && formRef.current.handleForgotPassword}
              />

              <Button
                type="submit"
                text="Change password"
                disabled={
                  !password || !confirmPassword || password !== confirmPassword || submitting
                }
              />
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
