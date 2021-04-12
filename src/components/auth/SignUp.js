import React, { useState } from "react";
import translate from "../../i18n/translate";
import TextFieldGroup from "../common/TextFieldGroup";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors1, setErrors1] = useState({});

  const intl = useIntl();
  const onChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {};
  return (
    <div className="container-fluid bg-login">
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
                  {translate("fullname")}
                </small>
                <TextFieldGroup 
                className='mt-3'
                placeholder={intl.formatMessage({ id: "enter0" })}
                name="fullName"
                value={signUpForm.fullName}
                  onChange={onChange}
                  error={errors1.fullName}
                />
                <small className="form-text text-muted text-left">
                  {translate("email")}
                </small>
                <TextFieldGroup
                  placeholder={intl.formatMessage({ id: "enter1" })}
                  name="email"
                  type="email"
                  value={signUpForm.email}
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
                  value={signUpForm.password}
                  onChange={onChange}
                  error={errors1.password}
                />
                <small className="form-text text-muted text-left">
                  {translate("confirmPassword")}
                </small>
                <TextFieldGroup
                  placeholder={intl.formatMessage({ id: "confirmPassword" })}
                  name="password2"
                  type="password"
                  value={signUpForm.password2}
                  onChange={onChange}
                  error={errors1.password2}
                />

                <button
                  className="btn  btn-secondary mb-4 mt-4 ml-5 "
                  onClick={onSubmit}
                  id="reg"
                  style={{ width: "100%" }}
                >
                  {translate("register1")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
