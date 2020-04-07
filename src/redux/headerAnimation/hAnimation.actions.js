import { HeaderAnimations } from "./hAnimation.types";

export const increaseAnimation = (bool) => (dispatch) => {
  dispatch({ type: HeaderAnimations.INCREASE_FROM_TOP, payload: bool });
};

export const decreaseAnimation = (bool) => (dispatch) => {
  dispatch({ type: HeaderAnimations.DECREASE_TO_BOTTOM, payload: bool });
};
