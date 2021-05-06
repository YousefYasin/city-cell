import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import translate from "../../../i18n/translate";
import { useHistory, Link } from "react-router-dom";
import SideBar from "../../homePage/SideBar";
import SubNav from "./SubNav";
import { getJawwal3g } from "../../../actions/companiesAction";

const Jawwal3g = ({ getJawwal3g, auth, jawwal3g, loading }) => {
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
  const [jawwalMin, setJawwalMin] = useState("");
  const [credit, setCredit] = useState("");
  useEffect(() => {
    getJawwal3g(mobileNo);
    document.title = "Home /3G Jawwal";
    // console.log(jawwal3g, auth);
    if (localStorage.jawwal3g) {
      setSelected(JSON.parse(localStorage.jawwal3g));
    }
    if (localStorage.jawwalMin) {
      setJawwalMin(JSON.parse(localStorage.jawwalMin));
    }
    if (localStorage.JawwalCredit) {
      setCredit(JSON.parse(localStorage.JawwalCredit));
    }
  }, []);
  const onClickType3g = (e) => {
    e.preventDefault();

    // TODOOOO
  };
  const onTypeClick = (item) => {
    localStorage.jawwal3g = JSON.stringify(item);
    setSelected(item);
  };
  const onCreditRemove = () => {
    localStorage.removeItem("JawwalCredit");
    setCredit("");
  };
  const onJawwal3gRemove = () => {
    localStorage.removeItem("jawwal3g");
    setSelected("");
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
          <div className="card card-home">
            <div className="card jawwal-back">
              <div className="m-3">
                <h1 className="jawwal-text m-4">{translate("jawwal3g")}</h1>
              </div>
            </div>
            <div className="mt-2">
              <div className=" card nav-layout">
                <div className="form-group row m-2">
                  <div className="col-sm-1"></div>

                  <label className="mt-3 col-sm-4 col-form-label mobile-semi">
                    {translate("jawwalOffer3g")}
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
                {selected !== "" && (
                  <div className="col-lg-4 col-md-4 col-sm-4 mt-4">
                    <div className="card outer-wrapper px-3 ">
                      <div className="frame1">
                        <img
                          alt="sssssssssss"
                          src={selected.url}
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
                {credit !== "" && (
                  <div className="col-lg-4 col-md-4 col-sm-4 mt-4">
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
                      </div>
                    </div>
                  </div>
                )}
                {jawwalMin !== "" && (
                  <div className="col-lg-4 col-md-4 col-sm-4 mt-4">
                    <div className="card outer-wrapper px-3 ">
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
                      (credit.price ? parseInt(credit.price) : 0) +
                      (jawwalMin.price ? parseInt(jawwalMin.price) : 0)}
                  </label>
                </div>
                <button
                  type="submit"
                  class=" col-sm-2 btn btn sign-but "
                  onClick={onClickType3g}
                >
                  {translate("accept")}
                </button>
              </div>
            </form>
            <hr
              className="mt-5"
              style={{ border: "2px solid #000", fontWeight: "bolder" }}
            />
            <div className="card">
              <div className="row">
                {loading === true ? (
                  <img
                    src="https://res.cloudinary.com/dznido8dg/image/upload/v1620164059/Spinner-1s-200px_1_ha7jh9.svg"
                    width="500px"
                    height="500px"
                  />
                ) : (
                  jawwal3g.map((item) => (
                    <div className="col-lg-3 col-md-4 col-sm-4 mt-4 ">
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  jawwal3g: state.companies.jawwal3g,
  loading: state.companies.loading,
});
export default connect(mapStateToProps, { getJawwal3g })(Jawwal3g);
