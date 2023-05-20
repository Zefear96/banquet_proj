import React, { useEffect, useRef } from "react";
import {
	Avatar,
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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";
import Delete from "@mui/icons-material/DeleteOutline";
import "./styles/edit.scss";
import "./styles/person.scss";
import { useEditUser } from "../../services/account/editUser";
import { z } from "zod";
import { fetchUser, useFetchUser } from "../../services/account/fetchUser";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { AddAPhoto } from "@mui/icons-material";
import { useAppSelector } from "../../store/hooks";

const userFormSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	avatar: z
		.union([
			z.string().url().optional(),
			(typeof window !== "undefined" ? z.instanceof(File) : z.any())
				.refine((file) => {
					if (!file) {
						// If no file is uploaded, skip validation
						return true;
					}
					const validTypes = ["image/jpeg", "image/png", "image/gif"];
					if (!validTypes.includes(file.type)) {
						throw new Error(
							"Неверный формат файла! Пожалуйста, загрузите файл в формате JPEG, PNG или GIF.",
						);
					}
					const maxSize = 15000000; // 15mb
					if (file.size > maxSize) {
						throw new Error(
							"Максимальный размер файла 15 MB. Пожалуйста, загрузите файл меньшего размера.",
						);
					}
					return true;
				})
				.nullable()
				.optional(),
		])
		.optional(),
});

const EditProfile = () => {
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	// const { editUser, error, isSuccess } = useEditUser();
	const [editUser] = useEditUser();

	const [currentUser] = useFetchUser();
	const user = useAppSelector((state) => state.user.data);
	// const [user] = useFetchUser();
	const [previousValues, setPreviousValues] = React.useState({
		first_name: "",
		last_name: "",
	});

	console.log(user);

	const [fileOpen, setFileOpen] = React.useState(false);
	const [file, setFile] = React.useState(null);

	const formik = useFormik({
		initialValues: {
			first_name: currentUser?.first_name || "",
			last_name: currentUser?.last_name || "",
			avatar: currentUser?.avatar || "",
		},
		validationSchema: toFormikValidationSchema(userFormSchema),
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			const updatedValues = { ...values, avatar: file };
			editUser(updatedValues);
			resetForm();
		},
	});

	const handleFileInputChange = (e) => {
		const selectedFile = e.currentTarget.files[0];
		// const newAvatar = selectedFile ? selectedFile : null;
		setFile(selectedFile);
	};

	useEffect(() => {
		if (user) {
			formik.setValues({
				first_name: currentUser.first_name || "",
				last_name: currentUser.last_name || "",
				avatar: currentUser.avatar || "",
			});
		}
		fetchUser();
	}, [user, fetchUser]);

	if (!user) return <h1>Not Found</h1>;

	return (
		<Box className="profcateg">
			<Box className="path">
				<NavLink to="/">Главная </NavLink> /
				<NavLink to="/profile"> Личный кабинет </NavLink> /
				<NavLink to="/profile/edit"> Редактировать профиль </NavLink>
			</Box>
			<form
				onSubmit={formik.handleSubmit}
				className=" register-form"
				style={{ width: "90%", margin: "auto" }}
			>
				<Box className="edit">
					<Box className="BlockLeft">
						<Typography variant="h5" style={{ marginBottom: "20px" }}>
							Личные данные
						</Typography>
						<div
							style={{
								background: "rgba(160, 125, 80, 0.6)",
								width: "140px",
								height: "140px",
								borderRadius: "50%",
								position: "relative",
							}}
						>
							<Avatar
								src={formik.values.avatar}
								style={{
									position: "absolute",
									right: "15%",
									top: "15%",
									width: "100px",
									height: "100px",
								}}
							/>
							<input
								id="avatar"
								name="avatar"
								type="file"
								accept="image/jpeg, image/png, image/gif"
								style={{ display: "none" }}
								onChange={handleFileInputChange}
							/>
						</div>
						<label htmlFor="avatar">
							<Button
								variant="contained"
								component="span"
								startIcon={<AddAPhoto />}
								style={{
									margin: "10px auto",
									background: "rgba(160, 125, 80, 1)",
								}}
							>
								Add Photo
							</Button>
						</label>
					</Box>

					<Box className="BlockRight">
						<Stack spacing={2}>
							<TextField
								id="first_name"
								name="first_name"
								label="First Name"
								variant="outlined"
								fullWidth
								value={formik.values.first_name}
								onChange={formik.handleChange}
								error={
									formik.touched.first_name && Boolean(formik.errors.first_name)
								}
								// helperText={
								// 	formik.touched.first_name && formik.errors.first_name
								// }
							/>
							<TextField
								id="last_name"
								name="last_name"
								label="Last Name"
								variant="outlined"
								fullWidth
								value={formik.values.last_name}
								onChange={formik.handleChange}
								error={
									formik.touched.last_name && Boolean(formik.errors.last_name)
								}
								// helperText={formik.touched.last_name && formik.errors.last_name}
							/>
							<Button
								type="submit"
								style={{
									background: "rgba(160, 125, 80, 1)",
									color: "white",
									width: "50%",
									margin: "10px auto",
								}}
							>
								Сохранить
							</Button>
						</Stack>
					</Box>
					<Box>
						{/* <Typography>Изменить пароль</Typography>
		          <FormControl variant="outlined">
		            <InputLabel htmlFor="outlined-adornment-password">
		              Password
		            </InputLabel>
		            <OutlinedInput
		              id="outlined-adornment-password"
		              type={showPassword ? "text" : "password"}
		              endAdornment={
		                <InputAdornment position="end">
		                  <IconButton
		                    aria-label="toggle password visibility"
		                    onClick={handleClickShowPassword}
		                    onMouseDown={handleMouseDownPassword}
		                    edge="end">
		                    {showPassword ? <Visibility /> : <VisibilityOff />}
		                  </IconButton>
		                </InputAdornment>
		              }
		              label="Password"
		            />
		          </FormControl>{" "}
		          <FormControl variant="outlined">
		            <InputLabel htmlFor="outlined-adornment-password">
		              Password
		            </InputLabel>
		            <OutlinedInput
		              id="outlined-adornment-password"
		              type={showPassword ? "text" : "password"}
		              endAdornment={
		                <InputAdornment position="end">
		                  <IconButton
		                    aria-label="toggle password visibility"
		                    onClick={handleClickShowPassword}
		                    onMouseDown={handleMouseDownPassword}
		                    edge="end">
		                    {showPassword ? <Visibility /> : <VisibilityOff />}
		                  </IconButton>
		                </InputAdornment>
		              }
		              label="Password"
		            />
		          </FormControl> */}
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default EditProfile;
