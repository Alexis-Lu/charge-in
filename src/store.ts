import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigationSlice";
import notificationReducer from "./notificationSlice";
import popoverReducer from "./popoverSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    notifications: notificationReducer,
    popover: popoverReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
