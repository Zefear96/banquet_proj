import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth.slice";
import { userSlice } from "./slices/user.slice";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		user: userSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
