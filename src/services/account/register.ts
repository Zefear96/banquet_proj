import React from "react";
import { useMutation } from "@tanstack/react-query";
import { baseAxios } from "../../utils/baseAxios";

type RegisterAccountArg = {
	email: string;
	password: string;
	password2: string;
	category: string;
};

export const useRegisterAccount = () => {
	const [errorMessage, setErrorMessage] = React.useState<string>("");

	const registerAccount = async (arg: RegisterAccountArg) => {
		try {
			const { data } = await baseAxios.post("/account/register/", arg);
			return data;
		} catch (error) {
			if (error.response) {
				// const errorData = error.response.data;
				// const errorString = Array.isArray(errorData)
				// 	? (errorData.flat(2)[0] as string)
				// 	: String(errorData);
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

	const mutation = useMutation(registerAccount);

	return {
		registerAccount: mutation.mutateAsync,
		isLoading: mutation.isLoading,
		error: errorMessage,
		clearError: () => setErrorMessage(""),
	};
};
