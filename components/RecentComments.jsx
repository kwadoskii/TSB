import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function RecentComments() {
  return (
    <Container>
      <Header>
        <h3>Recent Comments</h3>
      </Header>
      <Link href="test" passHref>
        <CommentLink>
          <h4>6 Nullish coalescing operators every javascript programmer must know !</h4>
          <div>
            <p>Super intuitive and neat.</p>
            <span>May 21</span>
          </div>
        </CommentLink>
      </Link>
      <Link href="test" passHref>
        <CommentLink>
          <h4>6 Nullish coalescing operators every javascript programmer must know !</h4>
          <div>
            <p>Super intuitive and neat.</p>
            <span>May 21</span>
          </div>
        </CommentLink>
      </Link>
      <Link href="test" passHref>
        <CommentLink>
          <h4>6 Nullish coalescing operators every javascript programmer must know !</h4>
          <div>
            <p>Super intuitive and neat.</p>
            <span>May 21</span>
          </div>
        </CommentLink>
      </Link>
      <Link href="test" passHref>
        <CommentLink>
          <h4>6 Nullish coalescing operators every javascript programmer must know !</h4>
          <div>
            <p>Super intuitive and neat.</p>
            <span>May 21</span>
          </div>
        </CommentLink>
      </Link>

      <Link passHref href="/">
        <ViewAllCommentsLink>
          <p>View all 11 comments</p>
        </ViewAllCommentsLink>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  background: white;
  box-shadow: 0 0 0 1px rgb(8 9 10 / 10%);
  border-radius: 5px;
`;

const Header = styled.div`
  box-shadow: 0 1px 0 0 rgb(8 9 10 / 10%);
  padding: 1em;

  h3 {
    margin: 0;
  }
`;

const CommentLink = styled.a`
  h4 {
    padding: 0.8em 1em 0.5em;
    margin: 0;
  }

  div {
    padding: 0 1em 0.8em;
    box-shadow: 0 1px 0 0 rgb(8 9 10 / 10%);

    p {
      margin: 0;
      font-size: 0.9em;
      display: inline-block;
      margin-right: 5px;
    }

    span {
      color: #64707d;
      font-size: 0.9em;
    }
  }
`;

const ViewAllCommentsLink = styled.a`
  p {
    padding: 1em;
    margin: 0;
    color: dodgerblue;
  }
`;
