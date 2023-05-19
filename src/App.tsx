import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import React, { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { setUser, clearUser } from "./store/slices/user.slice";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			dispatch(setUser(JSON.parse(user)));
		} else {
			dispatch(clearUser());
		}
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<MainRoutes />
			<Footer />
		</>
	);
}

export default App;
