import Navbar from "../components/Navbar";
import SmallCard from "../components/SmallCard";
import Title from "../components/Title";

export default function Dashboard() {
  const data = [1, 3, 3];

  return (
    <>
      <Navbar />
      <Title title="Dashboard" />

      <div className="my-screen flex flex-col">
        <div>
          <h2 className="font-bold text-2xl">Dashboard</h2>
        </div>

        <div className="flex">
          {data.map((d) => (
            <SmallCard />
          ))}
        </div>
      </div>
    </>
  );
}
