import Link from "next/link";

import Card from "../../components/Card";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import SettingsSidebar from "../../components/SettingsSidebar";
import { me, updateProfile } from "../../apis/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authService from "../../apis/authService";
import { useRouter } from "next/router";

export default function SettingsPage({ userDetails, token }) {
  const [_userDetails, setUserDetails] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [displayEmail, setDisplayEmail] = useState(false);
  const [website, setWebsite] = useState("");
  const [displayWebsite, setDisplayWebsite] = useState(false);
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [education, setEducation] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const handleSave = async () => {
    let userDetailsToSave = {
      firstname,
      middlename: middlename || null,
      lastname,
      email,
      username,
      displayEmail,
      website,
      displayWebsite,
      location,
      bio,
      education,
      occupation: {
        position,
        company,
        website: companyWebsite,
      },
    };

    const {
      data: { status, message },
    } = await updateProfile(userDetailsToSave, token);

    if (message) return toast.info(message.pop());

    if (status !== "success") return toast.error("Could not save details.");

    return toast.success("Changes saved.");
  };

  useEffect(() => {
    setUserDetails(userDetails);
    setFirstname(userDetails?.firstname);
    setMiddlename(userDetails?.middlename || "");
    setLastname(userDetails?.lastname);
    setEmail(userDetails?.email);
    setUsername(userDetails?.username);
    setDisplayEmail(userDetails?.displayEmail);
    setDisplayWebsite(userDetails?.displayWebsite);
    setWebsite(userDetails?.website || "");
    setLocation(userDetails?.location || "");
    setBio(userDetails?.bio || "");
    setPosition(userDetails?.occupation?.position || "");
    setCompany(userDetails?.occupation?.company || "");
    setCompanyWebsite(userDetails?.occupation?.website || "");
    setEducation(userDetails?.education || "");
  }, []);

  useEffect(() => {
    if (!authService.getCurrentUser()) {
      return router.push("/enter");
    }
    setLoading(false);
  }, [loading]);

  return (
    <>
      <Title title="Settings" />
      <Navbar />

      <main className="my-min-height bg-gray-100">
        <div className="relative flex flex-col gap-4 mx-auto px-1 py-1 max-w-5xl lg:px-6 lg:py-4">
          <div>
            <h2 className="mx-0 my-3 text-2xl lg:text-3xl">
              Settings for{" "}
              <Link passHref href={`/${userDetails?.username}`}>
                <a className="text-blue-700 font-semibold">@{_userDetails?.username}</a>
              </Link>
            </h2>
          </div>

          <div className="grid gap-4 grid-cols-7">
            <div className="col-span-full md:col-span-2">
              <SettingsSidebar />
            </div>

            <div className="col-span-full md:col-span-5">
              <Card header="User" className="shadow-md">
                <div>
                  <form action="">
                    <Input
                      hasLabel
                      placeholder="John"
                      name="Firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                    <Input
                      hasLabel
                      placeholder="Smith"
                      name="Middlename"
                      value={middlename}
                      onChange={(e) => setMiddlename(e.target.value)}
                    />
                    <Input
                      hasLabel
                      placeholder="Doe"
                      name="Lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                    <Input
                      hasLabel
                      placeholder="johndoe@example.com"
                      type="email"
                      name="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      type="checkbox"
                      name="showEmailOnProfile"
                      checkboxText="Display email on profile"
                      checked={displayEmail}
                      onChange={() => setDisplayEmail(!displayEmail)}
                    />
                    <Input
                      hasLabel
                      placeholder="kwadoskii"
                      name="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input type="file" name="Profile image" hasLabel />
                  </form>
                </div>
              </Card>

              <Card header="Basic">
                <Input
                  hasLabel
                  placeholder="https://example.com"
                  name="Website URL"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <Input
                  type="checkbox"
                  name="showEmailOnProfileEmail"
                  checkboxText="Display website on profile"
                  onChange={() => setDisplayWebsite(!displayWebsite)}
                  checked={displayWebsite}
                />
                <Input
                  hasLabel
                  placeholder="Lagos, Nigeria"
                  name="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Input
                  hasLabel
                  placeholder="A short info about you"
                  name="Bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </Card>

              <Card header="Work">
                <Input
                  hasLabel
                  placeholder="Engineer"
                  name="Position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
                <Input
                  hasLabel
                  placeholder="Company Inc"
                  name="Employer name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <Input
                  hasLabel
                  placeholder="University of Nigeria"
                  name="Education"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
                <Input
                  hasLabel
                  placeholder="https://thestoryboard.com"
                  name="Employer URL"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                />
              </Card>

              <Card>
                <button
                  className="mr-3 p-3 w-full text-white text-sm font-medium bg-blue-700 hover:bg-blue-800 border-none rounded-md cursor-pointer transition duration-100 ease-out"
                  onClick={() => handleSave()}
                >
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

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;

  const {
    data: { data: userDetails },
  } = await me(token);

  return {
    props: { userDetails: userDetails || null, token: token || null },
  };
}
