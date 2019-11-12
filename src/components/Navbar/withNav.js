import React from "react";
import Sidebar from "../Sidebar";

const WithNav = OldComponent =>
  class NewComponent extends React.Component {
    render() {
      return (
        <>
          <Sidebar />
          <div className="withNav">
            <OldComponent {...this.props} />
          </div>
        </>
      );
    }
  };

export default WithNav;
