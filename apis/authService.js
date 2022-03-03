import api from "./base";
import jwtDecode from "jwt-decode";
import { server } from "../config/server";
import Cookies from "js-cookie";

const apiEndpoint = server + "/auth";
const tokenKey = "token";

// api.setJwt(getJwt());

const login = async (username, password) =>
  api.post(apiEndpoint + "/login", { username, password });

export const changePassword = async (currentPassword, newPassword, token) =>
  api.post(
    apiEndpoint + "/changepassword",
    { currentPassword, newPassword },
    { headers: { "x-auth-token": "JWT " + token } }
  );

const loginWithJwt = (jwt) => {
  localStorage.setItem(tokenKey, jwt);
  Cookies.set(tokenKey, jwt, { expires: 30 });
};

const logout = () => {
  localStorage.removeItem(tokenKey);
  Cookies.remove(tokenKey);
};

const getCurrentUser = (token = "") => {
  let jwt = "";

  if (!token) {
    // jwt = localStorage.getItem(tokenKey);
    jwt = Cookies.get(tokenKey);
  } else {
    jwt = token;
  }

  if (!jwt) return null;

  try {
    const { exp, ...decoded } = jwtDecode(jwt);

    if (Date.now() >= exp * 1000) return null;

    return decoded;
  } catch (ex) {
    return null;
  }
};

const getJwt = () => localStorage.getItem(tokenKey) || Cookies.get(tokenKey);

export default {
  getCurrentUser,
  getJwt,
  login,
  loginWithJwt,
  logout,
};
