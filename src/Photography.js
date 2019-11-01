import React from "react";
import Tilt from "react-tilt";

const Photography = ({ photo }) => {
  return (
    <Tilt className="hover" options={{ max: 25 }}>
      <img loading="lazy" alt={photo.title} src={photo.image} />
    </Tilt>
  );
};

export default Photography;
