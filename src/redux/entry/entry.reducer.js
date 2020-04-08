import { EntryTypes } from "./entry.types";

const INITIAL_STATE = {
  entries: [],
  currentEntry: {},
  entryToRemove: {},
  error: "",
};

const entryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EntryTypes.SET_NEW_ENTRY:
      const { name, value, type, _id } = action.payload;
      return {
        ...state,
        entries: [...state.entries, { name, value, type, _id }],
        currentEntry: { name, value, type, _id },
        entryToRemove: {},
      };

    case EntryTypes.CLEAR_ENTRIES:
      return {
        ...state,
        entries: action.payload,
        currentEntry: {},
        entryToRemove: {},
      };

    case EntryTypes.REMOVE_ENTRY:
      //only keep entries with not matchin id
      const entriesToKeep = state.entries.filter(
        (el) => el._id !== action.payload.id
      );
      const entryToRemove = state.entries.filter(
        (el) => el._id === action.payload.id
      );

      return {
        ...state,
        entries: entriesToKeep,
        currentEntry: entryToRemove,
        entryToRemove: entryToRemove,
      };
    default:
      return state;
  }
};

export default entryReducer;
