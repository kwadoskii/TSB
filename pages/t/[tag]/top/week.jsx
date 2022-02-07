import TagPage from "..";
import { getPostsByTagName } from "../../../../apis/post";
import { getTagByName } from "../../../../apis/tag";
import { getUserFollowingTags, reactions, savedPosts } from "../../../../apis/user";

export default function week({ followingTags, tag, posts, userLikes, userSavedPosts }) {
  return (
    <TagPage
      followingTags={followingTags}
      tag={tag}
      posts={posts}
      userLikes={userLikes}
      userSavedPosts={userSavedPosts}
    />
  );
}

export async function getServerSideProps({ req, params }) {
  const { token } = req.cookies;
  let followingTags, posts, tag, userLikes, userSavedPosts;

  const {
    data: { data: _tag },
    status,
  } = await getTagByName(params.tag);

  if (status === 404)
    return {
      notFound: true,
    };

  const {
    data: { data: _posts },
  } = await getPostsByTagName(params.tag);

  tag = _tag;
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

    userSavedPosts = _userSavedPosts;
    userLikes = _userLikes;

    followingTags = _tag.tags;
  }

  return {
    props: {
      followingTags,
      posts: _posts || [],
      tag,
      userLikes,
      userSavedPosts,
    },
  };
}
