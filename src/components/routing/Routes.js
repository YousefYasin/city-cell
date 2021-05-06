import React from "react";
import { connect } from "react-redux";
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
import PrivateRoute from "./../common/PrivateRoute";
const Routes = ({ user }) => {
  return (
    <section className="container-fluid1">
      <Switch>
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/gaming" component={Gaming} />
        <Route exact path="/cards" component={Cards} />
        {/* //COPMANY */}
        {/* JAWWAL COMPANY ROUTES */}
        <PrivateRoute
          exact
          path="/company/jawwal/:id"
          component={TypeChargeJa}
        />
        <PrivateRoute exact path="/company/jawwalNo" component={InputNoPage} />

        <div>
          <PrivateRoute
            exact
            path="/company/jawwal3g/:id"
            component={Jawwal3g}
          />
          <PrivateRoute
            exact
            path="/company/jawwalMin/:id"
            component={JawwalMin}
          />
          <PrivateRoute
            exact
            path="/company/jawwalCredit/:id"
            component={JawwalCredit}
          />
        </div>
      </Switch>
    </section>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, {})(Routes);
