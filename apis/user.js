import { server } from "../config/server";
import api from "../apis/base";

const apiEndpoint = server + "/register";

const register = (user) => {
  return api.post(apiEndpoint, {
    username: user.username,
    password: user.password,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  });
};

export { register };
