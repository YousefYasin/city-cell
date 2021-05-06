import { useEffect } from "react";
import translate from "../../i18n/translate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SideBar from "./SideBar";
const Home = ({ user }) => {
  useEffect(() => {
    document.title = "Home /City-Cell ";
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
                <h5 className="m-3">{translate("company")}</h5>
              </div>
            </div>
          </div>
          <div className="">
            <div className="row">
              {user.jawwal == "true" && (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <Link to="/company/jawwalNo">
                      <div className="frame">
                        <img
                          alt=""
                          src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131437/jawwal-logo_jrbpa3.png"
                          width="120px"
                        />
                      </div>
                      <div className=" card nav-layout">
                        <h5 className="m-2 text-center">
                          {translate("jawwal")}
                        </h5>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
              {user.ooredoo == "true" && (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619203748/Ooredoo_logo_2017_mtdkir.png"
                      />
                    </div>
                    <div className=" card nav-layout">
                      <h5 className="m-2 text-center">
                        {translate("ooredoo")}
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {user.cellcom == "true" && (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131463/unnamed_vyhnbk.png"
                      />
                    </div>
                    <div className=" card nav-layout">
                      <h5 className="m-2 text-center">
                        {translate("cellcom")}
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {user.pelephone == "true" && (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131481/Pelephoneisrael-1_dtntrq.png"
                      />
                    </div>
                    <div className=" card nav-layout">
                      <h5 className="m-2 text-center">
                        {translate("pelephone")}
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {user.golan == "true" && (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131493/GolanTelecom.svg_oyiuo3.png"
                      />
                    </div>
                    <div className=" card nav-layout">
                      <h5 className="m-2 text-center">{translate("golan")}</h5>
                    </div>
                  </div>
                </div>
              )}
              {user.golan == "true" && (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131496/019-mobile-new_ifamyv.png"
                      />
                    </div>
                    <div className=" card nav-layout">
                      <h5 className="m-2 text-center">
                        {translate("O1Mobile")}
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {user.mobile019 == "true" && (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131513/1229px-012_Mobile_Logo.svg_jpmad3.png"
                      />
                    </div>
                    <div className=" card nav-layout">
                      <h5 className="m-2 text-center">
                        {translate("mobile12")}
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {user.hot == "true" && (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131544/Hotmobilelogo.svg_gjfklv.png"
                      />
                    </div>
                    <div className=" card nav-layout">
                      <h5 className="m-2 text-center">
                        {translate("hotMobile")}
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {user.partner == "true" && (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="card outer-wrapper">
                    <div className="frame">
                      <img
                        alt=""
                        src="https://res.cloudinary.com/dtu4lltbk/image/upload/v1619131635/1280px-Partner_logo.svg_klbypu.png"
                      />
                    </div>
                    <div className=" card nav-layout">
                      <h5 className="m-2 text-center">
                        {translate("partner")}
                      </h5>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* {translate("test")} */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, {})(Home);
