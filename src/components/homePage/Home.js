import React from "react";
import translate from "../../i18n/translate";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <SideBar />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-6">
          <div className="card card-home">
            <div className="mt-2">
              <div className="m-5">
                <h2 className="sign-text">
                  <i className="icon-main fa fa-home m-2"></i>
                  Home
                </h2>
              </div>
              <div className=" card nav-layout">
                <h5 className="m-3">COMPANIES</h5>
              </div>
            </div>
          </div>
          <div className="">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                <div className="card outer-wrapper">
                  <div className="frame">
                    <img
                      src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131437/jawwal-logo_jrbpa3.png"
                      width="120px"
                    />
                  </div>
                  <div className=" card nav-layout">
                    <h5 className="m-2 text-center">jawwal</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                <div className="card outer-wrapper">
                  <div className="frame">
                    <img src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131447/kisspng-ooredoo-kuwait-telecommunication-ooredoo-shop-in-monogram-vector-5b0cd2ff9b3cd9.3630305515275671036359_vcll0j.jpg" />
                  </div>
                  <div className=" card nav-layout">
                    <h5 className="m-2 text-center">Ooredoo</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                <div className="card outer-wrapper">
                  <div className="frame">
                    <img src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131463/unnamed_vyhnbk.png" />
                  </div>
                  <div className=" card nav-layout">
                    <h5 className="m-2 text-center">Cellcom</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                <div className="card outer-wrapper">
                  <div className="frame">
                    <img src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131481/Pelephoneisrael-1_dtntrq.png" />
                  </div>
                  <div className=" card nav-layout">
                    <h5 className="m-2 text-center">Pelephone</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                <div className="card outer-wrapper">
                  <div className="frame">
                    <img src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131493/GolanTelecom.svg_oyiuo3.png" />
                  </div>
                  <div className=" card nav-layout">
                    <h5 className="m-2 text-center">Golan</h5>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                <div className="card outer-wrapper">
                  <div className="frame">
                    <img src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131496/019-mobile-new_ifamyv.png" />
                  </div>
                  <div className=" card nav-layout">
                    <h5 className="m-2 text-center">O19 Mobile</h5>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                <div className="card outer-wrapper">
                  <div className="frame">
                    <img src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131513/1229px-012_Mobile_Logo.svg_jpmad3.png" />
                  </div>
                  <div className=" card nav-layout">
                    <h5 className="m-2 text-center">012 Mobile</h5>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                <div className="card outer-wrapper">
                  <div className="frame">
                    <img src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131544/Hotmobilelogo.svg_gjfklv.png" />
                  </div>
                  <div className=" card nav-layout">
                    <h5 className="m-2 text-center">Hot Mobile</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                <div className="card outer-wrapper">
                  <div className="frame">
                    <img src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131635/1280px-Partner_logo.svg_klbypu.png" />
                  </div>
                  <div className=" card nav-layout">
                    <h5 className="m-2 text-center">Partner</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {translate("test")} */}
    </div>
  );
};

export default Home;
