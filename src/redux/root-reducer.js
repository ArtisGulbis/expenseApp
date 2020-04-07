import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import totalReducer from "./total/total.reducer";
import entryReducer from "./entry/entry.reducer";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  totalAmount: totalReducer,
  entryFields: entryReducer
});

export default persistReducer(persistConfig, rootReducer);
