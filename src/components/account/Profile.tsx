import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
// import { useActions } from "../hooks/UseActions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { PortableWifiOffOutlined } from "@mui/icons-material";
import { useFetchUser } from "../../services/account/fetchUser";
import { useAppSelector } from "../../store/hooks";

const Profile = () => {
	const user = useAppSelector((state) => state.user.data);

	return (
		<>
			<Box className="MyArea">
				{user ? (
					<Box className="MyAreaBox">
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Avatar
								src={user.avatar}
								style={{
									border: "2px solid rgba(160, 125, 80, 1)",
									width: "80px",
									height: "80px",
									margin: "10px",
								}}
							/>
							<Stack>
								<Box className="mytextAva">
									<Typography>Имя: {user.first_name}</Typography>
								</Box>
								<Box className="mytextAva">
									<Typography>Фамилия: {user.last_name}</Typography>
								</Box>
								<Box className="mytextAva">
									<Typography>Email: {user.email}</Typography>
								</Box>
							</Stack>
						</Box>
						<Box sx={{ display: "flex" }}>
							<Box className="areaBtn">
								<NavLink to="/profile/edit">Редактировать профиль </NavLink>
							</Box>
							{user.category == "business" ? (
								<Box className="areaBtn">
									<NavLink to="/add/restaurant">Добавить ресторан</NavLink>
								</Box>
							) : null}
						</Box>
					</Box>
				) : (
					<h3>null</h3>
				)}
			</Box>
		</>
	);
};

export default Profile;
