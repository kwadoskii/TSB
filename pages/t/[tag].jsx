import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import TagCard from "../../components/TagCard";
import Title from "../../components/Title";

export default function TagPage() {
  const { query } = useRouter();

  return (
    <>
      <Title title={query.tag} />
      <Navbar />

      <div className="bg-gray-100">
        <TagCard
          barColor="gold"
          name={query.tag}
          subtitle="lorem ispsum dolum test one to three"
        />
        <div className="flex items-center justify-center my-min-height">
          <p className="text-9xl font-black">{query.tag}</p>
        </div>
      </div>
    </>
  );
}
