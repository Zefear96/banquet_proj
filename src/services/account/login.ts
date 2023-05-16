import React from "react";
import { useDispatch } from "react-redux";
import { baseAxios } from "../../utils/baseAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "../../store/hooks";
import { updateTokens } from "../../store/slices/auth.slice";

type loginAccountArg = {
	email: string;
	password: string;
};

export const useLoginAccount = () => {
	const dispatch = useAppDispatch();
	const queryClient = useQueryClient();
	const [errorMessage, setErrorMessage] = React.useState<string>("");

	const loginAccount = async (arg: loginAccountArg) => {
		setErrorMessage("");

		try {
			const { data } = await baseAxios.post<{
				access: string;
				refresh: string;
			}>("/account/login/", arg);

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

	const mutation = useMutation(loginAccount, {
		onSuccess(data) {
			dispatch(
				updateTokens({ accessToken: data.access, refreshToken: data.refresh }),
			);
		},

		onError(error: any) {
			console.log("Error login", error);
			setErrorMessage(error.message);
		},

		onSettled() {
			queryClient.invalidateQueries({
				predicate(query) {
					return query.queryKey?.[0] === "account";
				},
			});
		},
	});

	return {
		loginAccount: mutation.mutateAsync,
		isLoading: mutation.isLoading,
		error: errorMessage,
		clearError: () => setErrorMessage(""),
		isSuccess: mutation.isSuccess && !errorMessage,
	};
	// return [mutation.mutateAsync, mutation, errorMessage] as const;
};
