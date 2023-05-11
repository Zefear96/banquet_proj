import React from "react";
import MainPage from "../../pages/Main";
import Navbar from "../Navbar";
import Filters from "../RestFilters";
import Footer from "../Footer";
import RestaurantList from "../RestaurantList";
import { Box } from "@mui/material";
import "./style.scss";

export const Home = () => {
	const images = Array.from(
		{ length: 10 },
		(_, i) => `https://loremflickr.com/640/480?random=${i + 1}`,
	);
	return (
		<>
			<MainPage />
			<Box className="MainBox">
				<Box className="chast1">
					<Filters />
				</Box>
				<Box className="chast2">
					<RestaurantList images={images} />
				</Box>
			</Box>
			<Footer />
		</>
	);
};
