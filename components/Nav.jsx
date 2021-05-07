import React from "react";
import Link from "next/link";
import styled from "styled-components";

import color from "../constants/color";

export default function Nav() {
  return (
    <NavHolder>
      <Link href="#" passHref>
        <NavLink>Most Relevant</NavLink>
      </Link>

      <Link href="#" passHref>
        <NavLink>Two</NavLink>
      </Link>

      <Link href="#" passHref>
        <NavLink>Three</NavLink>
      </Link>
    </NavHolder>
  );
}

const NavHolder = styled.nav`
  display: flex;
  flex-flow: row wrap;
`;

const NavLink = styled.a`
  font-size: 1em;
  padding: 6px 6px;
  margin: 0 2px;
  border: 3px solid transparent;
  overflow: hidden;
  :hover {
    color: ${color.primary};
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: rgb(59 73 223 / 10%);
    border-bottom: 3px solid ${color.primary};
  }
`;
