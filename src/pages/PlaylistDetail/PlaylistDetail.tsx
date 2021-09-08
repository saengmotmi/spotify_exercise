import { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components/macro";

import SongNowPlaying from "components/SongNowPlaying";
import AsideTrackList from "components/AsideTrackList";
import AudioWave from "components/AudioWave";

import { useGetTracks } from "./hooks";

export interface PlayProps {
  isPlaying: boolean;
  setPlay: Dispatch<SetStateAction<boolean>>;
}

export default function PlaylistDetail() {
  const { isLoading, tracks } = useGetTracks();
  const [play, setPlay] = useState<boolean>(false);

  if (isLoading || !tracks?.length) return <span>Loading...</span>;

  return (
    <Container>
      <SongNowPlaying isPlaying={play} setPlay={setPlay} />
      <AsideTrackList isPlaying={play} setPlay={setPlay} />
      <AudioWave isPlaying={play} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 64px;
  background-color: rgb(56, 64, 64);
  background-image: linear-gradient(transparent, black);
`;
