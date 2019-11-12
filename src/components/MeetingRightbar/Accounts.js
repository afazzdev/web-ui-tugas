import React from "react";
import Button from "../Button";

const Accounts = () => {
  return (
    <>
      <div className="account-container">
        <span className="account-label">Accounts</span>
        <ul className="account-lists">
          <li className="account-list">adrian.madacs@gmail.com</li>
          <li className="account-list">ama@umwelt.dk</li>
        </ul>
        <Button
          style={{
            border: "2px solid skyblue",
            color: "skyblue",
            marginTop: "1rem",
            marginLeft: "-1rem"
          }}
        >
          + Add account
        </Button>
      </div>
    </>
  );
};

export default Accounts;
