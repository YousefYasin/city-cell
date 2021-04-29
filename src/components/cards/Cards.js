import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";
import SideBar from "../homePage/SideBar";
const Cards = () => {
  useEffect(() => {
    document.title = "Electornic Cards/City-Cell ";
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9 col-lg-9 col-md-8 col-sm-6">
            <div className="card card-home">
              <div className="card img-back">
                <div className="m-3">
                  <h1 className="header-text mt-5">
                    {translate("newProduct")}
                  </h1>
                </div>
              </div>
              <div className="mt-2">
                <div className=" card nav-layout">
                  <h5 className="m-3">{translate("electornicCards")}</h5>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        width="200px"
                        height="150px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619303836/WhatsApp_Image_2021-04-18_at_7.07.02_PM_2_m8dn35.jpg"
                        width="120px"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">
                        {translate("googlePlay")}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        width="200px"
                        height="150px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619303853/WhatsApp_Image_2021-04-18_at_7.07.03_PM_3_dhyffb.jpg"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">
                        {translate("nitendo")}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        width="200px"
                        height="150px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619303898/WhatsApp_Image_2021-04-18_at_7.07.03_PM_1_rb1fut.jpg"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">
                        {translate("playStation")}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        width="200px"
                        height="150px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619303917/WhatsApp_Image_2021-04-18_at_7.07.03_PM_aukb1a.jpg"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">{translate("xBox")}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        width="200px"
                        height="150px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619303985/WhatsApp_Image_2021-04-18_at_7.07.02_PM_1_dgoy4p.jpg"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">{translate("steam")}</h5>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        width="200px"
                        height="150px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619304020/WhatsApp_Image_2021-04-18_at_7.07.02_PM_gd14qx.jpg"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">{translate("tunes")}</h5>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        width="200px"
                        height="150px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619309264/netflixlogo.0.0_actdto.jpg"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">
                        {translate("netflex")}
                      </h5>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        height="150px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131437/jawwal-logo_jrbpa3.png"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">{translate("jawwal")}</h5>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        width="200px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619203748/Ooredoo_logo_2017_mtdkir.png"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">
                        {translate("ooredoo")}
                      </h5>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        width="200px"
                        height="150px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619394224/sBuM_UjT_400x400_bftdf9.jpg"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">{translate("zain")}</h5>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        width="200px"
                        height="150px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619394235/1606900646468_ykals5.jpg"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">{translate("umniah")}</h5>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        width="200px"
                        height="150px"
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619394245/Orange_logo_uwsteu.svg"
                      />
                    </div>
                    <div className=" card cards-layout">
                      <h5 className="m-2 text-center">{translate("orange")}</h5>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
