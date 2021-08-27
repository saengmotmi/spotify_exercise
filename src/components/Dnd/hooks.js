import { useState, useEffect, useCallback } from "react";
import { useSetRecoilState } from "recoil";

import { tracksState, currentTrackIndexState } from "globalState/atom";

export function useDndList(init) {
  const [list, setList] = useState(init);
  const setCurrentTrack = useSetRecoilState(currentTrackIndexState);
  const setTracks = useSetRecoilState(tracksState);

  const handleChange = useCallback(({ source, destination }) => {
    if (!destination) return;

    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      setCurrentTrack(endIndex);
      setTracks(result);

      return result;
    };

    setList((prev) => {
      return reorder(prev, source.index, destination.index);
    });
  }, []);

  useEffect(() => {
    setList(init);
  }, [init]);

  return { list, handleChange };
}
