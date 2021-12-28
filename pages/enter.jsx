import Footer from "../components/Footer";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function EnterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const router = useRouter();
  const { state } = router.query;

  const handleRegister = (e) => {
    e.preventDefault();

    if (confirmPassword !== password) toast.info("Passwords does not match.");
    console.log({ username, password, confirmPassword, firstname, lastname, email });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({ loginUsername, loginPassword });
  };

  //page for new users
  if (state === "new") {
    return (
      <>
        <Title title="Welcome" />
        <Navbar />

        <div className="bg-gray-200">
          <div className="flex flex-col justify-center items-center py-10 px-2">
            <div className="flex flex-col bg-white py-4 pb-6 border rounded-md border-gray-300 w-full md:w-5/12">
              <Info />

              <div className="px-2 md:px-10 mt-5">
                <form action="">
                  <Input
                    hasLabel
                    name="Username"
                    placeholder="johndoe"
                    noVerticalMargin
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    hasLabel
                    type="password"
                    name="Password"
                    placeholder="●●●●●●●●●"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    hasLabel
                    type="password"
                    name="Confirm Password"
                    placeholder="●●●●●●●●●"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Input
                    hasLabel
                    name="Firstname"
                    placeholder="John"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <Input
                    hasLabel
                    name="Lastname"
                    placeholder="Doe"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <Input
                    hasLabel
                    type="email"
                    name="Email"
                    placeholder="johndoe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button
                    className="bg-blue-700 px-4 py-2.5 rounded-md items-center font-semibold text-white hover:bg-blue-800 transition-all duration-200 ease-out w-full outline-none"
                    type="submit"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Title title="Log in" />
      <Navbar />

      <div className="h-writeContent bg-gray-200">
        <div className="flex flex-col justify-center items-center py-10 px-2">
          <div className="flex flex-col bg-white py-4 pb-6 border rounded-md border-gray-300 w-full md:w-5/12">
            <Info />

            <div className="px-2 md:px-10 mt-5">
              <form action="">
                <Input
                  hasLabel
                  name="Username or Email"
                  noVerticalMargin
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
                <Input
                  hasLabel
                  type="password"
                  name="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />

                <button
                  className="bg-blue-700 px-4 py-2.5 rounded-md items-center font-semibold text-white hover:bg-blue-800 transition-all duration-200 ease-out w-full outline-none"
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </button>

                <div className="flex justify-center mt-5">
                  <Link passHref href={"/forgot_password"}>
                    <a className="text-sm text-blue-600 text-center hover:underline">
                      I forgot my password
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

const Info = () => (
  <div className="px-2 md:px-10">
    <h2 className="font-bold text-[1.65rem] text-center">Welcome to TSB</h2>
    <p className="text-gray-800 text-center">
      <Link passHref href="/">
        <a className="text-blue-600 hover:underline">TSB</a>
      </Link>{" "}
      Community has a total of 769,855 amazing members
    </p>
  </div>
);
