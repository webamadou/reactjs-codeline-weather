import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, NavLink, Redirect } from "react-router-dom";
import Routers from "./routers";

class NavBar extends Component {
  state = {
    query: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    <Redirect to={`/search/${this.state.query}`} />;
  };
  handleChange = e => {
    const query = e.target.value;
    this.setState({ query });
    console.log("this is changing", e.target.value);
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <ul className="navbar-nav">
            <BrowserRouter>
              <li>
                <NavLink to="/" className="nav-item" activeClassName="active">
                  Home
                </NavLink>
              </li>
            </BrowserRouter>
          </ul>
          <form
            method="get"
            action={`/search/${this.state.query}`}
            className="form-inline"
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              onChange={this.handleChange}
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
        <Routers />
      </React.Fragment>
    );
  }
}

export default NavBar;
