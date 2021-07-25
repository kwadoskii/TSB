import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";
import Card from "../../components/Card";

import Navbar, { Button } from "../../components/Navbar";
import Title from "../../components/Title";
import color from "../../constants/color";
import Input from "../../components/Input";

export default function Settings() {
  return (
    <>
      <Title title="Settings" />
      <Navbar />
      <Container>
        <SectionHolder>
          <h2>
            Settings for{" "}
            <Link passHref href="/kwadoskii">
              <Highlight>@Kwadoskii</Highlight>
            </Link>
          </h2>
        </SectionHolder>

        <SectionHolder>
          <NavContainer>
            <Link href="/settings/profile">
              <NavLink>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  aria-labelledby="aoad1eed656pwe4fg37h7kauz80nlbui"
                >
                  <title id="aoad1eed656pwe4fg37h7kauz80nlbui">Profile</title>
                  <path
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                    fill="#FFCC4D"
                  ></path>
                  <path
                    d="M7.842 15.123c.025.1.649 2.433 4.158 2.433 3.51 0 4.133-2.333 4.158-2.433a.277.277 0 00-.464-.265c-.011.01-1.086 1.03-3.695 1.03-2.607 0-3.683-1.02-3.692-1.03a.28.28 0 00-.452.087.278.278 0 00-.014.178zM10.056 9.5c0 1.074-.622 1.944-1.39 1.944-.767 0-1.388-.87-1.388-1.944 0-1.074.621-1.944 1.389-1.944.767 0 1.389.87 1.389 1.944zm6.666 0c0 1.074-.621 1.944-1.389 1.944-.767 0-1.389-.87-1.389-1.944 0-1.074.622-1.944 1.39-1.944.767 0 1.388.87 1.388 1.944z"
                    fill="#664500"
                  ></path>
                </svg>
                <span> Profile </span>
              </NavLink>
            </Link>

            <Link href="/settings/account" passHref>
              <NavLink active>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  aria-labelledby="axm2m148z9bpr6cv6mk2fo0j5alf25f"
                >
                  <title id="axm2m148z9bpr6cv6mk2fo0j5alf25f">Account</title>
                  <path
                    d="M14.728 9.999a9.75 9.75 0 00-1.6 1.345c-.07-2.358-.637-5.408-3.762-6.901-.618-3.364-7.83-1.655-7.183-1.329 1.285.65 1.97 2.305 2.796 3.175 1.474 1.552 3.113 1.647 3.928.433 1.927 1.252 2.054 3.627 1.995 6.166-.006.28-.013.542-.013.78v7.776c0 .614 2.223.614 2.223 0v-6.383c.3-.53 1.179-1.947 2.46-2.941.881.774 2.301.527 3.59-.83.829-.871 1.275-2.525 2.56-3.176.68-.342-7.11-2.218-6.993 1.885"
                    fill="#77B255"
                  ></path>
                </svg>
                <span>Account</span>
              </NavLink>
            </Link>
          </NavContainer>

          <SettingContainer>
            <Card header="Change Password">
              <div>
                <form action="">
                  <Input hasLabel type="password" name="Current password" />
                  <Input hasLabel type="password" name="New password" />
                  <Input hasLabel type="password" name="Confirm new password" />
                  <Button>Change password</Button>
                </form>
              </div>
            </Card>

            <Card header="Export content">
              <p>
                You can request an export of all your content. Currently we only support
                the export of your posts and comments. They will be emailed to your inbox.
              </p>
              <Input
                type="checkbox"
                name="exportContent"
                checkboxText="Request an export of your content"
              />
              <Button>Submit Data Request</Button>
            </Card>

            <Card header="Danger Zone" headerColor="#dc1818">
              <h3>Delete account</h3>
              <p>Deleting your account will:</p>
              <p>
                Delete your profile, along with your authentication associations. <br />
                Delete any and all content you have, such as articles, comments, your
                reading list or chat messages. <br />
                Allow your username to become available to anyone.
              </p>

              <Button color="#dc1818" hoverColor="#c20a0a">
                Delete Account
              </Button>
            </Card>
          </SettingContainer>
        </SectionHolder>
      </Container>
    </>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 56px);
  background-color: #eef0f1;
  padding: 0.3em 0em;
  width: 100%;

  h2 {
    margin: 10px 0;
    font-size: 1.8em;
    padding: 9px;
  }
`;

const Highlight = styled.a`
  color: ${color.primary};
`;

const SectionHolder = styled.div`
  display: flex;
  grid-gap: 0.9em;
  flex-flow: row wrap;
  width: 98%;
  margin: 0 auto;
  max-width: 992px;
  height: 100%;
`;

const NavContainer = styled.nav`
  flex: 1.3;
  display: flex;
  flex-flow: column;
  min-width: fit-content;
`;

const NavLink = styled.a`
  padding: 9px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;

  ${({ active }) =>
    active
      ? css`
          background: white;
          font-weight: 500;
        `
      : css`
          :hover {
            background: rgb(8 9 10 / 5%);
          }
        `}

  :hover {
    color: #323ebe;
  }

  span {
    margin-left: 6px;
  }
`;

const SettingContainer = styled.div`
  flex: 4;
  min-width: 300px;
`;
