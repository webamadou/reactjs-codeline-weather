import React, { Component } from "react";

class Search extends Component {
  state = {
    query: this.props.match.params
  };
  constructor() {
    super();
    console.log(this, "params de moi");
  }

  render() {
    return <h1>here</h1>;
  }
}

export default Search;
