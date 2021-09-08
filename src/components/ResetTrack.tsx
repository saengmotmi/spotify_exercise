import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResetRecoilState } from "recoil";

import { tracksState, currentTrackIndexState } from "globalState/track";

interface ResetTrackProps {
  children: React.ReactNode;
}

export default function ResetTrack({ children }: ResetTrackProps) {
  const location = useLocation();
  const resetTracks = useResetRecoilState(tracksState);
  const resetIndex = useResetRecoilState(currentTrackIndexState);

  useEffect(() => {
    if (!location.pathname.includes("/playlist")) {
      resetTracks();
      resetIndex();
    }
  }, [location.pathname]);

  return <>{children}</>;
}
