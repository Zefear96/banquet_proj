import React from "react";
import { Route, Routes } from "react-router";

import { Login } from "./components/account/Login";
import { Registration } from "./components/account/Registration";
import { Myfeedback } from "./components/account/MyFeedback";
import { Chosen } from "./components/account/Chosen";
import { EditProfile } from "./components/account/EditProfile";
import { ResetPassword } from "./components/account/ResetPassword";
import { Home } from "./components/Home";
import Details from "./components/restaurant/Details/Details";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Registration />} />
			<Route path="/Myfeedback" element={<Myfeedback />} />
			<Route path="/Mychosen" element={<Chosen />} />
			<Route path="/editProfile" element={<EditProfile />} />
			<Route path="/confirm/password" element={<ResetPassword />} />
			<Route path="/details" element={<Details />} />
		</Routes>
	);
};

export default MainRoutes;
