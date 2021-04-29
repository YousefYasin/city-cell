import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import translate from "../../../i18n/translate";
import { useHistory, Link } from "react-router-dom";
import SideBar from "../../homePage/SideBar";
import { getJawwalMin } from "../../../actions/companiesAction";
const JawwalMin = ({ auth, jawwalMin, getJawwalMin }) => {
  const history = useHistory().location.pathname;
  const [mobileNo, setMobileNo] = useState(history.split("/")[2]);
  const [amount, setAmount] = useState("");
  useEffect(() => {
    document.title = "Home /Min Jawwal";
    console.log(jawwalMin, auth);
  }, []);
  const onClickType3Min = (e) => {
    e.preventDefault();
    // TODOOOO
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
                    className=" mt-2s col-sm-3 col-form-label mobile-semi"
                    style={{ fontFamily: "initial", fontSize: "2rem" }}
                  >
                    {mobileNo}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 card">
            <form class="form-inline mt-5">
              <div class="form-group row d-flex justify-content-center">
                <label
                  for="colFormLabelLg"
                  class="col-sm-2 col-form-label col-form-label-lg"
                >
                  {translate("amount")}
                </label>
                <div class="col-sm-4">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    value={amount}
                    disabled
                  />
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
            <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 mt-4">
                <div className="card outer-wrapper">
                  <a style={{ cursor: "pointer" }} onMouseOver="dddddddd" are>
                    <title>dddddddddd</title>
                    <div className="frame">
                      <img
                        alt="sssssssssss"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619661047/1222_wqelrs.png"
                        // width="100px"
                        // height="50px"
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 mt-4">
                <div className="card outer-wrapper">
                  <a style={{ cursor: "pointer" }} onMouseOver="dddddddd" are>
                    <title>dddddddddd</title>
                    <div className="frame">
                      <img
                        alt="sssssssssss"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619661047/1222_wqelrs.png"
                        // width="100px"
                        // height="50px"
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 mt-4">
                <div className="card outer-wrapper">
                  <a style={{ cursor: "pointer" }} onMouseOver="dddddddd" are>
                    <title>dddddddddd</title>
                    <div className="frame">
                      <img
                        alt="sssssssssss"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619661047/1222_wqelrs.png"
                        // width="100px"
                        // height="50px"
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 mt-4">
                <div className="card outer-wrapper">
                  <a style={{ cursor: "pointer" }} onMouseOver="dddddddd" are>
                    <title>dddddddddd</title>
                    <div className="frame">
                      <img
                        alt="sssssssssss"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619661047/1222_wqelrs.png"
                        // width="100px"
                        // height="50px"
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 mt-4">
                <div className="card outer-wrapper">
                  <a style={{ cursor: "pointer" }} onMouseOver="dddddddd" are>
                    <title>dddddddddd</title>
                    <div className="frame">
                      <img
                        alt="sssssssssss"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619661047/1222_wqelrs.png"
                        // width="100px"
                        // height="50px"
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 mt-4">
                <div className="card outer-wrapper">
                  <a style={{ cursor: "pointer" }} onMouseOver="dddddddd" are>
                    <title>dddddddddd</title>
                    <div className="frame">
                      <img
                        alt="sssssssssss"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619661047/1222_wqelrs.png"
                        // width="100px"
                        // height="50px"
                      ></img>
                    </div>
                  </a>
                </div>
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
  jawwalMin: state.companies.jawwalMin,
});

export default connect(mapStateToProps, { getJawwalMin })(JawwalMin);
