import Link from "next/link";
import Card from "../../components/Card";

import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SettingsSidebar from "../../components/SettingsSidebar";

export default function AccountPage() {
  return (
    <>
      <Title title="Settings" />
      <Navbar />

      <main className="my-min-height bg-gray-100">
        <div className="flex gap-4 flex-col px-1 py-1 lg:py-4 lg:px-6 mx-auto max-w-5xl relative ">
          <div>
            <h2 className="my-3 mx-0 text-2xl lg:text-3xl">
              Settings for{" "}
              <Link passHref href="/kwadoskii">
                <a className="text-blue-700 font-semibold">@Kwadoskii</a>
              </Link>
            </h2>
          </div>

          <div className="grid grid-cols-7 gap-4">
            <div className="col-span-full md:col-span-2">
              <SettingsSidebar />
            </div>

            <div className="col-span-full md:col-span-5">
              <Card header="Change Password">
                <div>
                  <form action="">
                    <Input hasLabel type="password" name="Current password" />
                    <Input hasLabel type="password" name="New password" />
                    <Input hasLabel type="password" name="Confirm new password" />

                    <button className="my-button">Change password</button>
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
                <h3 className="text-lg -mt-2 text-red-600 mb-3">Delete account</h3>
                <p>Deleting your account will:</p>
                <p>
                  Delete your profile, along with your authentication associations. <br />
                  Delete any and all content you have, such as articles, comments, your reading list
                  or chat messages. <br />
                  Allow your username to become available to anyone.
                </p>

                <button className="border-none p-3 text-white font-medium text-sm mr-3 cursor-pointer rounded-md transition duration-100 ease-out bg-red-600 hover:bg-red-700 mt-5">
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
