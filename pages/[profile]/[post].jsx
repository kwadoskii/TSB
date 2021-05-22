import React from "react";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";

export default function Post() {
  return (
    <>
      <Title title="Article title" />
      <Navbar />

      <h2>Article</h2>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero laudantium vel
        dicta inventore est minima aliquam, corporis voluptas, autem ducimus id.
        Laudantium sunt repellat assumenda! Dignissimos perspiciatis rem veritatis quam.
      </p>
    </>
  );
}
