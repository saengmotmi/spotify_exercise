import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";

import Playlist from "components/Playlist";

import { getPlaylists } from "./api";
import { useGetUserInfo } from "./hooks";
import api from "utils/api";

export default function Main() {
  const { user } = useGetUserInfo();

  const { isLoading, data: playlists } = useQuery("playlists", getPlaylists, {
    initialData: [],
  });

  if (isLoading) return <div>Loading...</div>;

  // const [playlists, setPlaylists] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await api.get("/me/playlists");

  //     setPlaylists(data.items);
  //     console.log(data.items);
  //   })();
  // }, []);

  return (
    <Container>
      <h1>{user.display_name}'s Playlists</h1>
      <PlaylistSection>
        {playlists.map((playlist) => (
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
