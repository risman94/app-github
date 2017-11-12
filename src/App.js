import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import UserDetails from "./components/User";

const FourOFour = () => <h1> Eror 404, Not found... </h1>;

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/:username" component={UserDetails} />
      <Route component={FourOFour} />
    </Switch>
  </Provider>
);

export default App;
