import Link from "next/link";
import Card from "../../components/Card";

import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SettingsSidebar from "../../components/SettingsSidebar";
import { me } from "../../apis/user";
import authService, { changePassword } from "../../apis/authService";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AccountPage({ userDetails, token }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [newPWMismatch, setNewPWMismatch] = useState();

  const router = useRouter();

  const handlePasswordChange = async (e) => {
    setLoading(true);
    setNewPWMismatch(false);
    e.preventDefault();

    if (newPassword && newPassword === confirmNewPassword) {
      const { data, status } = await changePassword(currentPassword, newPassword, token);

      setLoading(false);
      if (status !== 200) return toast.error(data.message);

      router.push("/enter");
      authService.logout();
      return toast.success(data.message);
    } else {
      setNewPWMismatch(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Title title="Settings" />
      <Navbar />

      <main className="my-min-height bg-gray-100">
        <div className="relative flex flex-col gap-4 mx-auto px-1 py-1 max-w-5xl lg:px-6 lg:py-4">
          <div>
            <h2 className="mx-0 my-3 text-2xl lg:text-3xl">
              Settings for{" "}
              <Link passHref href="/kwadoskii">
                <a className="text-blue-700 font-semibold">{"@" + userDetails?.username}</a>
              </Link>
            </h2>
          </div>

          <div className="grid gap-4 grid-cols-7">
            <div className="col-span-full md:col-span-2">
              <SettingsSidebar />
            </div>

            <div className="col-span-full md:col-span-5">
              <Card header="Change Password">
                <div>
                  <form>
                    <Input
                      hasLabel
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      name="Current password"
                      disabled={loading}
                      className={loading && "bg-gray-300/30"}
                    />
                    <Input
                      hasLabel
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      name="New password"
                      disabled={loading}
                      className={loading && "bg-gray-300/30"}
                    />
                    <Input
                      hasLabel
                      disabled={loading}
                      type="password"
                      name="Confirm new password"
                      error={newPWMismatch && "Confirm new password"}
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      className={loading && "bg-gray-300/30"}
                    />

                    <button
                      className={`my-button ${
                        !currentPassword && newPWMismatch && "!bg-blue-800 !cursor-not-allowed"
                      }`}
                      type="submit"
                      onClick={handlePasswordChange}
                    >
                      Change password
                    </button>
                  </form>
                </div>
              </Card>

              <Card header="Export content">
                <p>
                  You can request an export of all your content. Currently we only support the
                  export of your posts and comments. They will be emailed to your inbox.
                </p>
                <Input
                  type="checkbox"
                  name="exportContent"
                  checkboxText="Request an export of your content"
                />
                <button className="my-button">Submit Data Request</button>
              </Card>

              <Card header="Danger Zone" headerColor="#dc1818">
                <h3 className="-mt-2 mb-3 text-red-600 text-lg">Delete account</h3>
                <p>Deleting your account will:</p>
                <p>
                  Delete your profile, along with your authentication associations. <br />
                  Delete any and all content you have, such as articles, comments, your reading list
                  or chat messages. <br />
                  Allow your username to become available to anyone.
                </p>

                <button
                  className="mr-3 mt-5 p-3 text-white text-sm font-medium bg-red-600 hover:bg-red-700 border-none rounded-md cursor-not-allowed transition duration-100 ease-out"
                  disabled
                >
                  Delete Account
                </button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;

  const {
    data: { data: userDetails },
  } = await me(token);

  return {
    props: { userDetails, token },
  };
}
