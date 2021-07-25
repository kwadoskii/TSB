import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import NavbarDropdown from "./NavbarDropdown";
import useVisible from "../hooks/useVisible";
import color from "../constants/color";
import Input from "../components/Input";

export default function Navbar() {
  const { isVisible, ref, setIsVisible } = useVisible();
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleShowHideNavMenu = () => {
    // if (isVisible) return setIsVisible(false);
    setIsVisible(false);

    setIsVisible(!isVisible);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    router.push({ pathname: "/search", query: { q: searchValue } });
  };

  return (
    <Container>
      <LogoHolder>
        <Link href="/">
          <a>
            <Logo>TSB</Logo>
          </a>
        </Link>
        <SeacrhContainer>
          <form>
            <Input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search..."
              value={searchValue}
            />
            <button
              type="submit"
              onClick={handleSearch}
              style={{ display: "none" }}
            ></button>
          </form>
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
            onClick={handleShowHideNavMenu}
            alt="user avatar"
            src={
              "https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png"
            }
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
  background: ${color.white};
  border-bottom: 1px solid #eaeaea;
  padding: 0.7em 1.5em;
  z-index: 10;
`;

const LogoHolder = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.div`
  cursor: pointer;
  user-select: none;
  background: ${color.black};
  padding: 5px;
  border-radius: 2px;
  font-weight: bolder;
  margin-right: 15px;
  color: ${color.white};
  font-size: 20px;
`;

const SeacrhContainer = styled.div`
  flex: 1;
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

export const Button = styled.button`
  border: none;
  padding: 0.85em;
  background-color: ${({ color: textColor }) => textColor || color.primary};
  color: ${color.offWhite};
  font-weight: 500;
  font-size: 0.9em;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? "100%" : "")};
  :hover {
    background-color: ${({ hoverColor }) => hoverColor || color.darkPrimary};
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
  background: ${color.white};
  box-shadow: 4px 4px 0 ${color.dark};
  color: ${color.dark};
  border: 2px solid ${color.dark};
  border-radius: 5px;
  z-index: 400;
  min-width: 250px;
`;
