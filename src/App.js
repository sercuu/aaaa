import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";

import { Provider } from "react-redux";

import store, { history } from "./store";
import routes from "./route";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
