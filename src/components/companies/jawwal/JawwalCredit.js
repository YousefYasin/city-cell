import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import translate from "../../../i18n/translate";
import { useHistory, Link } from "react-router-dom";
import SideBar from "../../homePage/SideBar";
import { getJawwalCredit } from "../../../actions/companiesAction";
import "./jawwal.css";
import credit from "./credit";
import SubNav from "./SubNav";

const JawwalCredit = ({ getJawwalCredit, auth, jawwalCreadit, loading }) => {
  const history = useHistory().location.pathname;
  const [mobileNo, setMobileNo] = useState(
    history.split("/")[3].slice(3, 6) +
      "-" +
      history.split("/")[3].slice(6, 9) +
      "-" +
      history.split("/")[3].slice(9, 13)
  );
  const [amount, setAmount] = useState("");
  const [selected, setSelected] = useState("");
  const [jawwal3g, setJawwal3g] = useState("");
  const [jawwalMin, setJawwalMin] = useState("");
  useEffect(() => {
    document.title = "Home /Credit Jawwal";
    // console.log(auth, jawwalCreadit);
    if (localStorage.jawwalMin) {
      setJawwalMin(JSON.parse(localStorage.jawwalMin));
    }
    if (localStorage.jawwal3g) {
      setJawwal3g(JSON.parse(localStorage.jawwal3g));
    }
    if (localStorage.JawwalCredit) {
      setSelected(JSON.parse(localStorage.JawwalCredit));
    }
  }, []);
  const onClickTypeCredit = (e) => {
    e.preventDefault();

    // TODOOOO
  };
  const onTypeClick = (item) => {
    localStorage.JawwalCredit = JSON.stringify(item);
    setSelected(item);
    // addChargeJawwal(item);
  };
  const onCreditRemove = () => {
    localStorage.removeItem("JawwalCredit");
    setSelected("");
  };
  const onJawwal3gRemove = () => {
    localStorage.removeItem("jawwal3g");
    setJawwal3g("");
  };
  const onJawwalMin = () => {
    localStorage.removeItem("jawwalMin");
    setJawwalMin("");
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <SideBar />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-6">
          <div className="">
            <div className="card jawwal-back">
              <div className="m-3">
                <h1 className="jawwal-text m-4">{translate("jawwalCredit")}</h1>
              </div>
            </div>
            <div className="mt-2">
              <div className=" card jawwal-layout">
                <div className="form-group row m-2">
                  <div className="col-sm-1"></div>

                  <label
                    className="mt-2 col-sm-6 col-form-label mobile-semi"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {translate("jawwalOfferCredit")}
                  </label>
                  <label
                    className=" mt-2s col-sm-4 col-form-label mobile-semi"
                    style={{ fontFamily: "initial", fontSize: "2rem" }}
                  >
                    {mobileNo}
                  </label>
                </div>
              </div>
              <SubNav mobile={history.split("/")[3]} />
            </div>
            <div className=" card position-relative">
              <div className="card m-4s fixed-top1 position-sticky mt-2">
                <div className=" row mt-1 fixed-topx">
                  {selected !== "" && (
                    <div className="col-lg-4 col-md-4 col-sm-4 mt-4">
                      <div className="card outer-wrapper  px-3">
                        <div className="frame1">
                          <img
                            alt="sssssssssss"
                            src={selected.url}
                            width="260px"
                            height="100px"
                          ></img>
                          <a className="close-btn" onClick={onCreditRemove}>
                            <i class="fa fa-times" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  {jawwalMin !== "" && (
                    <div className="col-lg-4 col-md-4 col-sm-4 mt-4">
                      <div className="card outer-wrapper  px-3">
                        <div className="frame1">
                          <img
                            alt="sssssssssss"
                            src={jawwalMin.url}
                            width="260px"
                            height="100px"
                          ></img>
                          <a className="close-btn" onClick={onJawwalMin}>
                            <i class="fa fa-times" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  {jawwal3g !== "" && (
                    <div className="col-lg-4 col-md-4 col-sm-4 mt-4">
                      <div className="card outer-wrapper  px-3">
                        <div className="frame1">
                          <img
                            alt="sssssssssss"
                            src={jawwal3g.url}
                            width="260px"
                            height="100px"
                          ></img>
                          <a className="close-btn">
                            <i
                              class="fa fa-times"
                              aria-hidden="true"
                              onClick={onJawwal3gRemove}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <form class="form-inline mt-5">
                <div class="form-group row d-flex justify-content-center">
                  <label
                    for="colFormLabelLg"
                    class="col-sm-2 col-form-label col-form-label-lg"
                  >
                    {translate("total")}
                  </label>
                  <div class="col-sm-4 text-center text-bold">
                    <label class=" form-control-lg">
                      {(selected.price ? parseInt(selected.price) : 0) +
                        (jawwal3g.price ? parseInt(jawwal3g.price) : 0) +
                        (jawwalMin.price ? parseInt(jawwalMin.price) : 0)}
                    </label>
                  </div>
                  <button
                    type="submit"
                    class=" col-sm-2 btn btn sign-but "
                    onClick={onClickTypeCredit}
                  >
                    {translate("accept")}
                  </button>
                </div>
              </form>
              <hr
                className="mt-5"
                style={{ border: "2px solid #000", fontWeight: "bolder" }}
              />
              <div className="row mt-5">
                {credit.map((item) => (
                  <div className="col-lg-3 col-md-4 col-sm-4 mt-4 disable">
                    <div className="card outer-wrapper charge-card">
                      <a
                        style={{ cursor: "pointer" }}
                        data-placement="top"
                        title={item && item.des}
                        onClick={() => onTypeClick(item)}
                      >
                        <div className="frame">
                          <img
                            src={item.url}
                            // width="100px"
                            // height="50px"
                          ></img>
                          {item && item.des}
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  jawwalCreadit: state.companies.jawwalCreadit,
  loading: state.companies.loading,
});

export default connect(mapStateToProps, { getJawwalCredit })(JawwalCredit);
