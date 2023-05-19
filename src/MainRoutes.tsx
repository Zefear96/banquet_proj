import React from "react";
import { Route, Routes } from "react-router-dom";

import ProfileMain from "./components/account/ProfileMain";
import Favorites from "./components/account/Favorites";
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
			<Route path="/login" element={<LoginForm />} />
			<Route path="/register" element={<RegisterForm />} />
			<Route path="/profile" element={<ProfileMain />} />
			<Route path="/profile/favorites" element={<Favorites />} />
			<Route path="/profile/edit" element={<EditProfile />} />
			{/* <Route path="/profile" element={<Profile />} /> */}
			<Route path="/confirm/password" element={<ResetPassword />} />
			<Route path="/details" element={<Details />} />
		</Routes>
	);
};

export default MainRoutes;
