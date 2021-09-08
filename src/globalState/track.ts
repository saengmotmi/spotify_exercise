import { atom, selector } from "recoil";

import { PlaylistTrack } from "types/spotify";

export const currentTrackIndexState = atom<number>({
  key: "currentTrackIndexState",
  default: 0,
});

export const tracksState = atom<PlaylistTrack[]>({
  key: "tracksState",
  default: [],
});

export const currentTrackSelector = selector({
  key: "currentTrackSelector",
  get: ({ get }) => {
    const tracks = get(tracksState);
    const currentIdx = get(currentTrackIndexState);

    return tracks[currentIdx]?.track;
  },
});
