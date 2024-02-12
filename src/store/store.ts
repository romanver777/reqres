import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth";
import usersReducer from "./users/users";
import userReducer from "./user/user";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    user: userReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
