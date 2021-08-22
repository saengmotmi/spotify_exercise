import axios from "axios";
import { token } from "utils/auth";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = token.get();

    return config;
  },
  function (error) {
    console.log(error.response.status);

    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    console.log(error.response.status);

    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;
