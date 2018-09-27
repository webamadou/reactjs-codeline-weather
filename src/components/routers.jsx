import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./frontPage";
import City from "./city";
import Search from "./search";

class Routers extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/city/:woeid" component={City} />
          <Route path="/search/:city" component={Search} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routers;
