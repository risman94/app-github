import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Search from "./components/Search";
import UserDetails from "./components/User";
import Repositori from "./components/Repositori";
import Followers from "./components/followers";
import Following from "./components/following";

const FourOFour = () => <h1> Eror 404, Not found... </h1>;

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/user/:username" component={UserDetails} />
      <Route path="/repositori/:username" component={Repositori} />
      <Route path="/followers/:username" component={Followers} />
      <Route path="/following/:username" component={Following} />
      <Route component={FourOFour} />
    </Switch>
  </Provider>
);

export default App;
