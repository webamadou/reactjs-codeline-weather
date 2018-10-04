import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    cityName: ""
  };
  handleSearch = e => {
    const cityName = e.target.value;
    console.log(cityName);
    this.setState({ cityName });
  };
  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
          Weather App
        </Link>
        <form
          onSubmit={this.handleSearchSubmit}
          action={`/city/${this.state.cityName}`}
          className="form-inline my-2 col-sm-9"
        >
          <input
            className="form-control col-sm-11"
            type="text"
            placeholder="Enter the name of a city"
            onChange={this.handleSearch}
            value={this.state.cityName}
          />
          <button type="submit" className="btn btn-outline-warning col-sm-1">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
