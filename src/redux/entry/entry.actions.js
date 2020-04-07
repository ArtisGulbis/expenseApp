import { EntryTypes } from "./entry.types";

export const setNewEntry = ({ name, value, type }) => dispatch => {
  dispatch({ type: EntryTypes.SET_NEW_ENTRY, payload: { name, value, type } });
};

export const clearEntries = () => dispatch => {
  dispatch({ type: EntryTypes.CLEAR_ENTRIES, payload: [] });
};
