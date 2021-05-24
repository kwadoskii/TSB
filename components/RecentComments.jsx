import React from "react";
import Link from "next/link";
import styled from "styled-components";

import ProfileComment from "./ProfileComment";

export default function RecentComments({ profileUrl }) {
  const comments = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <Header>
        <h3>Recent Comments</h3>
      </Header>

      {comments.map((c) => (
        <ProfileComment key={c} profileUrl={profileUrl} />
      ))}

      <Link passHref href={`${profileUrl}/comments`}>
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

const ViewAllCommentsLink = styled.a`
  p {
    padding: 1em;
    margin: 0;
    color: dodgerblue;
  }
`;
