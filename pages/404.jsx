import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import color from "../constants/color";
import Title from "../components/Title";

export default function FourOFour() {
  const router = useRouter();

  const handleHome = (e) => {
    e.preventDefault();
    router.replace("/", "/");
  };

  return (
    <>
      <Title title={"oops page not found"} />

      <Container>
        <Holder>
          <Inner>
            <p>404</p>
          </Inner>
        </Holder>

        <p>This page does not exist</p>
        <Anchor onClick={handleHome} href="/">
          Return to Home Page
        </Anchor>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 1.15em;
    margin: 1.8em 0;
  }
`;

const Holder = styled.div`
  background: dodgerblue;
  border-radius: 2em;
  padding: 0.3em;
  height: 46%;
  width: 46%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  max-width: 420px;
`;

const Inner = styled.div`
  background: black;
  color: white;
  height: 90%;
  width: 90%;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 7em;
    font-weight: bolder;
  }
`;

const Anchor = styled.a`
  font-size: 1.1em;
  margin-top: 0;
  text-decoration: underline;
  color: ${color.primary};
  cursor: pointer;
  :hover {
    color: ${color.darkPrimary};
    opacity: 0.9;
  }
`;
