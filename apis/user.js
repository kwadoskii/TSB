import { server } from "../config/server";
import api from "../apis/base";
import auth from "../apis/authService";

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

const profile = (username, token) => {
  return api.get(server + "/users/" + username, {
    headers: { "x-auth-token": "JWT " + token },
  });
};

export { register, profile };
