import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Report from "../report/Report";

const Routes = (props) => {
  return (
    <section className="container-fluid">
      <Switch>
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/report" component={Report} />
      </Switch>
    </section>
  );
};

export default Routes;
