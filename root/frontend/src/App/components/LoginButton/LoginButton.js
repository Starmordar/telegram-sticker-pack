import React from "react";
import "./LoginButton.css";

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        href="tg://resolve?domain=testSamples_bot"
        className="btn btn-danger login-btn"
        style={{ padding: "13px 40px", fontSize: this.props.font }}
      >
        Login with Telegram
      </a>
    );
  }
}

export default LoginButton;
