import {
  GET_JAWWAL_3G,
  GET_JAWWAL_CREDIT,
  GET_JAWWAL_MIN,
} from "../actions/types";

const initialState = {
  jawwal3g: [],
  jawwalCreadit: [],
  jawwalMin: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_JAWWAL_3G:
      return {
        ...state,
        jawwal3g: action.payload,
      };
    case GET_JAWWAL_CREDIT:
      return {
        ...state,
        jawwalCreadit: action.payload,
      };
    case GET_JAWWAL_MIN:
      return {
        ...state,
        jawwalMin: action.payload,
      };
    default:
      return state;
  }
}
