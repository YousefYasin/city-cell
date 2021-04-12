import React, { useState } from "react";
import translate from "../../i18n/translate";
import TextFieldGroup from "../common/TextFieldGroup";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import validateLoginInput from '../../validation/validateLoginInput'
const Login = () => {
  const intl = useIntl();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [errors1, setErrors1] = useState({});

  const onChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { errors, isValid } = validateLoginInput(loginForm);
    if (!isValid) {
      setErrors1(errors);
    }
  };
  return (
    <div className="container-fluid bg-login">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="container ">
          <div className="row  d-flex justify-content-end">
            <div className="col-lg-7 col-md-6"></div>
            <div className="col-lg-5 col-md-6 mt-5">
              <div
                className="card "
                style={{ border: "5px solid #5f8bdc", borderRadius: "12px" }}
              >
                <div className="form-cover  text-left m-4">
                  <h4 className="mt-3">
                    <strong>{translate("signUp")}</strong>
                  </h4>

                  <small className="form-text text-muted text-left">
                    {translate("email")}
                  </small>
                  <TextFieldGroup
                    placeholder={intl.formatMessage({ id: "enter1" })}
                    name="email"
                    type="email"
                    value={loginForm.email}
                    onChange={onChange}
                    //   error={emailError ? emailError : errors1.email}
                  />
                  <small className="form-text text-muted text-left">
                    {translate("password")}
                  </small>
                  <TextFieldGroup
                    placeholder={intl.formatMessage({ id: "password" })}
                    name="password"
                    type="password"
                    value={loginForm.password}
                    onChange={onChange}
                    error={errors1.password}
                  />

                  <button
                    className="btn  btn-secondary mb-4 mt-4 ml-5 "
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
