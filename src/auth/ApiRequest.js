import axios from "axios";
import { getToken } from "./Auth";

// export const BASEURL = "https://virtual-staging-backend-3w39.onrender.com/api";
// export const BASEURL = "http://localhost:5000/api";
export const BASEURL = "https://admin.hartvilleanquitemall.com/api";
// export const ImageBASEURL = "https://virtual-staging-backend-3w39.onrender.com";
// export const ImageBASEURL = "http://localhost:5000";
// export const ImageBASEURL = "https://res.cloudinary.com";
export const ImageBASEURL = "https://admin.hartvilleanquitemall.com/public/";

export const apiBaseUrl = `${BASEURL}`;

var token = getToken();

export function getCommonHeaders(h) {
  var headers = {
    "Content-Type": "application/json",
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (h) headers = { ...h, ...headers };
  return headers;
}
export function getCommonHeadersWithoutToken(h) {
  var headers = {
    "Content-Type": "application/json",
  };
  if (h) headers = { ...h, ...headers };
  return headers;
}

export function getCommonHeadersFormData(h, noDefaultHeaders = false) {
  var myHeaders = new Headers();
  myHeaders.append("accept", "*/*");
  myHeaders.append("Authorization", "Bearer " + token);
  var headers = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow",
  };
  if (!noDefaultHeaders)
    Object.assign(headers, { "Content-Type": "multipart/form-data" });
  if (token) headers.Authorization = `Bearer ${token}`;
  if (h) headers = { ...h, ...headers };
  return headers;
}

export function apiPost(endpoint, body, onSuccess, onFailure, headers) {
  axios
    .post(apiBaseUrl + endpoint, body, {
      headers: getCommonHeaders(headers),
    })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      return onFailure(error);
    });
}

export function apiGet(endpoint, onSuccess, onFailure, headers) {
  axios
    .get(apiBaseUrl + endpoint, {
      headers: getCommonHeaders(headers),
    })
    .then((response) => {
      // if (response?.data?.message === "Authentication Error") {
      //   window.location.href = "/login";
      // }
      if (onSuccess) onSuccess(response.data);
    })
    .catch((error) => {
      // if (error?.response?.data?.message === "Authentication Error") {
      //   window.location.href = "/";
      // }
      if (onFailure) onFailure(error);
    });
}
export function apiGetWithoutToken(endpoint, onSuccess, onFailure, headers) {
  axios
    .get(apiBaseUrl + endpoint, {
      headers: getCommonHeadersWithoutToken(headers),
    })
    .then((response) => {
      // if (response?.data?.message === "Authentication Error") {
      //   window.location.href = "/login";
      // }
      if (onSuccess) onSuccess(response.data);
    })
    .catch((error) => {
      // if (error?.response?.data?.message === "Authentication Error") {
      //   window.location.href = "/";
      // }
      if (onFailure) onFailure(error);
    });
}

export function apiPut(endPoint, body, onSuccess, onFailure, headers) {
  axios
    .put(apiBaseUrl + endPoint, body, {
      headers: getCommonHeaders(headers),
    })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      if (onFailure) onFailure(error);
    });
}

export function apiDelete(endpoint, onSuccess, onFailure, headers) {
  axios
    .delete(apiBaseUrl + endpoint, {
      headers: getCommonHeaders(headers),
    })
    .then((response) => {
      if (onSuccess) onSuccess(response.data);
    })
    .catch((error) => {
      if (onFailure) onFailure(error);
    });
}

export async function fileUpload(endpoint, file) {
  var myHeaders = new Headers();
  myHeaders.append("accept", "*/*");
  myHeaders.append("Contect-Type", "multipart/form-data");
  // myHeaders.append("Authorization", "Bearer " + token);
  var formdata = new FormData();
  formdata.append("image", file);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch(apiBaseUrl + endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}
