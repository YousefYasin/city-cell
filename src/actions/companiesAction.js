import axios from "axios";

import {
  GET_JAWWAL_3G,
  GET_JAWWAL_CREDIT,
  GET_JAWWAL_MIN,
  CLEAR_ERRORS,
  GET_ERRORS,
  ADD_JAWWAL_CHARGE,
  GET_JAWWAL_CHARGE,
} from "./types";

var lang;
if (localStorage.langCity === "en") {
  lang = "english";
} else if (localStorage.langCity === "ar") {
  lang = "arabic";
} else if (localStorage.langCity === "is") {
  lang = "israel";
} else {
  lang = "english";
}
//jawwal Actions

export const getJawwal3g = (mobileNo) => (dispatch) => {
  dispatch(clearErrors());

  axios
    .get(
      `http://newapi.citycell.me/api/v1/resources/JAB?number=${mobileNo.split('-').join('')}&bundle=jawwal3g&language=english`
    )
    .then((res) =>
      dispatch({
        type: GET_JAWWAL_3G,
        payload: res.data,
      })
    )
    .catch((err) =>
      // console.log(err,'fffffff')
      dispatch({
        type: GET_ERRORS,
        payload: err,
      })
    );
};

export const getJawwalCredit = (mobileNo) => (dispatch) => {
  dispatch(clearErrors());
  console.log(mobileNo.slice(4));
  axios
    .get(
      `http://newapi.citycell.me/api/v1/resources/JAB?number=${mobileNo
        .split("-")
        .join("")}&bundle=jawwalMin&language=${lang}`
    )
    .then((res) =>
      dispatch({
        type: GET_JAWWAL_CREDIT,
        payload: res.data,
      })
    )
    .catch((err) =>
      // console.log(err,'fffffff')
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      })
    );
};
export const getJawwalMin = (mobileNo) => (dispatch) => {
  dispatch(clearErrors());
  // console.log(mobileNo.slice(3), lang);
  console.log(mobileNo.split("-").join(""));
  axios
    .get(
      `http://newapi.citycell.me/api/v1/resources/JAB?number=${mobileNo
        .split("-")
        .join("")}&bundle=jawwalMin&language=${lang}`
    )
    .then((res) =>
      dispatch({
        type: GET_JAWWAL_MIN,
        payload: res.data,
      })
    )
    .catch((err) =>
      // console.log(err,'fffffff')
      dispatch({
        type: GET_ERRORS,
        payload: err,
      })
    );
};

export const addChargeJawwal = (data) => (dispatch) => {
  dispatch(clearErrors());
  const chargeJal = JSON.parse(localStorage.chargeJawwal);
  console.log(typeof chargeJal, chargeJal);
  chargeJal.push(data);
  // dispatch({
  //   type: ADD_JAWWAL_CHARGE,
  //   payload: data,
  // });
  console.log(chargeJal);
  localStorage.setItem("chargeJawwal", JSON.stringify(chargeJal));
};

export const getChargeJawwal = () => (dispatch) => {
  dispatch(clearErrors());
  const charge = JSON.parse(localStorage.chargeJawwal);
  // console.log(typeof charge);
  dispatch({
    type: GET_JAWWAL_CHARGE,
    payload: charge,
  });
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
