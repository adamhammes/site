import React from "react";

import hair1 from "./hair1.jpg";
import hair2 from "./hair2.jpg";
import hair3 from "./hair3.jpg";
import hair4 from "./hair4.jpg";
import hair5 from "./hair5.jpg";
import hair6 from "./hair6.jpg";

const pics = [hair1, hair2, hair3, hair4, hair5, hair6];

const Haircuts = () => (
  <div>
    <ul
      style={{
        listStyleType: "none",
        padding: 0,
        margin: "0 auto",
        maxWidth: "30rem",
      }}
    >
      {pics.map((pic, index) => (
        <li>
          <h2 style={{ margin: "2rem 0" }}>Hair #{index + 1}</h2>
          <img
            src={pic}
            style={{ maxWidth: "100%", margin: "0 auto", display: "block" }}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default Haircuts;
