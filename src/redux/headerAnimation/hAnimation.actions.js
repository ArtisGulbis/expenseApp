import { HeaderAnimations } from "./hAnimation.types";

export const increaseAnimationTrue = () => (dispatch) => {
  dispatch({ type: HeaderAnimations.INCREASE_FROM_TOP, payload: "" });
};

export const decreaseAnimationTrue = () => (dispatch) => {
  dispatch({ type: HeaderAnimations.DECREASE_TO_BOTTOM, payload: "" });
};
