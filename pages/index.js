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
        <div className="my-min-height bg-gray-100">
          <div className="relative mx-auto px-2 py-1 max-w-7xl lg:px-6 lg:py-4">
            <div className="grid gap-5 grid-cols-9 my-0">
              <div className="relative col-span-2">
                <div className="sticky top-8 hidden flex-col gap-3 min-h-screen rounded-md md:flex">
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

              <div className="hidden col-span-2 md:flex"></div>
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
  let userLikes = [],
    userSavedPosts = [];

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

    userLikes = _userLikes?.reactions?.map((r) => r.postId._id);
    userSavedPosts = _userSavedPosts?.map((usp) => usp.postId._id);
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
