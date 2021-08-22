import { AxiosResponse } from "axios";

import api from "utils/api";
import { PlaylistById } from "types/spotify";

export async function getPlaylist(id: string) {
  const { data }: AxiosResponse<PlaylistById> = await api.get(
    `/playlists/${id}`
  );

  return data.tracks.items;
}
