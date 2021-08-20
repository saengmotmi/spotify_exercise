import api from "utils/api";

export async function getTracks(id) {
  const { data } = await api.get(`/playlists/${id}`);

  return data.tracks.items;
}
