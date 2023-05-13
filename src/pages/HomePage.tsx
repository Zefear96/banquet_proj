import React from "react";
import MainPage from "../components/Home/MainPage";
import Navbar from "../components/Navbar/Navbar";
import Filters from "../components/restaurant/Filters";
import Footer from "../components/Footer/Footer";
import RestaurantList from "../components/restaurant/RestaurantList";
import { Box } from "@mui/material";
import "./style.scss";

const HomePage = () => {
	const images = Array.from(
		{ length: 10 },
		(_, i) => `https://loremflickr.com/640/480?random=${i + 1}`,
	);

	return (
		<div>
			<MainPage />
			<Box className="MainBox">
				<Box className="chast1">
					<Filters />
				</Box>
				<Box className="chast2">
					<RestaurantList images={images} />
				</Box>
			</Box>
		</div>
	);
};

export default HomePage;
