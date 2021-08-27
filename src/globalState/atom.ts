import { atom } from "recoil";

import { UserInfo, PlaylistTrack } from "types/spotify";

export const userState = atom<UserInfo | null>({
  key: "userState",
  default: null,
});

export const currentTrackIndexState = atom<number>({
  key: "currentTrackIndexState",
  default: 0,
});

export const tracksState = atom<PlaylistTrack[]>({
  key: "tracksState",
  default: [],
});
