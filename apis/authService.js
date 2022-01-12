import api from "./base";
import jwtDecode from "jwt-decode";
import { server } from "../config/server";
import Cookies from "js-cookie";

const apiEndpoint = server + "/login";
const tokenKey = "token";

// api.setJwt(getJwt());

const login = async (username, password) => {
  return api.post(apiEndpoint, { username, password });

  // localStorage.setItem(tokenKey, jwt);
};

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
    jwt = localStorage.getItem(tokenKey);
  } else {
    jwt = Cookies.get(tokenKey);
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

function getJwt() {
  return localStorage.getItem(tokenKey) || Cookies.get(tokenKey);
}

export default {
  getCurrentUser,
  getJwt,
  login,
  loginWithJwt,
  logout,
};
