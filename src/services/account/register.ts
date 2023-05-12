import { useMutation } from "@tanstack/react-query";
import { baseAxios } from "../../utils/baseAxios";

type RegisterAccountArg = {
	email: string;
	password: string;
	password2: string;
	category: string;
};

const registerAccount = async (arg: RegisterAccountArg) => {
	const { data } = await baseAxios.post("/account/register/", arg);

	return data;
};

export const useRegisterAccount = () => {
	const mutation = useMutation({
		mutationFn: registerAccount,
	});
};
