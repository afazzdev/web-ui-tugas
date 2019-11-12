import React from "react";

const Card = props => {
  return (
    <div
      className={`card-container ${
        props.cardContainerActive ? "card-container-active" : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Card;
