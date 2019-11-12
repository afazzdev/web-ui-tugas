import React from "react";
import Calendar from "react-calendar";

const Calendars = () => {
  const [date, changeDate] = React.useState({ date: new Date() });

  return (
    <Calendar
      onChange={date => changeDate({ date })}
      //   onClickDay={() => alert("click")}
      value={date.date}
    />
  );
};

export default Calendars;
