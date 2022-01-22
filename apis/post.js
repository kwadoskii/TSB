import { server } from "../config/server";
import api from "../apis/base";

const apiEndpoint = server + "/posts";

const getCommentById = (commentId) => api.get(apiEndpoint + "/comment/" + commentId);

const getPostComments = (postId) => api.get(`${apiEndpoint}/${postId}/comments`);

const getPostLikes = (postId) => api.get(`${apiEndpoint}/${postId}/likes`);

const likePost = (postId, token) =>
  api.post(`${apiEndpoint}/like/${postId}`, {}, { headers: { "x-auth-token": "JWT " + token } });

const unlikePost = (postId, token) =>
  api.post(`${apiEndpoint}/unlike/${postId}`, {}, { headers: { "x-auth-token": "JWT " + token } });

export { getCommentById, getPostComments, getPostLikes, likePost, unlikePost };
