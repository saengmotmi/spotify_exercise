import styled from "styled-components/macro";

import SongNowPlaying from "components/SongNowPlaying";
import AsideTrackList from "components/AsideTrackList";

import { useGetTracks } from "./hooks";

export default function PlaylistDetail() {
  const { isLoading, tracks } = useGetTracks();

  if (isLoading || !tracks?.length) return <span>Loading...</span>;

  return (
    <Container>
      <SongNowPlaying />
      <AsideTrackList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 64px;
  background-color: rgb(56, 64, 64);
  background-image: linear-gradient(transparent, black);
`;
