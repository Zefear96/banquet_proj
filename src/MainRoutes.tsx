import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/account/Login";
import Registration from "./components/account/Registration";
import Myfeedback from "./components/account/MyFeedback";
import Chosen from "./components/account/Chosen";
import EditProfile from "./components/account/EditProfile";
import ResetPassword from "./components/account/ResetPassword";
import HomePage from "./pages/HomePage";
import Details from "./components/restaurant/Details";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Registration />} />
			<Route path="/feedback" element={<Myfeedback />} />
			<Route path="/chosen" element={<Chosen />} />
			<Route path="/editProfile" element={<EditProfile />} />
			<Route path="/confirm/password" element={<ResetPassword />} />
			<Route path="/details" element={<Details />} />
		</Routes>
	);
};

export default MainRoutes;
