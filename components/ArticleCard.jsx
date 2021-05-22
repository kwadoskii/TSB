import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Heart, MessageSquare } from "react-feather";

import color from "../constants/color";

const imageSize = 40;
const imageMargin = imageSize / 4;

export default function ArticleCard({ hasImage = false }) {
  const commentHandler = () => console.log("handler clicked");
  const likeHandler = () => console.log("handler clicked");
  const saveHandler = () => console.log("handler clicked");

  return (
    <Container>
      {hasImage && (
        <Link href="/post-url" passHref>
          <a>
            <ImageBanner
              style={{
                background: `url("https://res.cloudinary.com/practicaldev/image/fetch/s--rIMJB0Lh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/881jdm7sdnril6hn3f3l.PNG") no-repeat center`,
                backgroundSize: "cover",
                width: "100%",
                height: "230px",
              }}
            ></ImageBanner>
          </a>
        </Link>
      )}

      <CardContainer>
        <div>
          <Link href="/post-url" passHref>
            <a>
              <ArthurHolder>
                <Link href="/testuser" passHref>
                  <a>
                    <Image
                      src={
                        "https://res.cloudinary.com/practicaldev/image/fetch/s--HMZIR_Gv--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/555812/2bf2e16e-98a9-450b-af3a-1fbd51fce623.png"
                      }
                      alt="profile of user"
                      width={imageSize}
                      height={imageSize}
                    />
                  </a>
                </Link>

                <ArthurDetails>
                  <Link href="/testuser" passHref>
                    <a>
                      <p>Test Arthur</p>
                    </a>
                  </Link>

                  <Link href="/post-url" passHref>
                    <a>
                      <span>May 6 (3 hours ago)</span>
                    </a>
                  </Link>
                </ArthurDetails>
              </ArthurHolder>
            </a>
          </Link>
        </div>

        <Contents>
          <Link href="/post-url" passHref>
            <a>
              <Title>
                {/* The Ultimate Web Developer Resources List 🔥Awesome 200+ Resources */}
                I Built a VSCode Inspired Developer Portfolio
              </Title>
            </a>
          </Link>

          <Tags>
            <Link href="/t/javacript">
              <a>
                <span>#</span>javascript
              </a>
            </Link>
            <Link href="/tag">
              <a>
                <span>#</span>css
              </a>
            </Link>
            <Link href="/tag">
              <a>
                <span>#</span>lagos
              </a>
            </Link>
            <Link href="/tag">
              <a>
                <span>#</span>coder
              </a>
            </Link>
          </Tags>

          <ActionsHolder>
            <ReactionsAndComments>
              <Reactions onClick={likeHandler}>
                <Heart size={21} strokeWidth={2} />
                <p>345 reactions</p>
              </Reactions>

              <Reactions onClick={commentHandler}>
                <MessageSquare size={21} strokeWidth={2} />
                <p>3 comments</p>
              </Reactions>
            </ReactionsAndComments>

            <Save onClick={saveHandler}>Save</Save>
          </ActionsHolder>
        </Contents>
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 -1px 0 0 rgb(8 9 10 / 10%), 0 -1px 0 0 rgb(8 9 10 / 10%);
`;

const ImageBanner = styled.div``;

const CardContainer = styled.div`
  background: ${color.white};
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 0 0 1px rgb(8 9 10 / 10%);
  margin-bottom: 0.5em;
  padding: 1em;
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const ArthurHolder = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Image = styled.img`
  border-radius: 100%;
  border: 1px solid ${color.light};
  margin-right: ${imageMargin}px;
`;

const ArthurDetails = styled.div`
  p {
    margin: 0;
    font-size: 0.9em;
    font-weight: 500;
    color: #4d5760;
  }
  span {
    font-size: 0.75em;
    margin: 0;
    color: #64707d;
    display: block;
  }
`;

const Contents = styled.div`
  padding-left: calc(${imageSize + imageMargin}px);
`;

const Title = styled.h2`
  margin: 0;
  :hover {
    color: ${color.primary};
  }
`;

const Tags = styled.div`
  margin: 5px 0;
  color: #64707d;
  font-size: 0.8em;
  display: flex;
  width: 35%;
  justify-content: space-between;
  a {
    padding: 0.25em;
    :hover {
      color: ${color.black};
    }
    span {
      opacity: 0.4;
    }
  }
`;

const ActionsHolder = styled.div`
  display: flex;
  flex-flow: row wrap;
  color: #74797e;
  margin: 0.6em 0;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 0;
    margin-left: 5px;
    display: inline;
  }
`;

const ReactionsAndComments = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`;

const Save = styled.button`
  border: none;
  padding: 0.7em 1em;
  background: #d2d6db;
  border-radius: 5px;
  color: #363d44;
  font-size: 0.9em;
  cursor: pointer;
  outline: none;
  box-shadow: 0 1px 3px #0000000d;
  :hover {
    color: #08090a;
    box-shadow: 0 2px 5px #0000000d;
    background: #b5bdc4;
  }
`;

const Reactions = styled.div`
  padding: 0.5em;
  border-radius: 5px;
  color: #08090a;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background: rgb(0 0 0 / 4%);
  }
`;
