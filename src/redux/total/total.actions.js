import { TotalTypes } from "./total.types";

export const increaseAmount = amount => dispatch => {
  dispatch({ type: TotalTypes.INCREASE_TOTAL, payload: amount });
};

export const decreaseAmount = amount => dispatch => {
  dispatch({ type: TotalTypes.DECREASE_TOTAL, payload: amount });
};

export const resetAmount = () => dispatch => {
  dispatch({ type: TotalTypes.RESET_TOTAL, payload: 0 });
};
