import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components/macro";

import { useDndList } from "components/Dnd/hooks";
import { DndWrapper, DndItem } from "components/Dnd/Dnd";

import { currentTrackIndexState, tracksState } from "globalState/atom";
import { PlaylistTrack } from "types/spotify";

export default function AsideTrackList() {
  const tracks = useRecoilValue(tracksState);
  const { list: trackList, handleChange } = useDndList(tracks);
  const setCurrentTrack = useSetRecoilState(currentTrackIndexState);

  const scrollIntoView = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleCardClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    scrollIntoView(e);
    setCurrentTrack(index);
  };

  const handleDndChange = (...args: any[]) => {
    const [{ destination, source }] = args;

    if (destination.index === source.index) return;

    handleChange(...args);
  };

  return (
    <Container>
      <DndWrapper handleChange={handleDndChange}>
        {trackList.map(({ track }: PlaylistTrack, index: number) => (
          <DndItem key={track.id} id={track.id} index={index}>
            <Card onClick={(e) => handleCardClick(e, index)}>
              <img
                alt="album cover"
                src={track.album.images[0].url}
                width="100"
              />
              <CardDesc>
                <p>{track.name}</p>
                <p>{track.artists[0].name}</p>
              </CardDesc>
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

const CardDesc = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p:first-of-type {
    margin-bottom: 20px;
    font-size: 17px;
    font-weight: 700;
  }
`;
