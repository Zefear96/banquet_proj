import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
	setUser,
	clearUser,
	checkTokenExists,
} from "./store/slices/user.slice";

function App() {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user.data);

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			dispatch(setUser(JSON.parse(user)));
		} else {
			dispatch(clearUser());
		}
	}, [dispatch]);

	useEffect(() => {
		dispatch(checkTokenExists());
	}, [dispatch]);
	console.log(user);

	return (
		<>
			<Navbar />
			<MainRoutes />
			<Footer />
		</>
	);
}

export default App;
