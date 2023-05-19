import React from "react";
import { useMutation } from "@tanstack/react-query";
import { baseAxios } from "../../utils/baseAxios";
import { useNavigate } from "react-router-dom";
import { Restaurant } from "../../utils/types";

export const useCreateRestaurant = () => {
	const [errorMessage, setErrorMessage] = React.useState<string>("");
	const [sucessCreateRestaurant, setSuccessCreateRestaurant] =
		React.useState<boolean>(false);
	const navigate = useNavigate();

	const createRestaurant = async (arg: Restaurant) => {
		setErrorMessage("");
		try {
			const { data } = await baseAxios.post("/restaurant/create/", arg);
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
