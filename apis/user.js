import { server } from "../config/server";
import api from "../apis/base";

const registerEndpoint = server + "/register";
const userEndpoint = server + "/users";

const register = (user) =>
  api.post(registerEndpoint, {
    username: user.username,
    password: user.password,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    gender: user.gender,
  });

const profile = (username, token) =>
  api.get(userEndpoint + "/" + username, { headers: { "x-auth-token": "JWT " + token } });

const getUserFollowingTags = (token) =>
  api.get(userEndpoint + "/tags", { headers: { "x-auth-token": "JWT " + token } });

const followTag = (tagId, token) =>
  api.post(
    `${userEndpoint}/tags/follow/${tagId}`,
    {},
    { headers: { "x-auth-token": "JWT " + token } }
  );

const unfollowTag = (tagId, token) =>
  api.post(
    `${userEndpoint}/tags/unfollow/${tagId}`,
    {},
    { headers: { "x-auth-token": "JWT " + token } }
  );

const savePost = (postId, token) =>
  api.post(
    `${userEndpoint}/posts/save/${postId}`,
    {},
    { headers: { "x-auth-token": "JWT " + token } }
  );

const unsavePost = (postId, token) =>
  api.post(
    `${userEndpoint}/posts/unsave/${postId}`,
    {},
    { headers: { "x-auth-token": "JWT " + token } }
  );

const reactions = (token) =>
  api.get(`${userEndpoint}/reactions`, { headers: { "x-auth-token": "JWT " + token } });

const savedPosts = (token) =>
  api.get(`${userEndpoint}/savedposts`, { headers: { "x-auth-token": "JWT " + token } });

const followUser = (userId, token) =>
  api.post(`${userEndpoint}/follow/${userId}`, {}, { headers: { "x-auth-token": "JWT " + token } });

const unfollowUser = (userId, token) =>
  api.post(
    `${userEndpoint}/unfollow/${userId}`,
    {},
    { headers: { "x-auth-token": "JWT " + token } }
  );

const followingUsers = (token) =>
  api.get(`${userEndpoint}/following`, { headers: { "x-auth-token": "JWT " + token } });

const followers = (token) =>
  api.get(`${userEndpoint}/followers`, { headers: { "x-auth-token": "JWT " + token } });

const totalUsers = () => api.get(`${userEndpoint}/total`);

const userPosts = (token) =>
  api.get(`${userEndpoint}/posts`, { headers: { "x-auth-token": "JWT " + token } });

const userComments = (token) =>
  api.get(`${userEndpoint}/comments`, { headers: { "x-auth-token": "JWT " + token } });

export {
  register,
  profile,
  getUserFollowingTags,
  followTag,
  unfollowTag,
  reactions,
  savedPosts,
  savePost,
  unsavePost,
  followUser,
  unfollowUser,
  followingUsers,
  totalUsers,
  followers,
  userPosts,
  userComments,
};
