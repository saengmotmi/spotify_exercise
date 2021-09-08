import styled from "styled-components";
import { Playlist as PlaylistType } from "types/spotify";

export default function Playlist({ images, name, description }: PlaylistType) {
  return (
    <Container>
      <AlbumCover src={images[0]?.url || ""} />
      <Title>{name}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;

  margin-right: 20px;
  margin-bottom: 20px;

  background-color: #181818;
  padding: 16px;
`;

const AlbumCover = styled.img.attrs(() => ({ alt: "playlist" }))`
  width: 100%;
  margin-bottom: 16px;
`;

const Title = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 4px;
  color: rgb(179, 179, 179);
  font-size: 14px;
  font-weight: 400;
`;
