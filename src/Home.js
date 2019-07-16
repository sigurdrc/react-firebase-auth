import React, { Component } from "react";
import fire from "./config/Fire";

class Home extends Component {
  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h1>Home, you are logged in!</h1>
        <img
          src="https://media0.giphy.com/media/9SgOeNxFAh8Hu/giphy.gif"
          alt=""
          style={{ maxWidth: "100%", marginBottom: "1rem" }}
        />
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
