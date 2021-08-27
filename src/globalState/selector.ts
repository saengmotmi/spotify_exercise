import { selector } from "recoil";

import { tracksState, currentTrackIndexState } from "globalState/atom";

export const currentTrackSelector = selector({
  key: "currentTrackSelector",
  get: ({ get }) => {
    const tracks = get(tracksState);
    const currentIdx = get(currentTrackIndexState);

    return tracks[currentIdx]?.track;
  },
});
