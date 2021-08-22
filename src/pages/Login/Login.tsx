import styled from "styled-components";
import LoginLogo from "components/LoginLogo";
import LoginButton from "components/LoginButton";

export default function Login() {
  return (
    <Form>
      <LoginLogo />
      <LoginButton />
    </Form>
  );
}

const Form = styled.div`
  text-align: center;
`;
