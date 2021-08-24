import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { items } from "../redux/slices/contacts";

import filter from "./slices/filter";

const rootReducer = {
  [items.reducerPath]: items.reducer,
  filter,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    items.middleware,
  ],
});

setupListeners(store.dispatch);
export default store;
