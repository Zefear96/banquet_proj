import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
// import { useActions } from "../hooks/UseActions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { PortableWifiOffOutlined } from "@mui/icons-material";

export const PersonalArea = () => {
	const { profile } = useSelector((store) => store.todo);
	// const { getprofile } = useActions();
	// useEffect(() => {
	//   getprofile();
	// }, []);

	return (
		<>
			<Box className="MyArea">
				{profile ? (
					profile.map((item) => (
						<Box className="MyAreaBox">
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Box id="myAvatar">
									<Typography
										sx={{ fontSize: "20px", textTransform: "capitalize" }}
									>
										{item.email[0]}
									</Typography>
								</Box>
								{item.first_name ? (
									<Box className="mytextAva">
										<Typography> {item.first_name}</Typography>
										<Typography> {item.last_name}</Typography>
									</Box>
								) : (
									<Typography className="mytextAva">{item.email}</Typography>
								)}
							</Box>
							<Box sx={{ display: "flex" }}>
								<Box className="areaBtn">
									<NavLink to="/editProfile">Редактировать профиль </NavLink>
								</Box>
								{item.category == "business" ? (
									<Box className="areaBtn">
										<NavLink to="/add/rest">Добавить ресторан</NavLink>
									</Box>
								) : null}{" "}
							</Box>
						</Box>
					))
				) : (
					<h3>null</h3>
				)}
			</Box>
		</>
	);
};
