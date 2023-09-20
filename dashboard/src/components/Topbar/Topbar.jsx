import React from "react";
import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dekmakadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.fbey14-1.fna.fbcdn.net/v/t1.6435-9/156106145_10218813073866153_7505813958766747149_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=k4TuBOV_zl4AX_2xcZo&_nc_ht=scontent.fbey14-1.fna&oh=00_AfC8JN4FAyMAcgY9xAydPjZrwzqSzyw903KW7bny-2gKkQ&oe=64F2EDB8" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}