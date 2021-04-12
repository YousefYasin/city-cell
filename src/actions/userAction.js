import axios from "axios";
import { SET_CURRENT_USER, GET_ERRORS, CLEAR_ERRORS } from "./types";

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
    .post("http://127.0.0.1:5000/api/v1/", userData)
    .then((res) => {
      //save to local storage
      const { token } = res.data.data;

      // localStorage.setItem("jwtAdminToken", token);
      //set current user

      dispatch(setCurrentAdmin(res.data.data.data));

      //set token to local storage
      localStorage.setItem("jwtUserToken", token);
      //Decode token to get user data
      const decode = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(res.data.data.data));
      history.push("/");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      })
    );
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

  dispatch(setCurrentUser({}));
  setTimeout(router.push("/login"), 1000);
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
