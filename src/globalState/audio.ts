import { atom } from "recoil";

interface AudioClient {
  client: HTMLAudioElement;
  status: string;
}

export type clientStatus = {
  LOADING: "LOADING";
  NO_SOURCES: "NO_SOURCES";
  PAUSE: "PAUSE";
  PLAYING: "PLAYING";
  STOP: "STOP";
};

const client = new Audio();

export const audioClient = atom<AudioClient>({
  key: "audioClient",
  default: { client, status: "PAUSE" },
});

// playing status 표현해야 함.
