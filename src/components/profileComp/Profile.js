import React, { Component } from "react";
import ProfileBody from "./ProfileBody";
import Settings from "./Settings";
import "./profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile">
        <div className="settings_body">
          <Settings />
        </div>
        <div className="profile_body">
          <ProfileBody />
        </div>
      </div>
    );
  }
}
