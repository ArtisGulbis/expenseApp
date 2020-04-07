import { EntryTypes } from "./entry.types";

const INITIAL_STATE = {
  entries: [],
  error: "",
};

const entryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EntryTypes.SET_NEW_ENTRY:
      const { name, value, type } = action.payload;
      return {
        ...state,
        entries: [...state.entries, { name, value, type }],
      };

    case EntryTypes.CLEAR_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };

    default:
      return state;
  }
};

export default entryReducer;
