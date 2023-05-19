import React from "react";
import { useAppSelector } from "../../store/hooks";
import { baseAxios } from "../../utils/baseAxios";
import { Account } from "../../utils/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { setUser } from "../../store/slices/user.slice";
import { useAppDispatch } from "../../store/hooks";

export const useFetchUser = () => {
	const accessToken = useAppSelector((state) => state.auth.accessToken);
	const [errorMessage, setErrorMessage] = React.useState("");
	const dispatch = useAppDispatch();

	const fetchUser = async () => {
		try {
			const { data } = await baseAxios.get<Account>("/account/users/me/");

			return data;
		} catch (error) {
			console.log(error);
		}
	};

	const query = useQuery({
		queryFn: fetchUser,
		queryKey: ["account", accessToken],
		initialData: null,
		enabled: Boolean(accessToken),
		onSuccess: (data) => {
			const userData = {
				first_name: data.first_name,
				last_name: data.last_name,
				avatar: data.avatar,
			};
			localStorage.setItem(
				"user",
				JSON.stringify(userData, (key, value) => {
					if (key === "stateNode") {
						return undefined;
					}
					return value;
				}),
			);
			// localStorage.setItem("user", JSON.stringify(userData));
			dispatch(setUser(userData));
		},
	});

	const mutation = useMutation(fetchUser);

	return {
		fetchUser,
		query,
		user: query.data,
		errorFetch: errorMessage,
		clearErrorFetch: () => setErrorMessage(""),
	};
};
