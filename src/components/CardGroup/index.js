import React from "react";

const CardGroup = ({ props, children, todaysDate }) => {
  return (
    <div className="cardGroup-container">
      {todaysDate && (
        <div className="cardGroup-date">
          <span>
            {todaysDate.zero && todaysDate.zero}
            {todaysDate.today && todaysDate.today}
          </span>
          <span>{todaysDate.nth}</span>
          <span> {todaysDate.day}</span>
          <hr />
        </div>
      )}
      {children}
    </div>
  );
};

export default CardGroup;
