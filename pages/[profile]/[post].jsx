import React from "react";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";

export default function Post() {
  return (
    <>
      <Title title="Article title" />
      <Navbar />

      <h2>Article</h2>

      <p style={{ minHeight: "100vh" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero laudantium vel
        dicta inventore est minima aliquam, corporis voluptas, autem ducimus id.
        Laudantium sunt repellat assumenda! Dignissimos perspiciatis rem veritatis quam.
      </p>

      <div id="comments">
        <ol>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>
            Exercitationem corporis voluptatibus mollitia aperiam necessitatibus, libero
            officia dolor est!
          </li>
          <li>
            Natus amet non inventore porro, architecto officiis cumque beatae doloribus.
            Laborum, neque.
          </li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>
            Delectus vero ex minima possimus modi voluptatibus consectetur ipsum
            cupiditate quod tempora.
          </li>
          <li>Hic rem eum iure numquam in nam culpa beatae? Nesciunt.</li>
        </ol>
      </div>
    </>
  );
}
