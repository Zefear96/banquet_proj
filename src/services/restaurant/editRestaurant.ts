import { useMutation } from "react-query";
import { baseAxios } from "../../utils/baseAxios";
import { Restaurant } from "../../utils/types";
import React from "react";
import { useNavigate } from "react-router-dom";

type editRestaurantArg = {
	id: number;
	data: Partial<Restaurant>;
};

export const useEditRestaurant = () => {
	const formData = new FormData();
	const [errorMessage, setErrorMessage] = React.useState<string>("");
	const navigate = useNavigate();

	const editRestaurant = async (arg: editRestaurantArg) => {
		setErrorMessage("");
		try {
			for (const [key, value] of Object.entries(arg.data)) {
				if (value instanceof Blob) {
					formData.append(key, value);
				} else if (value !== null && value !== undefined && value !== "") {
					formData.append(key, value.toString());
				}
			}

			const res = await baseAxios.put<Restaurant>(
				`/restaurant/update/${arg.id}`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				},
			);
			console.log(res);

			return res.data;
		} catch (error) {
			if (error.response) {
				console.log(error);

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

	const mutation = useMutation(editRestaurant);

	return {
		editAccount: mutation.mutateAsync,
		error: errorMessage,
		clearError: () => setErrorMessage(""),
		isSuccess: mutation.isSuccess && !errorMessage,
	};
};
