import React from "react";
import styled from "styled-components";
import Link from "next/link";

import NavbarDropdown from "./NavbarDropdown";
import useVisible from "../hooks/useVisible";

export default function Navbar() {
  const { isVisible, ref, setIsVisible } = useVisible(false);

  return (
    <Container>
      <LogoHolder>
        <Logo>TSB</Logo>
        <SeacrhContainer>
          <Input placeholder="Search" />
        </SeacrhContainer>
      </LogoHolder>

      <ActionContainer>
        <ActionHolder>
          <Link href="/write" passHref>
            <a>
              <Button>Write a post</Button>
            </a>
          </Link>
          <Avatar
            onClick={() => setIsVisible(!isVisible)}
            alt="user avatar"
            src={"/vercel.svg"}
            height={30}
            width={30}
          ></Avatar>

          {isVisible && (
            <NavDropdownHolder ref={ref}>
              <NavbarDropdown />
            </NavDropdownHolder>
          )}
        </ActionHolder>
      </ActionContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  position: sticky;
  top: 0px;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  padding: 0.7em 1.5em;
`;

const LogoHolder = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.div`
  background: #000;
  padding: 5px;
  border-radius: 2px;
  font-weight: bolder;
  margin-right: 15px;
  color: white;
  font-size: 20px;
`;

const SeacrhContainer = styled.div`
  flex: 1;
`;

const Input = styled.input`
  border: 1px solid #b5bdc4;
  padding: 0.7em 0.85em;
  background-color: #f9fafa;
  border-radius: 5px;
  transition: all 2ms;
  font-size: 14px;
  width: 100%;
  :focus {
    background-color: #fff;
    border-color: #3b49df;
    box-shadow: 1px 1px 0 #3b49df;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const ActionHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  padding: 0.8em;
  background-color: #3b49df;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    background-color: #3b49d0;
  }
`;

const Avatar = styled.img`
  cursor: pointer;
  border-radius: 50%;
`;

const NavDropdownHolder = styled.div`
  position: absolute;
  left: auto;
  top: 56px;
  right: 1rem;
  background: white;
  box-shadow: 4px 4px 0 #08090a;
  color: #08090a;
  border: 2px solid #08090a;
  border-radius: 5px;
  z-index: 400;
  min-width: 250px;
`;
