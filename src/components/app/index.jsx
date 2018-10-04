import React, { Component } from "react";
import "whatwg-fetch";
import Routes from "../routers";
import NavBar from "../navbar";

class App extends Component {
  state = {
    status: ""
  };
  render() {
    return (
      <div>
        <NavBar searching={this.handleSearch} status={this.state.status} />
        <div className="container-fluid" style={{ marginTop: 60 }}>
          <Routes />
        </div>
      </div>
    );
  }
}
export default App;
