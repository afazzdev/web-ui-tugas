import React from "react";

const Button = props => {
  return (
    <button
      style={props.style}
      name={props.name || props.name}
      onClick={props.onClick}
      className={`button ${
        props.singelButtonStyle === "primary" ||
        props.buttonGroupStyle === "primary"
          ? "primary"
          : props.singelButtonStyle === "inactive" ||
            props.buttonGroupStyle === "inactive"
          ? "inactive"
          : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
