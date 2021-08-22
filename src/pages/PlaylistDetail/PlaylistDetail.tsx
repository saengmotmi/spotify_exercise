import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { useQuery } from "react-query";

import SongNowPlaying from "components/SongNowPlaying";
import AsideTrackList from "components/AsideTrackList";

import { getPlaylist } from "./api";

export default function PlaylistDetail() {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data: tracks } = useQuery(
    `playlist-${id}`,
    () => getPlaylist(id),
    {
      initialData: [],
    }
  );

  if (isLoading || !tracks) return <span>Loading...</span>;

  return (
    <Container>
      <SongNowPlaying />
      <AsideTrackList tracks={tracks} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 64px;
`;
