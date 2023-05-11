import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storageGetItem, storageSetItem } from "../../utils/storage";

export const loadFromLocalStorage = createAsyncThunk(
	"authSlice/loadFromLocaleStorage",
	async () => {
		const accessToken = await storageGetItem<string>("app.accessToken");
		const refreshToken = await storageGetItem<string>("app.refreshToken");

		return {
			accessToken,
			refreshToken,
		};
	},
);

export const updateTokens = createAction<{
	accessToken: string | null;
	refreshToken: string | null;
}>("updateTokens");

type AuthState = {
	accessToken: string | null;
	refreshToken: string | null;
};

const initialState: AuthState = {
	accessToken: null,
	refreshToken: null,
};

export const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadFromLocalStorage.fulfilled, (state, action) => {
				state.accessToken = action.payload.accessToken ?? null;
				state.refreshToken = action.payload.refreshToken ?? null;
			})
			.addCase(updateTokens, (state, action) => {
				state.accessToken = action.payload.accessToken;
				state.refreshToken = action.payload.refreshToken;
				storageSetItem("app.accessToken", state.accessToken);
				storageSetItem("app.refreshToken", state.refreshToken);
			});
	},
});
