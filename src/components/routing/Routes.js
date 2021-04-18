import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";

const Routes = (props) => {
  return (
    <section className="container-fluid">
      <Switch>
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </section>
  );
};

export default Routes;
