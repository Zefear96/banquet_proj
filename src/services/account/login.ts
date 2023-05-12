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

const loginAccount = async (arg: loginAccountArg) => {
	const { data } = await baseAxios.post<{ access: string; refresh: string }>(
		"/account/login/",
		arg,
	);

	return data;
};

export const useLoginAccount = () => {
	const dispatch = useAppDispatch();
	const queryClient = useQueryClient();
	const [errorMessage, setErrorMessage] = React.useState<string>("");

	const mutation = useMutation({
		mutationFn: loginAccount,

		onSuccess(data) {
			dispatch(
				updateTokens({ accessToken: data.access, refreshToken: data.refresh }),
			);
		},

		onError(error: any) {
			console.log("Error login", error);
			setErrorMessage(error);
		},

		onSettled() {
			queryClient.invalidateQueries({
				predicate(query) {
					return query.queryKey?.[0] === "account";
				},
			});
		},
	});

	return [mutation.mutateAsync, mutation, errorMessage] as const;
};
