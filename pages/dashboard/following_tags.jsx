import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import TagCard from "../../components/TagCard";
import Title from "../../components/Title";

export default function following_tags() {
  const tags = [
    {
      id: "1",
      name: "npm",
      excerpt:
        "lorem ipsum one two three dolum manga etc, i will be going to the venue pretty soon, just that i may not need your help. Anytime i check the mail, it always rain.",
      barColor: "black",
    },
    {
      id: "2",
      name: "bash",
      // excerpt: "lorem ipsum one two three dolum manga etc",
      barColor: "tomato",
    },
    {
      id: "3",
      name: "react",
      excerpt: "lorem ipsum one two three dolum manga etc",
      barColor: "dodgerblue",
    },
    {
      id: "4",
      name: "football",
      excerpt: "lorem ipsum one two three dolum manga etc",
      barColor: "gold",
    },
    {
      id: "5",
      name: "politics",
      excerpt: "lorem ipsum one two three dolum manga etc",
      barColor: "#ba2738",
    },
    {
      id: "6",
      name: "trueStory",
      excerpt: "lorem ipsum one two three dolum manga etc",
      barColor: "#9e1f89",
    },
    {
      id: "7",
      name: "programming",
      excerpt: "lorem ipsum one two three dolum manga etc",
      barColor: "#12580b",
    },
    {
      id: "8",
      name: "EPL",
      excerpt: "lorem ipsum one two three dolum manga etc",
      barColor: "#e48a16",
    },
    {
      id: "9",
      name: "laliga",
      excerpt: "lorem ipsum one two three dolum manga etc",
      barColor: "#10164e",
    },
  ];

  return (
    <>
      <Title title={"Dashboard"} />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-1 gap-2 py-1 lg:py-4 lg:px-6 mx-auto">
          <div className="py-3 pb-5">
            <h2 className="font-bold text-2xl">Dashboard » Following users</h2>
          </div>

          <div className="grid grid-cols-5 my-4 gap-3">
            <Sidebar />

            <div className="col-span-full md:col-span-4">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                {tags.map((tag) => (
                  <TagCard
                    key={tag.id}
                    name={tag.name}
                    barColor={tag.barColor}
                    subtitle={tag.excerpt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
