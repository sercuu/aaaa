import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/home";

export default (
  <Switch>
    <Route path="/" component={Home} exact />
  </Switch>
);
