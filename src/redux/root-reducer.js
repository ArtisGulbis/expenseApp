import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import totalReducer from "./total/total.reducer";
import entryReducer from "./entry/entry.reducer";
import headerReducer from "./headerAnimation/hAnimation.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  totalAmount: totalReducer,
  entryFields: entryReducer,
  headerAnim: headerReducer,
});

export default persistReducer(persistConfig, rootReducer);
