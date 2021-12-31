import api from "./base";
import jwtDecode from "jwt-decode";
import { server } from "../config/server";

const apiEndpoint = server + "/login";
const tokenKey = "token";

// api.setJwt(getJwt());

const login = async (username, password) => {
  return api.post(apiEndpoint, { username, password });

  // localStorage.setItem(tokenKey, jwt);
};

const loginWithJwt = (jwt) => {
  localStorage.setItem(tokenKey, jwt);
};

const logout = () => {
  localStorage.removeItem(tokenKey);
};

const getCurrentUser = () => {
  const jwt = localStorage.getItem(tokenKey);

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
  return localStorage.getItem(tokenKey);
}

export default {
  getCurrentUser,
  getJwt,
  login,
  loginWithJwt,
  logout,
};
