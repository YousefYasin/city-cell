import axios from "axios";
import { SET_CURRENT_USER, GET_ERRORS, CLEAR_ERRORS } from "./types";
import jwt_decode from "jwt-decode";

export const setCurrentUser = (decode) => {
  return {
    type: SET_CURRENT_USER,
    payload: decode,
  };
};

// login user

export const loginUser = (userData, history) => (dispatch) => {
  dispatch(clearErrors());

  axios
    .post(
      `http://newapi.citycell.me/api/v1/resources/signin?sellerid=${userData.userName}&pass=${userData.password}`
    )
    .then((res) => {
      //save to local storage

      console.log(res.data.status);
      // const decode = jwt_decode(res.data.token);
      if (res.data.status === "failed") {
        dispatch({
          type: GET_ERRORS,
          payload: "Somthing went Wrong !!",
        });
      } else {
        const { token } = res.data;
        // console.log(res);
        //set token to local storage
        localStorage.setItem("jwtUserToken", token);
        localStorage.setItem("companies", JSON.stringify(res.data));
        //set current user
        dispatch(setCurrentUser(res.data));
        history.push("/");
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: "Somthing went Wrong !!",
      });
    });
};

export const signUpUser = (userData, userName, history) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .get(
      `http://newapi.citycell.me/api/v1/resources/signup?sellerid=${userName}&name=${userData.fullName}&passw=${userData.password}&country=${userData.country}&city=${userData.city}&address=${userData.address}&mobileNo=${userData.mobile}&email=${userData.email}`
    )
    .then((res) => {
      if (res.data.status === "failed") {
        dispatch({
          type: GET_ERRORS,
          payload: "Somthing went Wrong !!",
        });
      } else {
        console.log(res.data, "res=>>>>>");
        history.push("/login");
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: "Somthing went Wrong !!",
      });
    });
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

// log user out
export const logoutUser = (router) => async (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtUserToken");
  localStorage.removeItem("companies");

  dispatch(setCurrentUser({}));
  setTimeout(router.push("/login"), 1000);
};
