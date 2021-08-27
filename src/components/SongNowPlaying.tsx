import { useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { useRecoilValue, useRecoilState } from "recoil";

import { currentTrackIndexState, tracksState } from "globalState/atom";
import { currentTrackSelector } from "globalState/selector";

export default function SongNowPlaying() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrackIndex, setCurrentIndex] = useRecoilState(
    currentTrackIndexState
  );
  const track = useRecoilValue(currentTrackSelector);
  const tracks = useRecoilValue(tracksState);

  useEffect(() => {
    if (audioRef.current === null) return;

    if (track) {
      audioRef.current.play();
    } else {
      audioRef.current.src = "";
    }
  }, [track]);

  const onEnded = () => {
    audioRef.current?.pause();
    setCurrentIndex((prev: number) => {
      if (tracks.length - 1 === currentTrackIndex) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <Container>
      <div>
        <CoverImage src={track?.album.images[0].url} />
        <TrackName>{track?.name}</TrackName>
        <ArtistName>{track?.artists[0].name}</ArtistName>
        <audio
          style={{ display: "none" }}
          ref={audioRef}
          controls
          src={track?.preview_url}
          onEnded={onEnded}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  height: calc(100vh - 64px);

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const CoverImage = styled.img.attrs(() => ({ alt: "cover" }))`
  width: 70%;
  margin-bottom: 20px;
`;

const TrackName = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 15px;
`;

const ArtistName = styled.h3`
  color: #fff;
  font-size: 15px;
`;
