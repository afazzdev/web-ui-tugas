import React, { useState, useContext } from "react";
import MeetingsContent from "../../components/Meetings/Meetings";

import { MeetingsContext } from "../../context/MeetingsContext";

const Meetings = () => {
  const [state, addState] = useContext(MeetingsContext);

  const [schedule] = useState(state);

  const [title] = useState("Meetings");
  const [button] = useState({ name: "addNew", text: "+ Create new" });
  const [buttonGroup, changeButtonGroup] = useState([
    { name: "Days", isNonActive: "" },
    { name: "Weeks", isNonActive: "inactive" },
    { name: "Months", isNonActive: "inactive" }
  ]);

  const date = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const nth = () => {
    if (
      date.getDate() === 1 ||
      date.getDate() === 21 ||
      date.getDate() === 31
    ) {
      return "st";
    } else if (date.getDate() === 2 || date.getDate() === 22) {
      return "nd";
    } else if (date.getDate() === 3 || date.getDate() === 23) {
      return "rd";
    } else {
      return "th";
    }
  };

  const rightBarDate = {
    date: `${
      date.getDate().toString().length === 1 ? "0" : ""
    }${date.getDate()}`,
    month: months[date.getMonth()]
  };

  const todaysDate = {
    zero: date.getDate().toString().length === 1 ? "0" : "",
    today: date.getDate(),
    nth: nth(),
    day: days[date.getDay()]
  };

  const contextDate = () => {
    const first = days[date.getDay()];
    const second = date.getDate();
    const last = date.getFullYear();
    return `${first}${second}${last}`;
  };
  const [test, addTest] = React.useState(1);
  const handleClick = e => {
    switch (e.target.name) {
      case "addNew":
        return (
          addTest(test + 1),
          addState({
            type: "ADD_SCHEDULE",
            forDate: contextDate(),
            forMeetings: "today",
            zero: date.getDate().toString().length === 1 ? "0" : "",
            today: date.getDate(),
            nth: nth(),
            day: days[date.getDay()]
          })
        );
      case "Days":
        return changeButtonGroup([
          {
            name: "Days",
            isNonActive: ""
          },
          {
            name: "Weeks",
            isNonActive: "inactive"
          },
          {
            name: "Months",
            isNonActive: "inactive"
          }
        ]);
      case "Weeks":
        return changeButtonGroup([
          {
            name: "Days",
            isNonActive: "inactive"
          },
          {
            name: "Weeks",
            isNonActive: ""
          },
          {
            name: "Months",
            isNonActive: "inactive"
          }
        ]);
      case "Months":
        return changeButtonGroup([
          {
            name: "Days",
            isNonActive: "inactive"
          },
          {
            name: "Weeks",
            isNonActive: "inactive"
          },
          {
            name: "Months",
            isNonActive: ""
          }
        ]);
      default:
        return true;
    }
  };

  return (
    <>
      {console.log("state", state)}
      {console.log(test)}
      {/* {console.log(contextDate())} */}
      <MeetingsContent
        title={title}
        button={button}
        onClick={handleClick}
        singelButtonStyle="primary"
        buttonGroup={buttonGroup}
        // buttonGroupStyle={buttonGroup.map(a =>
        //   a.isNonActive ? "inactive" : ""
        // )}
        todaysDate={todaysDate}
        rightBarDate={rightBarDate}
        schedule={state.schedule}
      />
    </>
  );
};

export default Meetings;
