import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { MapPin, Gift, Book, MessageSquare, Hash } from "react-feather";

import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import { Button } from "../../components/Navbar";
import ArticleCard from "../../components/ArticleCard";
import RecentComments from "../../components/RecentComments";

export default function profile() {
  const router = useRouter();
  const {
    query: { profile },
  } = router;

  const gotoSettings = (e) => {
    e.preventDefault();

    router.push("/settings");
  };

  return (
    <>
      <Title title={"Profile"} />
      <Navbar />
      <Container>
        <ProfileHolder>
          <ProfileCard>
            <ProfileHeader>
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png"
                alt=""
                width={"124px"}
                height={"124px"}
              />

              <Button onClick={gotoSettings}>Edit Profile</Button>
            </ProfileHeader>

            <ProfileSection>
              <h2>Austin Ofor ({profile})</h2>

              <p>
                I'm a Software Engineer based in Lagos, Nigeria. I have a passion for web
                design and love to create applications.
              </p>

              <Icons>
                <div>
                  <MapPin size={20} />
                  <span>Ikeja, Lagos</span>
                </div>

                <div>
                  <Gift size={20} />
                  <span>Joined on Sep 23, 2020</span>
                </div>
              </Icons>
            </ProfileSection>

            <ProfileFooter>
              <div>
                <h5>Work</h5>
                <p>Software Engineer</p>
              </div>
            </ProfileFooter>
          </ProfileCard>
        </ProfileHolder>

        <DetailsRegion>
          <SideInfo>
            <div>
              <Book size={21} />
              <span>2 posts published</span>
            </div>
            <div>
              <MessageSquare size={21} />
              <span>11 comments written</span>
            </div>
            <div>
              <Hash size={21} />
              <span>21 tags followed</span>
            </div>
          </SideInfo>

          <Activities>
            <RecentComments profileUrl={profile} />
            <ArticleCard />
            <ArticleCard />
          </Activities>
        </DetailsRegion>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 56px);
  background: #eef0f1;
  padding-bottom: 2em;
`;

const ProfileHolder = styled.div`
  background: linear-gradient(180deg, rgb(40, 3, 49) 8em, transparent 8em);
  width: 100%;
`;

const ProfileCard = styled.div`
  padding-top: 1.5em;
  display: flex;
  width: 98%;
  max-width: 992px;
  margin: 0 auto;
  flex-flow: column;
  align-items: center;
`;

const ProfileHeader = styled.div`
  margin-top: 3em;
  width: 100%;
  min-width: 320px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 0 1px #08090a1a;
  background: white;
  display: flex;
  flex-flow: column;
  padding-bottom: 2.2em;

  img {
    border: 8px solid rgb(40, 3, 49);
    border-radius: 50%;
    margin: -4em auto 0;
    display: block;
  }

  ${Button} {
    align-self: flex-end;
    margin-top: -2.6em;
    margin-right: 2.1em;
  }
`;

const ProfileSection = styled.div`
  margin-top: -1.5em;
  width: 100%;
  min-width: 320px;
  box-shadow: -1px 0 0 0 #08090a1a, 1px 0 0 0 #08090a1a, 0 1px 0 0 #08090a1a;
  background: white;
  text-align: center;
  padding: 0 0 1em 0;

  h2 {
    margin: 0;
    font-size: 2em;
    font-weight: 900;
  }

  p {
    width: 70%;
    margin: 1em auto;
    font-size: 1.1em;
  }
`;

const Icons = styled.div`
  color: #64707d;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 1em 0;

  div {
    margin: 0 1em;
    display: flex;
    min-width: fit-content;
    align-items: center;

    span {
      margin-left: 3px;
      font-size: 0.85em;
    }
  }
`;

const ProfileFooter = styled.div`
  background: white;
  text-align: center;
  width: 100%;
  min-width: 320px;
  box-shadow: -1px 0 0 0 #08090a1a, 1px 0 0 0 #08090a1a, 0 1px 0 0 #08090a1a,
    0 -1px 0 0 #08090a1a;
  border-radius: 0 0 5px 5px;

  div {
    margin: 2em 0;

    p,
    h5 {
      margin: 0;
    }

    h5 {
      color: #64707d;
      font-weight: 600;
      font-size: 0.9em;
    }
  }
`;

const DetailsRegion = styled.div`
  /* width: 75%;
  min-width: 320px; */
  width: 98%;
  max-width: 992px;
  margin: 1em auto;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  grid-gap: 1em;
`;

const SideInfo = styled.div`
  /* width: 30%; */
  min-width: fit-content;
  display: flex;
  flex: 1;
  flex-flow: column;
  padding: 1em;
  background: #f9fafa;
  color: #202428;
  box-shadow: 0 0 0 1px #08090a0d;
  border-radius: 5px;

  div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 0.6em 0;

    svg {
      color: #7d8a97;
      margin-right: 10px;
    }
  }
`;

const Activities = styled.div`
  flex: 3;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  grid-gap: 0.8em;
`;
