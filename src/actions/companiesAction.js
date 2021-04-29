import axios from "axios";

import {
  GET_JAWWAL_3G,
  GET_JAWWAL_CREDIT,
  GET_JAWWAL_MIN,
  CLEAR_ERRORS,
  GET_ERRORS,
} from "./types";

//jawwal Actions

export const getJawwal3g = () => (dispatch) => {
  dispatch(clearErrors());

  axios
    .get("/api/posts")
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
        payload: err.response.data,
      })
    );
};

export const getJawwalCredit = () => (dispatch) => {
  dispatch(clearErrors());

  axios
    .get("/api/posts")
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
        payload: err.response.data,
      })
    );
};

export const getJawwalMin = () => (dispatch) => {
  dispatch(clearErrors());

  axios
    .get("/api/posts")
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
        payload: err.response.data,
      })
    );
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
