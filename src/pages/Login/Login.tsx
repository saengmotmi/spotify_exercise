import styled from "styled-components";

import LoginLogo from "./LoginLogo";
import LoginButton from "./LoginButton";

export default function Login() {
  return (
    <Form>
      <LoginLogo />
      <LoginButton />
    </Form>
  );
}

const Form = styled.div`
  margin-top: 60px;
  text-align: center;
`;
