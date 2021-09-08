import styled from "styled-components";

import { generateCodeChallenge, generateCodeVerifier } from "utils/auth";

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
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = generateCodeChallenge(codeVerifier);

  localStorage.setItem("code_verifier", codeVerifier);

  return (
    "?" +
    Object.entries({
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      response_type: "code",
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
    })
      .map((entry) => entry.join("="))
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
