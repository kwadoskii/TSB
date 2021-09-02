import { useRouter } from "next/router";

export default function TagPage() {
  const { query } = useRouter();

  return (
    <div>
      <p>i am {query.tag}</p>
    </div>
  );
}
