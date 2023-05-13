import React, { useState } from "react";
import {
	Box,
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import back from "../../media/images/back.svg";
import exit from "../../media/images/exit.svg";
import google from "../../media/images/google.svg";
// import { useActions } from "../hooks/UseActions";
import { Link, useNavigate } from "react-router-dom";

import MainPage from "../Home/MainPage";

const Login = () => {
	const [showPassword, setShowPassword] = React.useState(false);
	const navigate = useNavigate();
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const { login } = useActions();
	function SaveLog() {
		if (!email.trim() || !password.trim()) {
			alert("Неправильно");
			return;
		}
		let formData = new FormData();
		formData.append("email", email);
		formData.append("password", password);
		// login(formData, email, navigate);
	}
	return (
		<>
			<Box className="mainMob">
				<MainPage />
			</Box>

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
					marginTop: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "relative",
					top: 0,
					zIndex: 999,
				}}
			>
				<Box className="authBlock">
					<Box
						sx={{ margin: "30px", display: "flex", flexDirection: "column" }}
					>
						<Box sx={{ display: "flex", justifyContent: "space-between" }}>
							<Link to="/register">
								<img src={back} alt="" />
							</Link>
							<Link to="/">
								<img src={exit} alt="" />
							</Link>
						</Box>
						<Typography sx={{ margin: "40px auto", fontSize: "23px" }}>
							Вход
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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<br />
							<FormControl variant="outlined">
								<InputLabel htmlFor="outlined-adornment-password">
									Пароль
								</InputLabel>
								<OutlinedInput
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									id="outlined-adornment-password"
									type={showPassword ? "text" : "password"}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									}
									label="Password"
								/>
							</FormControl>
							<br />
							<Box
								sx={{
									display: "flex",
									justifyContent: "end",
								}}
							>
								<Link to="/confirm/password">
									<Typography
										sx={{
											color: "#2439F9",
											borderBottom: "2px solid #2439F9",
										}}
									>
										Забыли пароль ?
									</Typography>
								</Link>
							</Box>
						</Box>
						<Button
							onClick={() => SaveLog()}
							sx={{
								background: "#A07D50",
								color: "white",
								width: "200px",
								margin: "30px auto",
								textTransform: "capitalize",
							}}
						>
							Войти
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Login;
