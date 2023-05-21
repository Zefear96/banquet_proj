import React from "react";
import { useAppSelector } from "../../store/hooks";
import { baseAxios } from "../../utils/baseAxios";
import { Account } from "../../utils/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { setUser } from "../../store/slices/user.slice";
import { useAppDispatch } from "../../store/hooks";

export const fetchUser = async () => {
	try {
		const { data } = await baseAxios.get<Account>("/account/users/me/");
		console.log(data);

		const userData = {
			first_name: data.first_name,
			last_name: data.last_name,
			avatar: data.avatar,
			email: data.email,
			category: data.category,
			favorites: data.favorites,
		};

		return userData;
	} catch (error) {
		console.log(error);
	}
};

export const useFetchUser = () => {
	const accessToken = useAppSelector((state) => state.auth.accessToken);
	// const [errorMessage, setErrorMessage] = React.useState("");
	const dispatch = useAppDispatch();

	const query = useQuery({
		queryFn: fetchUser,
		queryKey: ["account", accessToken],
		initialData: null,
		enabled: Boolean(accessToken),
		onSuccess: async (data) => {
			localStorage.setItem("user", JSON.stringify(data));
			dispatch(setUser(data));
		},
	});

	const mutation = useMutation(fetchUser);

	// return {
	// 	fetchUser,
	// 	query,
	// 	user: query.data,
	// 	errorFetch: errorMessage,
	// 	clearErrorFetch: () => setErrorMessage(""),
	// };
	return [query.data, query] as const;
};
