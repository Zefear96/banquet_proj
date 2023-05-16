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
import RegisterForm from "./components/account/RegisterForm";
import LoginForm from "./components/account/LoginForm";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			{/* <Route path="/login" element={<Login />} /> */}
			<Route path="/login" element={<LoginForm />} />

			{/* <Route path="/register" element={<Registration />} /> */}
			<Route path="/register" element={<RegisterForm />} />

			<Route path="/feedback" element={<Myfeedback />} />
			<Route path="/chosen" element={<Chosen />} />
			<Route path="/editProfile" element={<EditProfile />} />
			<Route path="/confirm/password" element={<ResetPassword />} />
			<Route path="/details" element={<Details />} />
		</Routes>
	);
};

export default MainRoutes;
