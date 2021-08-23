import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components/macro";

import { useDndList } from "components/Dnd/hooks";
import { DndWrapper, DndItem } from "components/Dnd/Dnd";

import { currentTrackState } from "globalState/atom";
import { Track, PlaylistTrack } from "types/spotify";

interface AsideTrackListProps {
  tracks: PlaylistTrack[] | [];
}

export default function AsideTrackList({ tracks }: AsideTrackListProps) {
  const { list: trackList, handleChange } = useDndList(tracks);
  const [track, setTrack] = useRecoilState(currentTrackState);

  const scrollIntoView = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleCardClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    trackToPlay: Track
  ) => {
    scrollIntoView(e);
    setTrack(trackToPlay);
  };

  return (
    <Container>
      <DndWrapper handleChange={handleChange}>
        {trackList.map(({ track }: PlaylistTrack, index: number) => (
          <DndItem key={track.id} id={track.id} index={index}>
            <Card onClick={(e) => handleCardClick(e, track)}>
              <img
                alt="album cover"
                src={track.album.images[0].url}
                width="150"
              />
              <div>
                <p>{track.name}</p>
              </div>
            </Card>
          </DndItem>
        ))}
      </DndWrapper>
    </Container>
  );
}

const Container = styled.aside`
  position: fixed;
  top: 64px;
  bottom: 0;
  right: 0;
  width: 20%;
  overflow: scroll;
`;

const Card = styled.div`
  display: flex;

  /* border: 1px dashed gray; */
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: white;
  cursor: move;
`;
