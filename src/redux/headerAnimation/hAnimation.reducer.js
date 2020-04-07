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
        fromTop: action.payload,
      };
    case HeaderAnimations.DECREASE_TO_BOTTOM:
      return {
        ...state,
        fromTop: action.payload,
      };
    default:
      return state;
  }
};

export default hAnimation;
