import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { z } from "zod";
import { useRegisterAccount } from "../../services/account/register";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { toFormikValidationSchema } from "zod-formik-adapter";

import {
	Alert,
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormLabel,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Radio,
	RadioGroup,
	Stack,
	TextField,
	Typography,
	FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import back from "../../media/images/back.svg";
import exit from "../../media/images/exit.svg";
import { log } from "console";

const registrationFormSchema = z
	.object({
		email: z
			.string()
			.email("Invalid email")
			.nonempty("Это поле не может быть пустым"),
		password: z
			.string()
			.nonempty("Это поле не может быть пустым")
			.min(6, "Длина пароля не менее 6 символов"),
		password2: z.string().nonempty("Это поле не может быть пустым"),
		category: z.string().nonempty("Это поле не может быть пустым"),
	})
	.refine((val) => val.password === val.password2, {
		message: "Пароли не совпадают!",
		path: ["password2"],
	});

const RegisterForm = () => {
	const { registerAccount, isLoading, error, clearError } =
		useRegisterAccount();
	const navigate = useNavigate();

	// ! Password
	const [showPassword1, setShowPassword1] = React.useState(false);
	const [showPassword2, setShowPassword2] = React.useState(false);

	const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
	const handleMouseDownPassword1 = (event) => {
		event.preventDefault();
	};
	const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
	const handleMouseDownPassword2 = (event) => {
		event.preventDefault();
	};
	// ?Password

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			password2: "",
			category: "",
		},
		validationSchema: toFormikValidationSchema(registrationFormSchema),
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			registerAccount(values);

			console.log(error);

			resetForm();
		},
	});

	return (
		<>
			{error && (
				<Alert severity="error" onClose={clearError}>
					{error === "user with this email already exists."
						? "Данный пользователь уже существует!"
						: error}
				</Alert>
			)}
			<Box>
				<IconButton component={NavLink} to="/">
					<img src={back} alt="back" />
				</IconButton>
				<IconButton
					component={Link}
					to="/"
					sx={{
						position: "absolute",
						top: 20,
						right: 20,
					}}
				>
					<img src={exit} alt="exit" />
				</IconButton>
				<Typography variant="h4" sx={{ textAlign: "center", my: 4 }}>
					Регистрация
				</Typography>

				<form
					onSubmit={formik.handleSubmit}
					className=" register-form"
					style={{ width: "50%", margin: "auto" }}
				>
					<Stack spacing={2}>
						<TextField
							id="email"
							name="email"
							label="Email"
							variant="outlined"
							fullWidth
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.email && formik.errors.email ? true : false}
							helperText={
								formik.touched.email && formik.errors.email
									? formik.errors.email
									: ""
							}
						/>

						<FormControl
							variant="outlined"
							fullWidth
							error={
								formik.touched.password && formik.errors.password ? true : false
							}
						>
							<InputLabel htmlFor="password">Пароль</InputLabel>
							<OutlinedInput
								id="password"
								name="password"
								type={showPassword1 ? "text" : "password"}
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword1}
											onMouseDown={handleMouseDownPassword1}
											edge="end"
										>
											{showPassword1 ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Пароль"
							/>
							<FormHelperText>
								{formik.touched.password && formik.errors.password
									? formik.errors.password
									: ""}
							</FormHelperText>
						</FormControl>

						<FormControl
							variant="outlined"
							fullWidth
							error={
								formik.touched.password2 && formik.errors.password2
									? true
									: false
							}
						>
							<InputLabel htmlFor="password2">Подтверждение пароля</InputLabel>
							<OutlinedInput
								id="password2"
								name="password2"
								type={showPassword2 ? "text" : "password"}
								value={formik.values.password2}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword2}
											onMouseDown={handleMouseDownPassword2}
											edge="end"
										>
											{showPassword2 ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Подтверждение пароля"
							/>
							<FormHelperText>
								{formik.touched.password2 && formik.errors.password2
									? formik.errors.password2
									: ""}
							</FormHelperText>
						</FormControl>

						<FormControl sx={{ color: "#989B9E" }}>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								name="category"
								value={formik.values.category}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							>
								<FormControlLabel
									value="default"
									// onChange={() => SetCategory("default")}
									control={<Radio />}
									label="Гость"
								/>
								<FormControlLabel
									value="business"
									// onChange={() => SetCategory("business")}
									control={<Radio />}
									label="Ресторатор"
								/>
							</RadioGroup>
							{formik.touched.category && formik.errors.category && (
								<FormHelperText>{formik.errors.category}</FormHelperText>
							)}
						</FormControl>
						<NavLink
							to="/login"
							style={{
								height: "auto",
								color: "#2439F9",
								borderBottom: "2px solid #2439F9",
							}}
						>
							Уже зарегистрированы? Войти
						</NavLink>

						<Button
							type="submit"
							variant="contained"
							style={{ background: "rgba(160, 125, 80, 1)" }}
						>
							Зарегистрироваться
						</Button>
					</Stack>
				</form>
			</Box>
		</>
	);
};

export default RegisterForm;
