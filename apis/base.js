import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../config/server";

const api = axios.create({
  baseURL: server,
});

api.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected server error occurred.", { autoClose: false });
  }

  return Promise.reject(error.response);
});

// const setJwt = (jwt) => {
//   axios.defaults.headers.common["x-auth-token"] = jwt;
// };

export default {
  delete: api.delete,
  get: api.get,
  patch: api.patch,
  post: api.post,
  // setJwt,
};
