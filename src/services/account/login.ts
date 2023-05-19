import React from "react";
import { useDispatch } from "react-redux";
import { baseAxios } from "../../utils/baseAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "../../store/hooks";
import { updateTokens } from "../../store/slices/auth.slice";
import { useNavigate } from "react-router-dom";

type loginAccountArg = {
	email: string;
	password: string;
};

export const useLoginAccount = () => {
	const dispatch = useAppDispatch();
	const queryClient = useQueryClient();
	const [errorMessage, setErrorMessage] = React.useState<string>("");
	const navigate = useNavigate();

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

	const mutation = useMutation({
		mutationFn: loginAccount,
		// onSuccess(data) {
		// 	dispatch(
		// 		updateTokens({ accessToken: data.access, refreshToken: data.refresh }),
		// 	);
		// },
		onSuccess: (data) => {
			if (data && data.access) {
				dispatch(
					updateTokens({
						accessToken: data.access,
						refreshToken: data.refresh,
					}),
				);
			}
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

	React.useEffect(() => {
		if (mutation.isSuccess && !errorMessage) {
			navigate("/");
		}
	}, [mutation.isSuccess, errorMessage, navigate]);

	return {
		loginAccount: mutation.mutateAsync,
		isLoading: mutation.isLoading,
		error: errorMessage,
		clearError: () => setErrorMessage(""),
		isSuccess: mutation.isSuccess && !errorMessage,
	};
	// return [mutation.mutateAsync, mutation, errorMessage] as const;
};
