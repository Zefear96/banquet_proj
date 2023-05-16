import React, { useState } from "react";
import {
	Alert,
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
import { z } from "zod";
import { useLoginAccount } from "../../services/account/login";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

const loginFormSchema = z.object({
	email: z
		.string()
		.email("Некорректный email адрес")
		.nonempty("Заполните данные"),

	password: z.string().nonempty("Заполните данные"),
});

const LoginForm = () => {
	const [showPassword, setShowPassword] = React.useState(false);
	const navigate = useNavigate();
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const { loginAccount, error, clearError } = useLoginAccount();

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: toFormikValidationSchema(loginFormSchema),
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			loginAccount(values);
		},
	});

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

						<Box sx={{ height: "70px", margin: "20px" }}>
							{error && (
								<Alert
									severity="error"
									// onClose={}
									// sx={{ marginBottom: "10px" }}
								>
									{error === "user with this email already exists."
										? "Пользователь с такой почтой уже существует!"
										: error}
								</Alert>
							)}

							{/* {isSuccess ? (
								<Alert
									severity="success"
									onClose={clearError}
									sx={{ margin: "10px" }}
								>
									"Аккаунт успешно создан! Проверьте почту для активации
									аккаунта"
								</Alert>
							) : null} */}
						</Box>

						<Typography sx={{ margin: "40px auto", fontSize: "23px" }}>
							Вход
						</Typography>

						<form onSubmit={formik.handleSubmit}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									flexDirection: "column",
								}}
							>
								<TextField
									id="email"
									name="email"
									label="Email"
									variant="outlined"
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={
										formik.touched.email && formik.errors.email ? true : false
									}
									// helperText={
									// 	formik.touched.email && formik.errors.email
									// 		? formik.errors.email
									// 		: ""
									// }
								/>
								<br />
								<FormControl variant="outlined">
									<InputLabel htmlFor="outlined-adornment-password">
										Пароль
									</InputLabel>
									<OutlinedInput
										id="outlined-adornment-password"
										label="Пароль"
										name="password"
										value={formik.values.password}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										error={
											formik.touched.password && formik.errors.password
												? true
												: false
										}
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
									/>
									{/* {formik.touched.password && formik.errors.password
										? formik.errors.password
										: ""} */}
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
								sx={{
									background: "#A07D50",
									color: "white",
									width: "200px",
									margin: "30px auto",
									textTransform: "capitalize",
								}}
								type="submit"
							>
								Войти
							</Button>
						</form>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default LoginForm;
