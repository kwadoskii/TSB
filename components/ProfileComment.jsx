import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function ProfileComment({ comment, profileUrl }) {
  return (
    <Link href={`${profileUrl}/comment/${comment?.id || "12334"}`} passHref>
      <CommentLink>
        <h4 className="font-bold">
          6 Nullish coalescing operators every javascript programmer must know !
        </h4>
        <div>
          <p>Super intuitive and neat.</p>
          <span>May 21</span>
        </div>
      </CommentLink>
    </Link>
  );
}

const CommentLink = styled.a`
  display: block;
  &:hover {
    background: #08090a0d;
  }
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
