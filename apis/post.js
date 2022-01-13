import { server } from "../config/server";
import api from "../apis/base";

const apiEndpoint = server + "/posts";

const getCommentById = (commentId) => {
  return api.get(apiEndpoint + "/comment/" + commentId);
};

const getPostComments = (postId) => {
  return api.get(`${apiEndpoint}/${postId}/comments`);
};

const getPostLikes = (postId) => {
  return api.get(`${apiEndpoint}/${postId}/likes`);
};

export { getCommentById, getPostComments, getPostLikes };
