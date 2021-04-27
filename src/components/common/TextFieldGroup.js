/** @format */

import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
const TextFieldGroup = ({
  name,
  placeholder,
  value,
  lable,
  error,
  info,
  type,
  onChange,
  disable,
  style
}) => {
  return (
    <div className="form-group">
      <input
        //  id="exampleFormControlInput1"
        type={type}
        className={classnames("form-control form-control-lg rounded input-field", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disable}
        style={style}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && (
        <small className="form-text text-muted text-left">
          {typeof error === "object" ? "" : error}
        </small>
      )}
      {error && <div className="invalid-feedback"></div>}
    </div>
  );
};
TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  lable: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disable: PropTypes.string,
};
TextFieldGroup.defaultProps = {
  type: "text",
};

export default TextFieldGroup;
