import React, { useState } from "react";
import translate from "../../i18n/translate";
import TextFieldGroup from "../common/TextFieldGroup";
import { useIntl } from "react-intl";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "./auth.css";
import validateSignUpInput from "../../validation/validateSignUpInput";
const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    password2: "",
    address: "",
  });
  const [errors1, setErrors1] = useState({});

  const intl = useIntl();
  const onChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { errors, isValid } = validateSignUpInput(signUpForm);
    if (!isValid) {
      setErrors1(errors);
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
              <div className="card ">
                <h4 className="m-4 sign-text">
                  <strong>{translate("signUp")}</strong>
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
                      <label for="inputEmail3" className="col-form-label">
                        From back-end
                      </label>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      {translate("fullname")}
                    </label>
                    <div className="col-sm-5">
                      <TextFieldGroup
                        className="mb-5"
                        placeholder={intl.formatMessage({ id: "enter0" })}
                        name="fullName"
                        value={signUpForm.fullName}
                        onChange={onChange}
                        error={errors1.fullName}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      {translate("email")}
                    </label>
                    <div className="col-sm-5">
                      <TextFieldGroup
                        placeholder={intl.formatMessage({ id: "enter1" })}
                        name="email"
                        type="email"
                        value={signUpForm.email}
                        onChange={onChange}
                        //   error={emailError ? emailError : errors1.email}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      {translate("mobileNumber")}
                    </label>
                    <div className="col-sm-5">
                      <TextFieldGroup
                        placeholder={intl.formatMessage({ id: "enter2" })}
                        name="mobile"
                        type="tel"
                        value={signUpForm.mobile}
                        onChange={onChange}
                        error={errors1.mobile}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      {translate("country")}
                    </label>
                    <div className="col-sm-5">
                      <select className="form-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                      </select>
                    </div>
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      {translate("village")}
                    </label>
                    <div className="col-sm-3">
                      <select className="form-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      {translate("address")}
                    </label>
                    <div className="col-sm-5">
                      <TextFieldGroup
                        className="mb-5"
                        placeholder={intl.formatMessage({ id: "enter3" })}
                        name="address"
                        value={signUpForm.address}
                        onChange={onChange}
                        // error={errors1.address}
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
                        value={signUpForm.password}
                        onChange={onChange}
                        error={errors1.password}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      {translate("confirmPassword")}
                    </label>
                    <div className="col-sm-5">
                      <TextFieldGroup
                        placeholder={intl.formatMessage({
                          id: "confirmPassword",
                        })}
                        name="password2"
                        type="password"
                        value={signUpForm.password2}
                        onChange={onChange}
                        error={errors1.password2}
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <button
                      className="btn sign-but "
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      {translate("register1")}
                    </button>
                  </div>
                  <label for="inputEmail3" className=" col-form-label">
                    {translate("haveAccount")}
                  </label>{" "}
                  <Link to="/login">{translate("login")}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
