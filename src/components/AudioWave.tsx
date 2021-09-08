import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { audioClient } from "globalState/audio";
import { currentTrackSelector } from "globalState/track";
import { PlayProps } from "pages/PlaylistDetail/PlaylistDetail";

type AudioWaveProps = Pick<PlayProps, "isPlaying">;

export default function AudioWave({ isPlaying }: AudioWaveProps) {
  const track = useRecoilValue(currentTrackSelector);
  const audio = useRecoilValue(audioClient);

  // useEffect(() => {
  //   if (!track?.preview_url) return;
  //   (async () => {
  //     if (audio.client) {
  //       audio.client.pause();
  //     }
  //     audio.client = await createAudio(track.preview_url);
  //   })();

  //   if (!isPlaying) return;

  //   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  //   let id: NodeJS.Timer;

  //   // (async () => {
  //   // audio.client = await createAudio(track.preview_url);

  //   const { dataArray, analyser } = createAudioCtxSource(audio.client);

  //   id = setInterval(() => {
  //     analyser.getByteFrequencyData(dataArray);
  //     console.log(dataArray);
  //   }, 100);
  //   // })();

  //   return () => clearInterval(id);
  // }, [track, isPlaying]);

  return <div>asdf</div>;
}

async function createAudio(preview_url: string) {
  const res = await fetch(preview_url);
  const blob = await res.blob();
  const blobURL = URL.createObjectURL(blob);

  return new Audio(blobURL);
}

function createAudioCtxSource(audio: HTMLAudioElement) {
  const FFT_SIZE = 2048;

  const audioCtx = new window.AudioContext();
  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = FFT_SIZE;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const source = audioCtx.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioCtx.destination);

  return { dataArray, analyser };
}
