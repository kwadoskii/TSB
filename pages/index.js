import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Advert from "../components/Advert";
import { getUserFollowingTags, reactions, savedPosts } from "../apis/user";
import { getAllPosts } from "../apis/post";

export default function HomePage({ followingTags, posts, userLikes, userSavedPosts }) {
  return (
    <>
      <Title title="Home" />
      <Navbar />

      <main>
        <div className="bg-gray-100 my-min-height">
          <div className="max-w-7xl relative px-2 py-1 lg:py-4 lg:px-6 mx-auto">
            <div className="grid grid-cols-9 gap-5 my-0">
              <div className="col-span-2 relative">
                <div className="min-h-screen rounded-md sticky top-8 hidden md:flex flex-col gap-3">
                  {/* <Advert />
                  <Advert />
                  <Advert /> */}
                </div>
              </div>

              <div className="col-span-full md:col-span-5">
                <Feed
                  data={posts}
                  userPostLikesIds={userLikes}
                  userSavedPostsIds={userSavedPosts}
                />
              </div>

              <div className="col-span-2 hidden md:flex"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;
  let followingTags;
  let posts;
  let userLikes, userSavedPosts;

  const {
    data: { data: _posts },
  } = await getAllPosts();
  posts = _posts;

  if (!token) {
    followingTags = [];
  } else {
    const {
      data: { data: _tag },
    } = await getUserFollowingTags(req.cookies.token);
    const {
      data: { data: _userLikes },
    } = await reactions(token);

    const {
      data: { data: _userSavedPosts },
    } = await savedPosts(token);

    userLikes = _userLikes.reactions.map((r) => r._id);
    userSavedPosts = _userSavedPosts.map((u) => u._id);
    followingTags = _tag.tags;
  }

  return {
    props: {
      followingTags,
      userLikes,
      userSavedPosts,
      posts: _posts || [],
    },
  };
}
