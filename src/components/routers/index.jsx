import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Cities from "../../containers/cities";
import City from "../../containers/city";

class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Cities} />
        <Route path="/city/:name" exact component={City} />
      </Switch>
    );
  }
}

export default Routers;
