import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import authService from "../../../apis/authService";
import { getPostsByTagName } from "../../../apis/post";
import { getTagByName } from "../../../apis/tag";
import {
  reactions,
  getUserFollowingTags,
  followTag,
  unfollowTag,
  savedPosts,
} from "../../../apis/user";
import Advert from "../../../components/Advert";
import Feed from "../../../components/Feed";
import Navbar from "../../../components/Navbar";
import TagCard from "../../../components/TagCard";
import Title from "../../../components/Title";

export default function TagPage({
  followingTags,
  top = false,
  posts,
  tag,
  token,
  userSavedPosts,
  userLikes,
}) {
  // const [tag, setTag] = useState();
  const [loading, setLoading] = useState(true);
  // const [token, setToken] = useState(true);
  const [_posts, setPosts] = useState(posts);
  const { query, replace } = useRouter();
  const tagName = query.tag;

  // useEffect(async () => {
  //   setLoading(true);

  //   if (!top) {
  //     const {
  //       data: { data: _tag },
  //       status,
  //     } = await getTagByName(tagName);

  //     const {
  //       data: { data: _posts },
  //     } = await getPostsByTagName(tagName);

  //     setTag(_tag);
  //     setPosts(_posts);

  //     if (status !== 200) return replace("/404");
  //   }

  //   setToken(authService.getJwt());
  //   setLoading(false);
  // }, [tagName]);

  // return loading ? null : (
  return (
    <>
      <Title title={tag?.name} />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-1 py-1 lg:py-4 lg:px-6 mx-auto">
          <div>
            <TagCard
              barColor={tag?.backgroundColor}
              name={tag?.name}
              subtitle={tag?.description}
              image={tag?.image}
              large
              followed={followingTags?.some((ft) => ft._id === tag?._id)}
              onFollow={() => followTag(tag._id, token)}
              onUnfollow={() => unfollowTag(tag._id, token)}
              token={token}
            />
          </div>

          <div className="grid grid-cols-9 gap-5 my-2 md:my-8">
            <div className="col-span-2 relative">{/* <Advert /> */}</div>

            <div className="col-span-full md:col-span-5">
              <Feed
                tag={tag?.name}
                data={_posts}
                userPostLikesIds={userLikes?.reactions?.map((r) => r._id)}
                userSavedPostsIds={userSavedPosts?.map((sp) => sp._id)}
              />
            </div>

            <div className="col-span-2"></div>
          </div>
        </div>
      </div>
    </>
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
      token,
      userSavedPosts,
      userLikes,
    },
  };
}
