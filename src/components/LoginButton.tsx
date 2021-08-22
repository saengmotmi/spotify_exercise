import styled from "styled-components";

export default function LoginButton() {
  return (
    <a
      href={"https://accounts.spotify.com/authorize" + auth()}
      target="_blank"
      rel="noreferrer"
    >
      <Button>Spotify로 로그인</Button>
    </a>
  );
}

function auth() {
  const qsObj = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    scope: "user-top-read",
    response_type: "token",
  };

  return (
    "?" +
    Object.entries(qsObj)
      .map((el) => el.join("="))
      .join("&")
  );
}

const Button = styled.button`
  all: unset;
  border-radius: 50px;
  width: 200px;
  height: 30px;
  background: #1db954;
  color: white;
`;
