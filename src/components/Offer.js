import React from "react";

const Offer = ({ id, src, link, index }) => {
  return (
    <a href={link}>
      <img src={src} key={id} alt={`${index} offer`} />
    </a>
  );
};

export default Offer;
