import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Nav from "../components/Nav";

export default function Search() {
  return (
    <>
      <Navbar />
      <Container>
        <HeaderContainer>
          <h2>Search results</h2>
          <Nav />
        </HeaderContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  background: #eef0f1;
  padding: 0 4em;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
