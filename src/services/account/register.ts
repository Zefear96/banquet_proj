import React from "react";
import { useMutation } from "@tanstack/react-query";
import { baseAxios } from "../../utils/baseAxios";
import { useNavigate } from "react-router-dom";

type RegisterAccountArg = {
	email: string;
	password: string;
	password2: string;
	category: string;
};

export const useRegisterAccount = () => {
	const [errorMessage, setErrorMessage] = React.useState<string>("");
	const [sucessRegister, setSuccessRegister] = React.useState<boolean>(false);
	const navigate = useNavigate();

	const registerAccount = async (arg: RegisterAccountArg) => {
		setErrorMessage("");
		try {
			const { data } = await baseAxios.post("/account/register/", arg);
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

	const mutation = useMutation(registerAccount);

	React.useEffect(() => {
		if (mutation.isSuccess && !errorMessage) {
			navigate("/login");
		}
	}, [mutation.isSuccess, errorMessage, navigate]);

	return {
		registerAccount: mutation.mutateAsync,
		isLoading: mutation.isLoading,
		error: errorMessage,
		clearError: () => setErrorMessage(""),
		isSuccess: mutation.isSuccess && !errorMessage,
	};
};
