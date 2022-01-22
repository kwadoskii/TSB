import { getUserFollowingTags } from "../../apis/user";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import TagCard from "../../components/TagCard";
import Title from "../../components/Title";

export default function following_tags({ tags }) {
  return (
    <>
      <Title title={"Dashboard"} />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-1 gap-2 py-1 lg:py-4 lg:px-6 mx-auto">
          <div className="py-3 pb-5">
            <h2 className="font-bold text-2xl">Dashboard » Following tags</h2>
          </div>

          <div className="grid md:grid-cols-5 my-4 gap-3">
            <Sidebar hasLinks />

            <div className="col-span-full md:col-span-4">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                {tags?.map((tag) => (
                  <TagCard
                    key={tag._id}
                    name={tag.name}
                    barColor={tag.backgroundColor}
                    subtitle={tag.description}
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

export async function getServerSideProps({ req }) {
  const {
    data: { data: tags },
  } = await getUserFollowingTags(req.cookies.token);

  return {
    props: {
      tags: tags.tags,
    },
  };
}
