import axios, { AxiosResponse } from "axios";

import { sendRefreshToken } from "pages/AuthCheck/api";
import { token } from "utils/auth";
import { AuthResponse } from "types/spotify";

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
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  async function (error) {
    if (error.response.status === 401) {
      const formData = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: localStorage.getItem("refresh_token") as string,
        client_id: process.env.REACT_APP_CLIENT_ID as string,
      });

      const {
        data: { access_token, refresh_token, token_type },
      }: AxiosResponse<AuthResponse> = await sendRefreshToken(formData);

      token.set(`${token_type} ${access_token}`);
      localStorage.setItem("refresh_token", refresh_token);
    }

    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
