import React from "react";
import "./profile.css";

function CreateAccount(props) {
  function checkUsername(e) {
    let value = e.target.value;
    props.checkUsername(value);
  }
  function checkPassword(e) {
    let value = e.target.value;
    props.checkPassword(value);
  }
  function checkEmail(e) {
    let value = e.target.value;
    props.checkEmail(value);
  }
  function changedInput(e) {
    let value = e.target.value;
    props.createAccount(value);
  }

  return (
    <div className="create_account_page">
      <h1 className="create_account_page_header">
        Create an account to save your payment information
      </h1>
      <div className="account_creation_block">
        <input
          className="account_creation_input"
          type="text"
          placeholder="username"
          onChange={e => checkUsername(e)}
          required
        />
        <input
          className="account_creation_input"
          type="text"
          placeholder="password"
          onChange={e => checkPassword(e)}
          required
        />
        <input
          className="account_creation_input"
          type="text"
          placeholder="email"
          onChange={e => checkEmail(e)}
          required
        />
        <button onClick={() => props.createAccount()}>Go!</button>
      </div>
      <h2 className="create_account_page_header">Already a member?</h2>
      <div className="account_creation_block">
        <input
          className="account_creation_input"
          type="text"
          placeholder="username"
          required
        />
        <input
          className="account_creation_input"
          type="text"
          placeholder="password"
          required
        />
      </div>
    </div>
  );
}

export default CreateAccount;
