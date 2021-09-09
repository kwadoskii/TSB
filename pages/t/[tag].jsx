import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";

export default function TagPage() {
  const { query } = useRouter();

  return (
    <>
      <Title title={query.tag} />
      <Navbar />
      <div className="flex items-center justify-center my-min-height">
        <p className="text-9xl font-black">{query.tag}</p>
      </div>
    </>
  );
}
