import { pathLocations } from "./pathLocations";

const { getToken } = require("@/auth/Auth");

export const handleCheckToken = () => {
  let token = getToken();
  if (!token) {
    window.location.href = pathLocations.login;
  }
};
