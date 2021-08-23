import { useEffect, useRef } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import styled from "styled-components/macro";

import { currentTrackState } from "globalState/atom";

export default function SongNowPlaying() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [track, setTrack] = useRecoilState(currentTrackState);
  const resetTrack = useResetRecoilState(currentTrackState);

  useEffect(() => {
    // 첫 리스트 레디 -> 목록을 상태에 넣어놓고, 개별 트랙은 selector로?
  }, []);

  useEffect(() => {
    if (audioRef.current === null) return;

    if (track) {
      audioRef.current.play();
    } else {
      audioRef.current.src = "";
    }
  }, [track]);

  console.log(track);

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
          onEnded={() => audioRef.current?.pause()}
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
