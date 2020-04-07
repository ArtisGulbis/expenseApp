import { EntryTypes } from "./entry.types";

const INITIAL_STATE = {
  entries: [],
  error: "",
};

const entryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EntryTypes.SET_NEW_ENTRY:
      const { name, value, type, _id } = action.payload;
      return {
        ...state,
        entries: [...state.entries, { name, value, type, _id }],
      };

    case EntryTypes.CLEAR_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };

    case EntryTypes.REMOVE_ENTRY:
      const entriesToKeep = state.entries.filter(
        (el) => el._id !== action.payload.id
      );

      return {
        ...state,
        entries: entriesToKeep,
      };
    default:
      return state;
  }
};

export default entryReducer;
