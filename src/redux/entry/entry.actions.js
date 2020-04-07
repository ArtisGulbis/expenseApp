import { EntryTypes } from "./entry.types";

export const setNewEntry = ({ name, value, type, _id }) => (dispatch) => {
  dispatch({
    type: EntryTypes.SET_NEW_ENTRY,
    payload: { name, value, type, _id },
  });
};

export const removeEntry = (id) => (dispatch) => {
  dispatch({ type: EntryTypes.REMOVE_ENTRY, payload: { id } });
};

export const clearEntries = () => (dispatch) => {
  dispatch({ type: EntryTypes.CLEAR_ENTRIES, payload: [] });
};
