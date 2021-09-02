import { useRouter } from "next/router";

// Redirects to the settings page from /settings/profile
export default function Profile() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    router.push("/settings", "/settings/profile");
  }

  return null;
}
