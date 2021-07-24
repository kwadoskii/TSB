import React from "react";
import styled from "styled-components";

export default function Card({ children, header }) {
  return (
    <Container>
      {header &&<Header>
        <h3>{header}</h3>
      </Header>}

      {children}
    </Container>
  );
}

const Container = styled.div`
  background: white;
  box-shadow: 0 0 0 1px rgb(8 9 10 / 10%);
  border-radius: 5px;
  overflow: hidden;
  padding: 1.5em;
  margin-bottom: 1.8em;
`;

const Header = styled.div`
  margin-bottom: 1.5em;

  h3 {
    font-size: 1.5em;
    margin: 0;
  }
`;
