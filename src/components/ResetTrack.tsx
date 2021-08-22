import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResetRecoilState } from "recoil";

import { currentTrackState } from "globalState/atom";

interface ResetTrackProps {
  children: React.ReactNode;
}

export default function ResetTrack({ children }: ResetTrackProps) {
  const location = useLocation();
  const resetTrack = useResetRecoilState(currentTrackState);

  useEffect(() => {
    if (!location.pathname.includes("/playlist")) {
      resetTrack();
    }
  }, [location.pathname]);

  return <>{children}</>;
}
