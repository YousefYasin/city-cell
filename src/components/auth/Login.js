import React, { useState } from "react";
import translate from "../../i18n/translate";
import TextFieldGroup from "../common/TextFieldGroup";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import validateLoginInput from "../../validation/validateLoginInput";
const Login = () => {
  const intl = useIntl();

  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
  });
  const [confirmation, setConfirmation] = useState("");
  const [errors1, setErrors1] = useState({});

  const onChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { errors, isValid } = validateLoginInput(loginForm);
    if (!isValid) {
      setErrors1(errors);
      console.log("Errors=> ", errors);
    }
  };
  return (
    <div className="container-fluid">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className=" ">
          <div className="row ">
            <div className="col-md-4 mt-5">
              <div className="card mt-5">
                <img src="https://res.cloudinary.com/dznido8dg/image/upload/v1603525588/Group_2489_2x_jgvdlx.png" />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 mt-5">
              <div className="card0 mt-5 ">
                <h4 className="m-4 sign-text">
                  <strong>{translate("login")}</strong>
                </h4>
                <div className="  text-left m-4">
                  <div className="row mb-3">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      {translate("userName")}
                    </label>
                    <div className="col-sm-5">
                      <TextFieldGroup
                        className="mb-5"
                        placeholder={intl.formatMessage({ id: "enter4" })}
                        name="userName"
                        type="text"
                        value={loginForm.userName}
                        onChange={onChange}
                        error={errors1.userName}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      {translate("password")}
                    </label>
                    <div className="col-sm-5">
                      <TextFieldGroup
                        placeholder={intl.formatMessage({ id: "password" })}
                        name="password"
                        type="password"
                        value={loginForm.password}
                        onChange={onChange}
                        error={errors1.password}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <button
                    className="btn sign-but m-4 "
                    type="submit"
                    id="reg"
                    style={{ width: "100%" }}
                  >
                    {translate("login")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
