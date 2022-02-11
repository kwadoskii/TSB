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

export { likeComment, unlikeComment };
