import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Nav from "../components/Nav";
import ArticleCard from "../components/ArticleCard";

export default function Search() {
  return (
    <>
      <Navbar />
      <Container>
        <HeaderContainer>
          <h2>Search results</h2>
          <Nav />
        </HeaderContainer>

        <SearchResults>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </SearchResults>
      </Container>
    </>
  );
}

const Container = styled.div`
  background: #eef0f1;
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  min-height: calc(100vh - 56px);
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SearchResults = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 80%;
  min-width: 300px;
  margin: 0 auto;
`;
