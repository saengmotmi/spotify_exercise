import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";

import Playlist from "components/Playlist";

import { getPlaylists } from "./api";
import { useGetUserInfo } from "./hooks";
import { Playlist as PlaylistType } from "types/spotify";

export default function Main() {
  const { user } = useGetUserInfo();

  const { isLoading, data: playlists } = useQuery("playlists", getPlaylists, {
    initialData: [],
  });

  if (isLoading || !playlists) return <div>Loading...</div>;

  return (
    <Container>
      <h1>{user?.display_name}'s Playlists</h1>
      <PlaylistSection>
        {playlists.map((playlist: PlaylistType) => (
          <Link key={playlist.id} to={`/playlist/${playlist.id}`}>
            <Playlist {...playlist} />
          </Link>
        ))}
      </PlaylistSection>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 64px;
`;

const PlaylistSection = styled.section`
  display: flex;
`;
