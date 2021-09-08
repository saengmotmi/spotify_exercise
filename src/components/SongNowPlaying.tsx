import { useEffect } from "react";
import styled from "styled-components/macro";
import { useRecoilValue, useRecoilState } from "recoil";

import { PlayProps } from "pages/PlaylistDetail/PlaylistDetail";

import {
  currentTrackIndexState,
  tracksState,
  currentTrackSelector,
} from "globalState/track";
import { audioClient } from "globalState/audio";

export default function SongNowPlaying({ isPlaying, setPlay }: PlayProps) {
  const [currentTrackIndex, setCurrentIndex] = useRecoilState(
    currentTrackIndexState
  );
  const track = useRecoilValue(currentTrackSelector);
  const tracks = useRecoilValue(tracksState);
  const audio = useRecoilValue(audioClient);

  // const goNextTrack = () => {
  //   audio.client.pause();
  //   setCurrentIndex((prev: number) => {
  //     if (tracks.length - 1 === currentTrackIndex) {
  //       return 0;
  //     } else {
  //       return prev + 1;
  //     }
  //   });
  // };

  // useEffect(() => {
  //   audio.client.addEventListener("ended", goNextTrack);

  //   if (!isPlaying) {
  //     console.log("hhlhlhlh");
  //     return audio.client.pause();
  //   }

  //   if (track) {
  //     // TODO: 재생 가능한 트랙이 없습니다 조건 추가
  //     if (!track.preview_url) {
  //       goNextTrack();
  //     }

  //     audio.client.play();
  //   } else {
  //     audio.client.src = "";
  //   }

  //   return () => {
  //     audio.client.pause();
  //     audio.client.removeEventListener("ended", goNextTrack);
  //   };
  // }, [track, isPlaying]);

  return (
    <Container>
      <div>
        <CoverImage
          onClick={() =>
            setPlay((prev: boolean) => {
              return !prev;
            })
          }
          src={track?.album.images[0].url}
        />
        <TrackName>{track?.name}</TrackName>
        <ArtistName>{track?.artists[0].name}</ArtistName>
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
  color: rgb(179, 179, 179);
  font-size: 15px;
`;
