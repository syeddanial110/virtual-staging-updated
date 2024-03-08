import Cookies from "js-cookie";

export const setToken = (token) => {
  return Cookies.set("token", token, { expires: 360 });
};

export const getToken = () => {
  return Cookies.get("token");
};
