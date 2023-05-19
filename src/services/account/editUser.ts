import { useMutation } from "@tanstack/react-query";
import { baseAxios } from "../../utils/baseAxios";
import { Account } from "../../utils/types";
import React from "react";
import { useNavigate } from "react-router-dom";

type editUserArg = {
	first_name: string;
	last_name: string;
	avatar: any;
};

export const useEditUser = () => {
	const formData = new FormData();
	const [errorMessage, setErrorMessage] = React.useState<string>("");
	const navigate = useNavigate();

	const editUser = async (arg: editUserArg) => {
		setErrorMessage("");
		try {
			// for (const [key, value] of Object.entries(arg)) {
			// 	if (value instanceof Blob) {
			// 		formData.append(key, value);
			// 	} else if (value !== null && value !== undefined && value !== "") {
			// 		formData.append(key, value.toString());
			// 	}
			// }

			for (const [key, value] of Object.entries(arg)) {
				if (value !== null && value !== undefined && value !== "") {
					if (value instanceof Blob) {
						formData.append(key, value);
					} else {
						formData.append(key, value.toString());
					}
				}
			}

			const res = await baseAxios.put<Account>("/account/update/", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log(res.data);
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

	const mutation = useMutation(editUser);

	return {
		editUser: mutation.mutateAsync,
		error: errorMessage,
		clearError: () => setErrorMessage(""),
		isSuccess: mutation.isSuccess && !errorMessage,
	};
};