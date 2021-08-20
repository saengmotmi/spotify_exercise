import styled from "styled-components";

export default function Playlist({ images, name, description }) {
  return (
    <Container>
      <img alt="playlist" src={images[0].url} width="200" />
      <p>{name}</p>
      {description && <p>{description}</p>}
    </Container>
  );
}

const Container = styled.div`
  width: 200px;

  margin-right: 20px;
  margin-bottom: 20px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
