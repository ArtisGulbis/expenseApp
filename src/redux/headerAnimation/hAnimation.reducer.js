import { HeaderAnimations } from "./hAnimation.types";

const INITIAL_STATE = {
  fromTop: false,
  toBottom: false,
};

const hAnimation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderAnimations.INCREASE_FROM_TOP:
      return {
        ...state,
        fromTop: !state.fromTop,
      };
    case HeaderAnimations.DECREASE_TO_BOTTOM:
      return {
        ...state,
        toBottom: !state.toBottom,
      };
    default:
      return state;
  }
};

export default hAnimation;
