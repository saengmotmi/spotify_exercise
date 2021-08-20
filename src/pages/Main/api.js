import { token } from "utils/auth";
import api from "utils/api";

export async function getUserInfo() {
  const { data: userInfo } = await api.get("/me", {
    headers: { Authorization: token.get() },
  });

  return userInfo;
}

export async function getPlaylists() {
  const { data } = await api.get("/me/playlists");

  return data.items;
}
