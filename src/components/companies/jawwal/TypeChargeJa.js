import { useEffect, useState } from "react";
import translate from "../../../i18n/translate";
import { useHistory } from "react-router-dom";
import SideBar from "../../homePage/SideBar";
const TypeChargeJa = (id) => {
  const history = useHistory().location.pathname;
  useEffect(() => {
    document.title = "Home /Jawwal ";
    console.log(history.split("/")[2], "history");
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <SideBar />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-6">
          <div className="card card-home">
            <div className="card img-back">
              <div className="m-3">
                <h1 className="header-text mt-5">{translate("newProduct")}</h1>
              </div>
            </div>
            <div className="mt-2">
              <div className=" card nav-layout">
                <h5 className="m-3" style={{ fontWieght: "bolder" }}>
                  {translate("jawwal")}
                </h5>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className=" card jawwal-layout">
              <div className="form-group row m-2">
              <div className="col-sm-1"></div>
                <label for="inputEmail3" className="col-sm-3 col-form-label">
                  {translate("jawwalNo")}
                </label>
                <label for="inputEmail3" className="col-sm-3 col-form-label mobile-no" >
                  {history.split("/")[2]}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeChargeJa;
