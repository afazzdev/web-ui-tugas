import React from "react";

const CalendarLabel = props => {
  return (
    <>
      <div className="calendar-label-container">
        <div className="calendar-icon">
          <i class="fas fa-calendar-day"></i>
        </div>
        <div className="wrapper-calendar">
          <div className="calendar-label">Calendar</div>
          <div className="calendar-date">
            <span>{props.rightBarDate.date}</span>
            <span> {props.rightBarDate.month}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarLabel;
