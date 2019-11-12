import React from "react";
import Button from "../Button";

const ButtonGroup = props => {
  return (
    <div className="button-group">
      {props.buttonGroup &&
        props.buttonGroup.map((length, i) => (
          <Button
            key={i}
            name={length.name}
            onClick={props.onClick}
            buttonGroupStyle={length.isNonActive}
          >
            {length.name}
          </Button>
        ))}
    </div>
  );
};

export default ButtonGroup;
