import React from "react";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

const TitleSection = props => {
  return (
    <div className="title-section">
      <div className="for-title">
        {props.title && <h2 className="title">{props.title}</h2>}
        <span>
          {props.button && (
            <Button
              singelButtonStyle={props.singelButtonStyle}
              name={props.button.name}
              onClick={props.onClick}
            >
              {props.button.text}
            </Button>
          )}
        </span>
      </div>
      <div className="for-button">
        {props.buttonGroup && (
          <ButtonGroup
            buttonGroup={props.buttonGroup}
            buttonGroupStyle={props.buttonGroupStyle}
            onClick={props.onClick}
          >
            {"for ButtonGroup"}
          </ButtonGroup>
        )}
      </div>
    </div>
  );
};

export default TitleSection;
