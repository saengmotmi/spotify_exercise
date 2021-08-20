import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { useQuery } from "react-query";

import { DndWrapper, DndItem } from "components/Dnd/Dnd";
import { useDndList } from "components/Dnd/hooks";

import { getTracks } from "./api";

export default function PlaylistDetail() {
  const { id } = useParams();

  const { isLoading, data: tracks } = useQuery(
    `tracks-${id}`,
    () => getTracks(id),
    {
      initialData: [],
    }
  );

  const { list: trackList, handleChange } = useDndList(tracks);

  if (isLoading) return <span>Loading...</span>;

  return (
    <Container>
      <AsideTrackList>
        <DndWrapper handleChange={handleChange}>
          {trackList.map(({ track }, index) => {
            return (
              <DndItem key={track.id} id={track.id} index={index}>
                <Card>{track.name}</Card>
              </DndItem>
            );
          })}
        </DndWrapper>
      </AsideTrackList>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 64px;
`;

const AsideTrackList = styled.aside`
  width: 30%;
`;

const Card = styled.div`
  border: 1px dashed gray;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: white;
  cursor: move;
`;
