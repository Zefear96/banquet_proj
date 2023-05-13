import React from "react";
import {
	Alert,
	Box,
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import back from "../../media/images/back.svg";
import exit from "../../media/images/exit.svg";
import { Link } from "react-router-dom";
// import MainPage from "../../pages/Main";

const ResetPassword = () => {
	return (
		<>
			<>
				{/* <Box className="mainMob">
					<MainPage />
				</Box> */}

				<Box
					sx={{
						width: "100%",
						height: "110vh",
						position: "absolute",
						zIndex: 10,
						background: "rgba(120, 120, 120, 0.8)",
					}}
				></Box>
				<Box
					sx={{
						height: "97vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						position: "relative",
						top: 0,
						zIndex: 999,
					}}
				>
					<Box
						sx={{
							width: "500px",
							height: "500px",
							borderRadius: "10px",
							boxShadow: "0px  0px 10px 0px black",
							background: "white",
						}}
					>
						<Box
							sx={{ margin: "30px", display: "flex", flexDirection: "column" }}
						>
							<Box sx={{ display: "flex", justifyContent: "space-between" }}>
								<Link to="/login">
									<img src={back} alt="" />
								</Link>
								<Link to="/">
									<img src={exit} alt="" />
								</Link>
							</Box>
							<Typography sx={{ margin: "30px auto", fontSize: "23px" }}>
								Востановить пароль
							</Typography>
							<Typography
								sx={{
									margin: "20px auto",
									fontSize: "17px",
									textAlign: "center",
								}}
							>
								Введите email или логин, и мы вышлем вам инструкции по получению
								нового пароля
							</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									flexDirection: "column",
								}}
							>
								<TextField
									id="outlined-basic"
									label="Логин"
									variant="outlined"
								/>
							</Box>
							<Button
								sx={{
									background: "#A07D50",
									color: "white",
									width: "200px",
									margin: "40px auto",
									textTransform: "capitalize",
								}}
							>
								Подтвердить
							</Button>
						</Box>
					</Box>
				</Box>
			</>
		</>
	);
};

export default ResetPassword;
