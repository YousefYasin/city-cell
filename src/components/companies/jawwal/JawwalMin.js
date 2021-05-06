import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import translate from "../../../i18n/translate";
import { useHistory, Link } from "react-router-dom";
import SideBar from "../../homePage/SideBar";
import {
  getJawwalMin,
  addChargeJawwal,
  getChargeJawwal,
} from "../../../actions/companiesAction";
import JawwalCredit from "./JawwalCredit";
import SubNav from "./SubNav";

const JawwalMin = ({
  auth,
  jawwalMin,
  getJawwalMin,
  addChargeJawwal,
  loading,
  chargeJawwal,
  getChargeJawwal,
}) => {
  const history = useHistory().location.pathname;
  const [mobileNo, setMobileNo] = useState(
    history.split("/")[3].slice(3, 6) +
      "-" +
      history.split("/")[3].slice(6, 9) +
      "-" +
      history.split("/")[3].slice(9, 13)
  );
  var [amount, setAmount] = useState("");
  const [selected, setSelected] = useState("");
  const [jawwal3g, setJawwal3g] = useState("");
  const [credit, setCredit] = useState("");
  useEffect(() => {
    document.title = "Home /Min Jawwal";
    getJawwalMin(mobileNo);
    // getChargeJawwal();
    if (localStorage.jawwalMin) {
      setSelected(JSON.parse(localStorage.jawwalMin));
      setAmount((prev) => prev + parseInt(selected.price));
      // amount+=parseInt(selected.price)
    }
    if (localStorage.jawwal3g) {
      setJawwal3g(JSON.parse(localStorage.jawwal3g));
    }
    if (localStorage.JawwalCredit) {
      setCredit(JSON.parse(localStorage.JawwalCredit));
    }
  }, []);
  const onClickType3Min = (e) => {
    e.preventDefault();
  };
  const onTypeClick = (item) => {
    localStorage.jawwalMin = JSON.stringify(item);
    setSelected(item);
    // addChargeJawwal(item);
  };
  const onCreditRemove = () => {
    localStorage.removeItem("JawwalCredit");
    setCredit("");
  };
  const onJawwal3gRemove = () => {
    localStorage.removeItem("jawwal3g");
    setJawwal3g("");
  };
  const onJawwalMin = () => {
    localStorage.removeItem("jawwalMin");
    setSelected("");
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <SideBar />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-6">
          <div className="card card-home">
            <div className="card jawwal-back">
              <div className="m-3">
                <h1 className="jawwal-text m-4">{translate("jawwalMin")}</h1>
              </div>
            </div>
            <div className="mt-2">
              <div className=" card nav-layout">
                <div className="form-group row m-2">
                  <div className="col-sm-1"></div>

                  <label className="mt-3 col-sm-5 col-form-label mobile-semi">
                    {translate("jawwalOfferMin")}
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
          </div>
          <div className=" card position-relative">
            <div className="card m-4s fixed-top1 position-sticky mt-2">
              <div className=" row mt-1 fixed-topx">
                {credit !== "" && (
                  <div className="col-lg-4 col-md-4 col-sm-4 mt-4 ">
                    <div className="card outer-wrapper px-3">
                      <div className="frame1">
                        <img
                          alt="sssssssssss"
                          src={credit.url}
                          width="260px"
                          height="100px"
                        ></img>
                        <a className="close-btn" onClick={onCreditRemove}>
                          <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                        {/* {credit.price} */}
                      </div>
                    </div>
                  </div>
                )}
                {jawwal3g !== "" && (
                  <div className="col-lg-4 col-md-4 col-sm-4 mt-4">
                    <div className="card outer-wrapper ">
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
                        {/* {jawwal3g.des} */}
                      </div>
                    </div>
                  </div>
                )}
                {selected !== "" && (
                  <div className="col-lg-4 col-md-4 col-sm-4 mt-4 mb-4">
                    <div className="card outer-wrapper px-3">
                      <div className="frame1">
                        <img
                          alt="sssssssssss"
                          src={selected.url}
                          width="260px"
                          height="100px"
                        ></img>
                        <a className="close-btn" onClick={onJawwalMin}>
                          <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                        {/* {selected.des} */}
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
                      (credit.price ? parseInt(credit.price) : 0)}
                  </label>
                </div>
                <button
                  type="submit"
                  class=" col-sm-2 btn btn sign-but "
                  onClick={onClickType3Min}
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
              {loading === true ? (
                <img
                  src="https://res.cloudinary.com/dznido8dg/image/upload/v1620164059/Spinner-1s-200px_1_ha7jh9.svg"
                  width="500px"
                  height="500px"
                />
              ) : (
                jawwalMin.map((item) => (
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
                            alt="sssssssssss"
                            src={item.url}
                            // width="100px"
                            // height="50px"
                          ></img>

                          {/* {item && item.des} */}
                        </div>
                      </a>
                    </div>
                    <div className="card">
                      <div class="" id="headingOne">
                        <h5 class="mb-0">
                          <a
                            class="ink-main details"
                            style={{ fontWeight: "bolder" }}
                            data-toggle="collapse"
                            data-target={"#" + item.ID}
                            aria-expanded="true"
                            aria-controls={item.ID}
                          >
                            Details
                          </a>
                        </h5>
                      </div>

                      <div
                        id={item.ID}
                        class="collapse hidden"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div class="card-body">{item.des}</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  jawwalMin: state.companies.jawwalMin,
  chargeJawwal: state.companies.chargeJawwal,
  loading: state.companies.loading,
});

export default connect(mapStateToProps, {
  getJawwalMin,
  addChargeJawwal,
  getChargeJawwal,
})(JawwalMin);
