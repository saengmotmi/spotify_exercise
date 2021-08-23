import { useRecoilValue } from "recoil";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { userState } from "globalState/atom";

const NAV_ACTIVE_LIST = ["/", "/playlist"];
const SPOTIFY_LOGO_WHITE =
  "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png";

export default function Nav() {
  const user = useRecoilValue(userState);
  const { pathname } = useLocation();

  const isNavActive = checkIsNavActive(pathname);

  return (
    <>
      {isNavActive && (
        <Container>
          <LogoSection>
            <Link to="/">
              <LogoImg />
            </Link>
          </LogoSection>
          <UserSection>
            <ProfileImg src={user?.images[0].url} />
          </UserSection>
        </Container>
      )}
    </>
  );
}

function checkIsNavActive(path: string) {
  const [_, pathToCheck] = path.split("/").map((s: string) => "/" + s);

  return NAV_ACTIVE_LIST.includes(pathToCheck);
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  padding: 0 20px;
  background: #17181e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  z-index: 10000;
`;

const Section = styled.div`
  padding: 15px 0;
`;

const LogoSection = styled(Section)``;
const UserSection = styled(Section)`
  margin-left: auto;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  cursor: pointer;
`;

const LogoImg = styled.img.attrs(() => ({
  src: SPOTIFY_LOGO_WHITE,
}))`
  width: 100px;
  cursor: pointer;
`;
