import React, { useState } from "react";
import { TrendingUp } from "react-feather";
import styled, { css } from "styled-components";

import Card from "./Card";

export default function Comment() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card style={{ marginTop: "-32px" }}>
      <Details isOpen={isOpen} open>
        <Summary
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{!isOpen && "Austin Ofor + 1 replies"}</span>
        </Summary>
        <div>
          <Card style={{ padding: "1em" }}>
            <p>Main comment description</p>
          </Card>
        </div>
        {/* <details>
          <summary>Secondary comment</summary>
          <div>Secondary comment description</div>
        </details> */}
      </Details>
    </Card>
  );
}

const Details = styled.details`
  position: relative;

  ${({ isOpen }) =>
    isOpen &&
    css`
      & summary {
       position: absolute;
    `}
`;

const Summary = styled.summary`
  cursor: pointer;
  color: #64707d;
  font-style: italic;
  font-size: 0.875em;
  background: #f9fafa;
  padding: 0.5em;
  border-radius: 5px;
`;
