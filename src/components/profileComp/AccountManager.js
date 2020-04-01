import React, { Component } from "react";
import Profile from "./Profile";
import CreateAccount from "./CreateAccount";

export default class AccountManager extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      username: "",
      email: "",
      profileStated: false
    };
    this.checkUsername = this.checkUsername.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("USERNAME") && localStorage.getItem("PASSWORD")) {
      this.setState({ profileStated: true });
    }
  }

  checkUsername(e) {
    this.setState({ username: e });
    console.log("username:" + e);
  }

  checkPassword(e) {
    this.setState({ password: e });
    console.log("password:" + e);
  }

  checkEmail(e) {
    this.setState({ email: e });
    console.log("email:" + e);
  }

  createAccount(t) {
    const { username } = this.state;
    const { password } = this.state;
    const { email } = this.state;
    if (username.length > 3 && password.length > 10 && email.length > 2) {
      this.setState({ profileStated: true });
      localStorage.setItem("USERNAME", username);
      localStorage.setItem("PASSWORD", password);
    } else {
      console.log("too short");
    }
  }

  signOut() {
    this.setState({ profileStated: false });
  }

  render() {
    const { profileStated } = this.state;
    if (profileStated === true) {
      return (
        <div>
          <Profile signOut={this.signOut} />
        </div>
      );
    } else {
      return (
        <div>
          <CreateAccount
            checkUsername={this.checkUsername}
            checkPassword={this.checkPassword}
            checkEmail={this.checkEmail}
            createAccount={this.createAccount}
          />
        </div>
      );
    }
  }
}
