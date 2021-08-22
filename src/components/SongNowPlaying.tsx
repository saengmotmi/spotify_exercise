import { useEffect, useRef } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";

import { currentTrackState } from "globalState/atom";

export default function SongNowPlaying() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const track = useRecoilValue(currentTrackState);
  const resetTrack = useResetRecoilState(currentTrackState);

  useEffect(() => {
    if (audioRef.current === null) return;

    if (track) {
      audioRef.current.play();
    } else {
      audioRef.current.src = "";
    }
  }, [track]);

  return (
    <div>
      <audio
        ref={audioRef}
        controls
        src={track?.preview_url}
        onEnded={resetTrack}
      />
    </div>
  );
}
