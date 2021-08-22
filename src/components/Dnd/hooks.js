import { useState, useEffect, useCallback } from "react";

import { PlaylistTrack } from "types/spotify";

export function useDndList(init) {
  const [list, setList] = useState(init);

  const handleChange = useCallback(({ source, destination }) => {
    if (!destination) return;

    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

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
