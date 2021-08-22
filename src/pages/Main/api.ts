import { AxiosResponse } from "axios";

import { token } from "utils/auth";
import api from "utils/api";

import { UserInfo, Playlists } from "types/spotify";

export async function getUserInfo() {
  const { data: userInfo }: AxiosResponse<UserInfo> = await api.get("/me", {
    headers: { Authorization: token.get() },
  });

  return userInfo;
}

export async function getPlaylists() {
  const { data }: AxiosResponse<Playlists> = await api.get("/me/playlists");

  return data.items;
}
