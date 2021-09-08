import Link from "next/link";

import Card from "../../components/Card";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import SettingsSidebar from "../../components/SettingsSidebar";

export default function Settings() {
  return (
    <>
      <Title title="Settings" />
      <Navbar />

      <main className="my-min-height bg-gray-100">
        <div className="flex gap-4 flex-wrap px-1 py-1 lg:py-4 lg:px-6 mx-auto max-w-5xl relative ">
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
              <Card header="User" className="shadow-md">
                <div>
                  <form action="">
                    <Input hasLabel placeholder="John Doe" name="Name" />
                    <Input
                      hasLabel
                      placeholder="johndoe@example.com"
                      type="email"
                      name="Email"
                    />
                    <Input
                      type="checkbox"
                      name="showEmailOnProfile"
                      checkboxText="Display email on profile"
                    />
                    <Input hasLabel placeholder="kwadoskii" name="Username" />
                    <Input type="file" name="Profile image" hasLabel />
                  </form>
                </div>
              </Card>

              <Card header="Basic">
                <Input hasLabel placeholder="https://example.com" name="Website URL" />
                <Input
                  type="checkbox"
                  name="showEmailOnProfileEmail"
                  checkboxText="Display website on profile"
                />
                <Input hasLabel placeholder="Lagos, Nigeria" name="Location" />
                <Input hasLabel placeholder="A short info about you" name="Bio" />
              </Card>

              <Card header="Work">
                <Input hasLabel placeholder="Engineer" name="Employer title" />
                <Input hasLabel placeholder="Company Inc" name="Employer name" />
                <Input hasLabel placeholder="University of Nigeria" name="Education" />
                <Input
                  hasLabel
                  placeholder="https://thestoryboard.com"
                  name="Employer URL"
                />
              </Card>

              <Card>
                <button className="border-none p-3 bg-blue-700 text-white font-medium text-sm mr-3 cursor-pointer rounded-md hover:bg-blue-800 transition duration-100 ease-out w-full">
                  Save Profile Information
                </button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
