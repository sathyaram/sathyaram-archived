import React from "react";
import Tilt from "react-tilt";

const Graphic = ({ graphic }) => {
  return (
    <Tilt className="hover" options={{ max: 25 }}>
      <img loading="lazy" alt={graphic.title} src={graphic.image} />
    </Tilt>
  );
};

export default Graphic;
