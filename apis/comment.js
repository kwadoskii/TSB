import { server } from "../config/server";
import api from "../apis/base";

const apiEndpoint = server + "/posts/comments";

const likeComment = (commentId, token) =>
  api.post(`${apiEndpoint}/like/${commentId}`, {}, { headers: { "x-auth-token": "JWT " + token } });

const unlikeComment = (commentId, token) =>
  api.post(
    `${apiEndpoint}/unlike/${commentId}`,
    {},
    { headers: { "x-auth-token": "JWT " + token } }
  );

const addComment = (postId, comment, token) =>
  api.post(`${apiEndpoint}`, { comment, postId }, { headers: { "x-auth-token": "JWT " + token } });

export { likeComment, unlikeComment, addComment };
