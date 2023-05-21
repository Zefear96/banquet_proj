import React from "react";
import { useMutation } from "@tanstack/react-query";
import { baseAxios } from "../../utils/baseAxios";
import { useNavigate } from "react-router-dom";
import { Restaurant } from "../../utils/types";

type createRestaurant = {
	title: string;
	price_people: string;
	locate: string;
	working_hours: string;
	features: string;
	image: any;
};

export const useCreateRestaurant = () => {
	const [errorMessage, setErrorMessage] = React.useState<string>("");
	const [sucessCreateRestaurant, setSuccessCreateRestaurant] =
		React.useState<boolean>(false);
	const navigate = useNavigate();

	const createRestaurant = async (arg: createRestaurant) => {
		console.log(arg);

		setErrorMessage("");
		const formData = new FormData();

		try {
			for (const [key, value] of Object.entries(arg)) {
				if (value !== null && value !== undefined && value !== "") {
					if (key === "image") {
						// Если свойство является массивом файлов
						if (Array.isArray(value)) {
							value.forEach((file) => {
								formData.append("image", file); // Используйте имя поля "image" для каждого файла
							});
						} else {
							// Если свойство является одиночным файлом
							formData.append("image", value);
						}
					} else {
						formData.append(key, value.toString());
					}
				}
			}

			const { data } = await baseAxios.post("/restaurant/create/", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			return data;
		} catch (error) {
			if (error.response) {
				setErrorMessage(
					Object.values(error.response.data).flat(2)[0] as string,
				);
			} else if (error.request) {
				setErrorMessage("Сервер не отвечает");
			} else {
				setErrorMessage("Возникла ошибка при настройке запроса");
			}
			return null;
		}
	};

	const mutation = useMutation(createRestaurant);

	// React.useEffect(() => {
	// 	if (mutation.isSuccess && !errorMessage) {
	// 		navigate("/profile");
	// 	}
	// }, [mutation.isSuccess, errorMessage, navigate]);

	return {
		createRestaurant: mutation.mutateAsync,
		isLoading: mutation.isLoading,
		error: errorMessage,
		clearError: () => setErrorMessage(""),
		isSuccess: mutation.isSuccess && !errorMessage,
	};
};
