import React from "react";
import WithNav from "../Navbar/withNav";
import Searchbar from "../Searchbar";
import Rightbar from "../Rightbar";
import ContentSection from "../Contentsection";
import TitleSection from "../Titlesection";
import Calendar from "../Calendar";
import CalendarLabel from "../MeetingRightbar/CalendarLabel";
import Accounts from "../MeetingRightbar/Accounts";

const Meetings = ({
  title,
  button,
  primary,
  buttonGroup,
  todaysDate,
  schedule,
  singelButtonStyle,
  buttonGroupStyle,
  onClick,
  rightBarDate
}) => {
  return (
    <>
      <Searchbar />
      <div className="meetings-container">
        <TitleSection
          title={title}
          button={button}
          primary={primary}
          buttonGroup={buttonGroup}
          singelButtonStyle={singelButtonStyle}
          buttonGroupStyle={buttonGroupStyle}
          onClick={onClick}
        />
        <ContentSection todaysDate={todaysDate} schedule={schedule} />
      </div>
      <Rightbar>
        <CalendarLabel rightBarDate={rightBarDate} />
        <Calendar />
        <Accounts />
      </Rightbar>
    </>
  );
};

export default WithNav(Meetings);
