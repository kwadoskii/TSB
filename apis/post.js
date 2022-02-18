import { server } from "../config/server";
import api from "../apis/base";

const apiEndpoint = server + "/posts";

const getPostComments = (postId) => api.get(`${apiEndpoint}/${postId}/comments`);

const getPostLikes = (postId) => api.get(`${apiEndpoint}/${postId}/likes`);

const getPostSaves = (postId) => api.get(`${apiEndpoint}/${postId}/saves`);

const likePost = (postId, token) =>
  api.post(`${apiEndpoint}/like/${postId}`, {}, { headers: { "x-auth-token": "JWT " + token } });

const unlikePost = (postId, token) =>
  api.post(`${apiEndpoint}/unlike/${postId}`, {}, { headers: { "x-auth-token": "JWT " + token } });

const getAllPosts = () => api.get(`${apiEndpoint}/`);

const getPostsByTagName = (tagName) => api.get(`${apiEndpoint}/getpostsbytagname/${tagName}`);

const getPostBySlug = (slug) => api.get(`${apiEndpoint}/slug/${slug}`);

const getMoreFromAuthor = (authorId) => api.get(`${apiEndpoint}/morefromauthor/${authorId}`);

export {
  getPostComments,
  getPostLikes,
  likePost,
  unlikePost,
  getAllPosts,
  getPostsByTagName,
  getPostBySlug,
  getMoreFromAuthor,
  getPostSaves,
};
