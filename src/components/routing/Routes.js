import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Cards from "../cards/Cards";
import InputNoPage from "../companies/jawwal/InputNoPage";
import Jawwal3g from "../companies/jawwal/Jawwal3g";
import JawwalCredit from "../companies/jawwal/JawwalCredit";
import JawwalMin from "../companies/jawwal/JawwalMin";
import TypeChargeJa from "../companies/jawwal/TypeChargeJa";
import Gaming from "../Gaming/Gaming";
import Report from "../report/Report";

const Routes = () => {
  return (
    <section className="container-fluid">
      <Switch>
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/gaming" component={Gaming} />
        <Route exact path="/cards" component={Cards} />
        <Route exact path="/jawwalNo" component={InputNoPage} />
        <Route exact path="/jawwal/:id" component={TypeChargeJa} />
        <Route exact path="/jawwal3g/:id" component={Jawwal3g} />
        <Route exact path="/jawwalMin/:id" component={JawwalMin} />
        <Route exact path="/jawwalCredit/:id" component={JawwalCredit} />
      </Switch>
    </section>
  );
};

export default Routes;
