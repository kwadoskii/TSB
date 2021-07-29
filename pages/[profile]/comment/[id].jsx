import Link from "next/link";
import React from "react";
import styled from "styled-components";

import Card from "../../../components/Card";
import Comment from "../../../components/Comment";
import Navbar from "../../../components/Navbar";
import Title from "../../../components/Title";

export default function comment() {
  return (
    <>
      <Title title={"Comment"} /> {/* Get the title from the actual comment */}
      <Navbar />
      <Container>
        <CommentHolder>
          <Card style={{ background: "#f9fafa" }}>
            <h1>
              <span>Discussion on: </span>6 Nullish coalescing operators every javascript
              programmer must know!
            </h1>
            <SectionHolder>
              <Link passHref href="/kwadoskii/i-love-javascript">
                <a>
                  <TransparentButton>View post</TransparentButton>
                </a>
              </Link>
              <Link passHref href="/kwadoskii/i-love-javascript#comments">
                <a>
                  <TransparentButton>Full discussion</TransparentButton>
                </a>
              </Link>
            </SectionHolder>
          </Card>
        </CommentHolder>

        <Main>
          <Comment />
        </Main>
      </Container>
    </>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 56px);
  background-color: #eef0f1;
  padding: 0.3em 0em;
  width: 100%;
`;

const CommentHolder = styled.div`
  width: 90%;
  max-width: 992px;
  min-width: 300px;
  margin: 0.9em auto 0;

  h1 {
    margin: 0;
    font-size: 1.5em;
    color: #202428;

    span {
      color: #64707d;
      font-weight: 400;
    }
  }
`;

const SectionHolder = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin-top: 1em;
`;

const TransparentButton = styled.button`
  padding: 0.6em;
  border: none;
  outline: none;
  border-radius: 5px;
  background: transparent;
  font-weight: 500;
  box-shadow: 0 0 0 2.5px rgb(8 9 10 / 10%);
  font-size: 1em;
  cursor: pointer;
  color: #363d44;
  transition: 0.3s;

  :hover {
    background: rgb(0 0 0 / 4%);
    color: #08090a;
    box-shadow: 0 0 0 2.5px rgb(8 9 10 / 20%);
    border-color: #99a3ad;
  }
`;

const Main = styled.section`
  width: 98%;
  max-width: 1020px;
  margin: 0 auto;
`;
