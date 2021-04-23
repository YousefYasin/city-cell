import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";
import "./nav.css";
const Navbar = () => {
  const [selected, setSelected] = useState("PS");
  useEffect(() => {
    if (localStorage.langCity === "en") {
      setSelected("US");
    } else if (localStorage.langCity === "is") {
      setSelected("IL");
    }
  }, []);
  const onSelectLang = (code) => {
    console.log("code", code);
    if (code === "US") {
      localStorage.langCity = "en";
    } else if (code === "PS") {
      localStorage.langCity = "ar";
    } else {
      localStorage.langCity = "is";
    }
    window.location.reload();
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "#25ace3" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <strong>

          City-Ce<font color="#fff">ll</font>
          </strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/signUp">
                {translate("signUp")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Login">
                {translate("login")}
              </Link>
            </li>
          </ul>
          <ReactFlagsSelect
            countries={["PS", "US", "IL"]}
            selected={selected}
            customLabels={{ US: "EN-US", PS: "AR-PS", IL: "IL-ISR" }}
            onSelect={(code) => onSelectLang(code)}
            // showSelectedLabel={false}
            showLabal={true}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
