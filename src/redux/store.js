import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// import { items } from "../redux/slices/contacts";
import { authReducer } from "./auth";
import { contactsReducer } from "./contacts";

// console.log(authReducer);

// import filter from "./slices/filter";

const rootReducer = {
  auth: authReducer,
  contacts: contactsReducer,
  // item: contactsReducer,
  // [items.reducerPath]: items.reducer,
  // filter,
};

const store = configureStore({
  reducer: rootReducer,

  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   items.middleware,
  // ],

  devTools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);
export default store;
