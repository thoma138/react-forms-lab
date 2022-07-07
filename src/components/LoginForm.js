import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    if (event.target.id === "username")
      this.setState({
        username: event.target.value,
      });
    else if (event.target.id === "password") {
      this.setState({
        password: event.target.value,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    if (username && password) {
      return this.props.handleLogin({ username, password });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              onChange={this.handleInputChange}
              value={this.state.username}
              id="username"
              name="username"
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={this.handleInputChange}
              value={this.state.password}
              id="password"
              name="password"
              type="password"
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
