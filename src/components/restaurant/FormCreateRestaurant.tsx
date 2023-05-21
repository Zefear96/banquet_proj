import React, { useCallback, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useCreateRestaurant } from "../../services/restaurant/createRestaurant";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import { useDropzone } from "react-dropzone";
import { Button } from "@mui/material";
import CustomAlert from "../account/CustomAlert";

const restaurantFormSchema = z.object({
	title: z.string(),
	price_people: z.string(),
	locate: z.string(),
	working_hours: z.string(),
	features: z.string(),
	image: z
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

const FormCreateRestaurant = () => {
	const { createRestaurant, isSuccess, error } = useCreateRestaurant();

	const formik = useFormik({
		initialValues: {
			title: "",
			price_people: "",
			locate: "",
			working_hours: "",
			features: "",
			image: null,
		},
		validationSchema: toFormikValidationSchema(restaurantFormSchema),
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			const restObj = { ...values, image: files };
			createRestaurant(restObj);

			resetForm();
			setUploadedImages([]);
			setFiles([]);
		},
	});

	const [uploadedImages, setUploadedImages] = useState([]);
	console.log(uploadedImages);
	const [files, setFiles] = React.useState([]);
	console.log(files);

	const onDrop = useCallback((acceptedFiles) => {
		// Создаем превью для каждого загруженного файла
		const previews = acceptedFiles.map((file) => URL.createObjectURL(file));
		setUploadedImages((prevImages) => [...prevImages, ...previews]);

		// Обработка загруженных файлов
		console.log(acceptedFiles);
		setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	const deleteImage = (index) => {
		setUploadedImages((prevImages) => {
			const updatedImages = [...prevImages];
			updatedImages.splice(index, 1);
			return updatedImages;
		});
	};

	const handleFileInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const files = event.currentTarget.files;
		if (files && files.length > 0) {
			const imagesArray = Array.from(files).map((file) =>
				URL.createObjectURL(file),
			);
			setUploadedImages((prevImages) => [...prevImages, ...imagesArray]);
			console.log(files);

			// formik.setFieldValue("image", files); // Set the array of files as the value
			// setFiles(Array.from(files));
		}
	};

	return (
		<Container
			sx={{
				width: "90%",
				margin: "50px auto",
			}}
		>
			<h1 style={{ margin: "20px auto 20px 0" }}>Добавить заведение</h1>
			<p
				style={{ width: "80%", margin: "20px auto 50px 0", fontSize: "1.1rem" }}
			>
				Создайте уникальную страницу своего заведения, чтобы получить
				возможность рассказать о нем многомиллионной аудитории и увеличить
				посещаемость.
			</p>
			<form
				onSubmit={formik.handleSubmit}
				style={{
					display: "flex",
					margin: "auto",
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
				// encType="multipart/form-data"
			>
				<Box sx={{ width: "45%" }}>
					<Stack spacing={3}>
						<TextField
							id="title"
							name="title"
							label="Название"
							variant="outlined"
							fullWidth
							value={formik.values.title}
							onChange={formik.handleChange}
							error={formik.touched.title && Boolean(formik.errors.title)}
							// helperText={
							// 	formik.touched.title && formik.errors.title
							// }
						/>
						<TextField
							id="price_people"
							name="price_people"
							label="Средний чек"
							variant="outlined"
							fullWidth
							value={formik.values.price_people}
							onChange={formik.handleChange}
							error={
								formik.touched.price_people &&
								Boolean(formik.errors.price_people)
							}
							// helperText={
							// 	formik.touched.price_people && formik.errors.price_people
							// }
						/>
						<TextField
							id="locate"
							name="locate"
							label="Адрес"
							variant="outlined"
							fullWidth
							value={formik.values.locate}
							onChange={formik.handleChange}
							error={formik.touched.locate && Boolean(formik.errors.locate)}
							// helperText={
							// 	formik.touched.locate && formik.errors.locate
							// }
						/>
						<TextField
							id="working_hours"
							name="working_hours"
							label="Режим работы"
							variant="outlined"
							fullWidth
							value={formik.values.working_hours}
							onChange={formik.handleChange}
							error={
								formik.touched.working_hours &&
								Boolean(formik.errors.working_hours)
							}
							// helperText={
							// 	formik.touched.working_hours && formik.errors.working_hours
							// }
						/>
						<TextField
							multiline
							id="features"
							name="features"
							label="Описание"
							variant="outlined"
							fullWidth
							value={formik.values.features}
							onChange={formik.handleChange}
							error={formik.touched.features && Boolean(formik.errors.features)}
							// helperText={
							// 	formik.touched.features && formik.errors.features
							// }
						/>
					</Stack>
				</Box>
				<Box sx={{ width: "45%", display: "flex", flexDirection: "column" }}>
					<div
						{...getRootProps()}
						style={{
							border: "1px dashed black",
							minHeight: "200px",
							width: "100%",
							borderRadius: "10px",
						}}
					>
						<input {...getInputProps()} onChange={handleFileInputChange} />
						{isDragActive ? (
							<p style={{ margin: "10px" }}>Перетащите файлы сюда...</p>
						) : (
							<p style={{ margin: "10px" }}>
								Перетащите файлы сюда или нажмите, чтобы выбрать файлы
							</p>
						)}
						{uploadedImages.map((image, index) => (
							<div
								key={index}
								style={{
									position: "relative",
									margin: "10px",
									zIndex: "2",
									display: "inline-block",
								}}
							>
								<div style={{ position: "relative", display: "inline-block" }}>
									<img
										src={image}
										alt={`Preview ${index}`}
										key={index}
										style={{
											width: "100px",
											height: "100px",
											objectFit: "contain",
											border: "1px dashed black",
											borderRadius: "10px",
											margin: "10px",
										}}
									/>
									<button
										onClick={() => deleteImage(index)}
										style={{
											position: "absolute",
											top: "20%",
											right: "-5%",
											transform: "translate(-50%, -50%)",
											zIndex: 1,
										}}
									>
										<DeleteForeverIcon color="error" />
									</button>
								</div>
							</div>
						))}
					</div>
					<Button
						type="submit"
						variant="outlined"
						style={{
							background: "rgba(160, 125, 80, 1)",
							color: "white",
							margin: "20px auto",
							// position: "absolute",
							// bottom: "0",
						}}
					>
						Добавить
					</Button>
				</Box>
			</form>
			{isSuccess ? (
				<CustomAlert
					type={"success"}
					message={"Ваше объявление успешно создано"}
				/>
			) : null}
			{error ? <CustomAlert type={"error"} message={error} /> : null}
		</Container>
	);
};

export default FormCreateRestaurant;
