import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Delete from "@mui/icons-material/DeleteOutline";
import "./styles/person.scss";
// import { useActions } from "../hooks/UseActions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import Profile from "./Profile";

const ProfileMain = () => {
	// const { Profile } = useSelector((store) => store.todo);
	// const { getprofile, AccRefresh } = useActions();
	// useEffect(() => {
	// 	getprofile();
	// }, []);

	return (
		<>
			<Box className="profcateg">
				<Box>
					<NavLink to="/">Главная </NavLink> /
					<NavLink to="/profile"> Личный кабинет </NavLink>
				</Box>
				<Profile />
				<Box sx={{ marginTop: "20px", width: "auto" }}>
					<Box className="Mychose">
						<NavLink to="/profile/feedback">
							<Typography>Мои отзывы</Typography>
							<Box className="textLine"></Box>
						</NavLink>
						<NavLink to="/profile/favorites">
							<Typography>Избранное</Typography>
							<Box className="textLine"></Box>
						</NavLink>
					</Box>
					<Box className="line"></Box>
				</Box>
				<Box className="Feedback">
					<Box className="feedcard">
						<Box className="feedcdOne">
							<Box>
								<strong>
									<Typography
										sx={{
											color: "#A07D50",
											fontSize: "24px",
											// fontWeight: "500",
										}}
									>
										Золотой Дракон
									</Typography>
								</strong>
								<Typography sx={{ color: "#787878" }}>
									25 апреля 2023
								</Typography>
							</Box>
							<Box className="deleteCom1">
								<Delete /> Удалить отзыв
							</Box>
						</Box>
						<Box className="feedcdTwo">
							<Typography>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam, nesciunt velit. Odit, iusto. Consectetur tempora
								repellat voluptate laudantium. Nisi omnis tempora ad culpa
							</Typography>
						</Box>
						<Box className="deleteCom2">
							<Delete /> Удалить отзыв
						</Box>
					</Box>
					<Box className="feedcard">
						<Box className="feedcdOne">
							<Box>
								<strong>
									<Typography
										sx={{
											color: "#A07D50",
											fontSize: "24px",
											// fontWeight: "500",
										}}
									>
										Золотой Дракон
									</Typography>
								</strong>
								<Typography sx={{ color: "#787878" }}>
									25 апреля 2023
								</Typography>
							</Box>
							<Box className="deleteCom1">
								<Delete /> Удалить отзыв
							</Box>
						</Box>
						<Box className="feedcdTwo">
							<Typography>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam, nesciunt velit. Odit, iusto. Consectetur tempora
								repellat voluptate laudantium. Nisi omnis tempora ad culpa
							</Typography>
						</Box>
						<Box className="deleteCom2">
							<Delete /> Удалить отзыв
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ProfileMain;
