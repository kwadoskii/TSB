import React from "react";
import Link from "next/link";
import styled from "styled-components";

import config from "../constants/config.json";

export default function NavbarDropdown() {
  const navs = config.navs;

  return (
    <Ul>
      <Li>
        <Link href="/profile" passHref>
          <NavLink style={{ fontWeight: "500" }}>
            Austin Ofor
            <Username>@kwadoskii</Username>
          </NavLink>
        </Link>
      </Li>
      {navs.map((n) => (
        <Li key={n.href}>
          <Link href={n.href} passHref>
            <NavLink>{n.title}</NavLink>
          </Link>
        </Li>
      ))}
    </Ul>
  );
}

const Username = styled.span`
  display: inline-block;
  color: rgb(136 136 136);
  padding: 0 0.25em;
  font-size: 13px;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 5px;
`;

const Li = styled.li`
  padding: 0 0.25em;
  cursor: pointer;
  :last-child {
    border-top: 1px solid #eaeaea;
    margin-top: 0.3em;
    padding-top: 0.3em;
  }

  :first-child {
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 0.3em;
    padding-bottom: 0.3em;
  }

  :hover {
    background: rgba(8, 9, 10, 0.04);
    color: #323ebe;
    border-radius: 3px;
  }
`;

const NavLink = styled.a`
  padding: 0.6em 0.5em;

  display: flex;
  cursor: pointer;
  flex-direction: column;
`;
