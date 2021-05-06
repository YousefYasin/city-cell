import {
  GET_JAWWAL_3G,
  GET_JAWWAL_CREDIT,
  GET_JAWWAL_MIN,
  GET_JAWWAL_CHARGE,
  ADD_JAWWAL_CHARGE,
} from "../actions/types";

const initialState = {
  jawwal3g: [],
  jawwalCreadit: [],
  jawwalMin: [],
  chargeJawwal: [],
  loading: true,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_JAWWAL_3G:
      return {
        ...state,
        jawwal3g: action.payload,
        loading: false,
      };
    case GET_JAWWAL_CREDIT:
      return {
        ...state,
        jawwalCreadit: action.payload,
        loading: false,
      };
    case GET_JAWWAL_MIN:
      return {
        ...state,
        jawwalMin: action.payload,
        loading: false,
      };
    case GET_JAWWAL_CHARGE:
      return {
        ...state,
        chargeJawwal: action.payload,
        loading: false,
      };
    case ADD_JAWWAL_CHARGE:
      return {
        ...state,
        chargeJawwal: (chargeJawwal) => [...chargeJawwal, action.payload],
      };

    default:
      return state;
  }
}
