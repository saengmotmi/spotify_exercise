import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";

import { tracksState } from "globalState/atom";
import { getPlaylist } from "./api";

export function useGetTracks() {
  const { id } = useParams<{ id: string }>();
  const setTracks = useSetRecoilState(tracksState);

  const { isLoading, data: tracks } = useQuery(
    `playlist-${id}`,
    () => getPlaylist(id),
    { initialData: [] }
  );

  useEffect(() => {
    if (!tracks) return;

    setTracks(tracks);
  }, [tracks]);

  return { isLoading, tracks };
}
