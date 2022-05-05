import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userListReducer as users } from "./models/user/user";
import { contactListReducer as contacts } from "./models/contact/contact";

const store = configureStore({
  reducer: {
    homePage: combineReducers({
      users,
      contacts,
    }),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
