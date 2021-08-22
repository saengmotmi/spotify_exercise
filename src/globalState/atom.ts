import { atom } from "recoil";

import { UserInfo, Track } from "types/spotify";

export const userState = atom<UserInfo | null>({
  key: "userState",
  default: null,
});

export const currentTrackState = atom<Track | null>({
  key: "currentTrackState",
  default: null,
});
