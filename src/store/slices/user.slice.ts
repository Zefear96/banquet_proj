import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: null,
};

// Action creator для проверки наличия токенов в локальном хранилище
export const checkTokenExists = createAsyncThunk(
	"userSlice/checkTokenExists",
	(_, { getState, dispatch }) => {
		const tokens = localStorage.getItem("app.accessToken");
		if (!tokens) {
			dispatch(clearUser()); // Если токены отсутствуют, вызываем action clearUser для удаления данных о пользователе
		}
	},
);

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.data = action.payload;
		},
		clearUser: (state) => {
			state.data = null;
			localStorage.removeItem("user");
		},
	},
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
