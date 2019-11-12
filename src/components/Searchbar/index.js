import React from "react";
import Topbar from "../Topbar";

const Searchbar = () => {
  return (
    <Topbar>
      <div className="input-group">
        <i
          class="fas fa-search"
          style={{
            placeSelf: "center flex-end",
            marginRight: "1rem",
            color: "#989898"
          }}
        ></i>
        <input
          type="text"
          placeholder="Find a user, team, meeting?"
          className="input-search"
        />
      </div>
      <div className="input-group">
        <button className="input-button-outline">
          <i class="fas fa-paper-plane" style={{ color: "skyblue" }}></i> Invite
        </button>
        <div className="avatar"></div>
      </div>
    </Topbar>
  );
};

export default Searchbar;
