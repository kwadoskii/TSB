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

export { register, profile, getUserFollowingTags, followTag, unfollowTag };
