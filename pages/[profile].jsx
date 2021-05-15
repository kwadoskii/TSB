import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function profile() {
  const {
    query: { profile },
  } = useRouter();

  return (
    <>
      <Container>{profile}</Container>
    </>
  );
}

const Container = styled.div``;
