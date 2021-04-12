import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "../auth/SignUp";

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
    </section>
  );
};

export default Routes;
