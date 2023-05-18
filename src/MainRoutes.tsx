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
import { Institution } from "./components/restaurant/InfoCard/Institution/Institution";
import { Menu } from "./components/restaurant/InfoCard/Menu/Menu";
import { Reviews } from "./components/restaurant/InfoCard/Comment/Reviews";

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
      <Route path="/in" element={<Institution />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
};

export default MainRoutes;
