import React from "react";
import { Link, useHistory } from "react-router-dom";

const SideBar = () => {
  const history = useHistory().location.pathname;
  return (
    <div>
      <div className="card">
        <div className="card card-bal m-3">
          <div className="m-3 text-center">
            <h6 style={{ fontWeight: "700" }}>
              <i
                className="icon-main fa fa-balance-scale m-1"
                aria-hidden="true"
              />
              Balance Avaliable
            </h6>
            <h4 className="main-text mt-3" style={{ fontWeight: "bolder" }}>
              245,563 NIS
            </h4>
          </div>
        </div>
        <div className="mt-3">
          <div
            className={`sidebar__link ${history === "/" && "active-link"} m-4`}
          >
            <Link className=" link-main " to="/">
              <span>
                <i className="icon-main fa fa-home m-2"></i>
                Home
              </span>
            </Link>
          </div>
          <div className="sidebar__link m-4 ">
            <Link className=" link-main" to="/">
              <span>
                <i className="icon-main fa fa-phone m-2" aria-hidden="true"></i>
                Telecommunications
              </span>
            </Link>
          </div>
          <div className="sidebar__link m-4 ">
            <Link className="link-main " to="/">
              <span>
                <i
                  className="icon-main fa fa-gamepad  m-2"
                  aria-hidden="true"
                ></i>
                Gaming
              </span>
            </Link>
          </div>
          <div className="sidebar__link m-4 ">
            <Link className="link-main " to="/">
              <span>
                <i
                  className="icon-main fa fa-credit-card  m-2"
                  aria-hidden="true"
                ></i>
                Electornic Cards
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
                Report
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
