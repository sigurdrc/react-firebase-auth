import React, { Component } from "react";
import fire from "./config/Fire";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log("login", error);
      });
  };

  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log("signup", error);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
            />
            <small>We'll never share your email</small>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit" onClick={this.login}>
              Login
            </button>
            <button onClick={this.signup}>Signup</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
