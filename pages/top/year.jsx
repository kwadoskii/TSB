import HomePage from "..";
import { getUserFollowingTags } from "../../apis/user";

export default function YearHomePage({ followingTags }) {
  return <HomePage followingTags={followingTags} />;
}

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;
  let followingTags;

  if (!token) {
    followingTags = [];
  } else {
    const {
      data: { data: _tag },
    } = await getUserFollowingTags(req.cookies.token);
    followingTags = _tag.tags;
  }

  return {
    props: {
      followingTags,
    },
  };
}
