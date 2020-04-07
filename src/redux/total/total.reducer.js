import { TotalTypes } from "./total.types";

const INITIAL_STATE = {
  total: 0,
};

const totalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TotalTypes.INCREASE_TOTAL:
      return {
        ...state,
        total: parseInt(state.total) + parseInt(action.payload),
      };
    case TotalTypes.DECREASE_TOTAL:
      return {
        ...state,
        total: parseInt(state.total) - parseInt(action.payload),
      };
    case TotalTypes.RESET_TOTAL:
      return {
        ...state,
        total: 0,
      };

    default:
      return state;
  }
};

export default totalReducer;
