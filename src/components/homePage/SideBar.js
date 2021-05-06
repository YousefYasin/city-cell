import React from "react";
import { Link, useHistory } from "react-router-dom";
import translate from "../../i18n/translate";
import { connect } from "react-redux";

const SideBar = ({ user }) => {
  const history = useHistory().location.pathname;
  console.log(history);
  return (
    <div>
      <div className="card d100-vh">
        <div className="card card-bal m-3">
          <div className="m-3 text-center">
            <h6>
              <i
                className="icon-main fa fa-balance-scale m-1"
                aria-hidden="true"
              />
              {translate("balance")}
            </h6>
            <h4 className="main-text mt-3" style={{ fontWeight: "bolder" }}>
              {user.current_balance} {translate("nis")}
            </h4>
            <h6 className="mt-3">{user.sellername}</h6>
          </div>
        </div>
        <div className="mt-3">
          <div
            className={`sidebar__link ${
              history === "/" ||
              (history.split("/")[1] === "company" && "active-link")
            } m-4`}
          >
            <Link className=" link-main " to="/">
              <span>
                <i className="icon-main fa fa-home m-2"></i>
                {translate("home")}
              </span>
            </Link>
          </div>

          <div
            className={`sidebar__link ${
              history === "/gaming" && "active-link"
            } m-4`}
          >
            <Link className="link-main " to="/gaming">
              <span>
                <i
                  className="icon-main fa fa-gamepad  m-2"
                  aria-hidden="true"
                ></i>
                {translate("gaming")}
              </span>
            </Link>
          </div>
          <div
            className={`sidebar__link ${
              history === "/cards" && "active-link"
            } m-4`}
          >
            <Link className="link-main " to="/cards">
              <span>
                <i
                  className="icon-main fa fa-credit-card  m-2"
                  aria-hidden="true"
                ></i>
                {translate("cards")}
              </span>
            </Link>
          </div>
          <div
            className={`sidebar__link ${
              history === "/points" && "active-link"
            } m-4`}
          >
            <Link className="link-main " to="/points">
              <span>
                <i
                  className="icon-main fa fa-hand-pointer  m-2"
                  aria-hidden="true"
                ></i>
                {translate("points")}
              </span>
            </Link>
          </div>

          <div
            className={`sidebar__link ${
              history === "/messages" && "active-link"
            } m-4`}
          >
            <Link className="link-main " to="/messages">
              <span>
                <i
                  className="icon-main fa fa-comments  m-2"
                  aria-hidden="true"
                ></i>
                {translate("messages")}
              </span>
            </Link>
          </div>
          <div
            className={`sidebar__link ${
              history === "/report" && "active-link"
            } m-4`}
          >
            <Link className="link-main " to="/report">
              <span>
                <i className="icon-main fa fa-file m-2" aria-hidden="true"></i>
                {translate("Report")}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, {})(SideBar);
