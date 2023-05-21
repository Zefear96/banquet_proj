import { useMutation } from "@tanstack/react-query";
import { baseAxios } from "../../utils/baseAxios";
import { Account } from "../../utils/types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { fetchUser } from "./fetchUser";

type editUserArg = {
	first_name: string;
	last_name: string;
	avatar: any;
};

const editUser = async (arg: editUserArg) => {
	// const [errorMessage, setErrorMessage] = React.useState<string>("");
	console.log(arg);

	const formData = new FormData();

	try {
		for (const [key, value] of Object.entries(arg)) {
			if (value !== null && value !== undefined && value !== "") {
				if (value instanceof Blob) {
					formData.append(key, value);
				} else {
					formData.append(key, value.toString());
				}
			}
		}

		const { data } = await baseAxios.put<Account>(
			"/account/update/",
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			},
		);
		console.log(data);

		return data;
	} catch (error) {
		if (error.response) {
			console.log(error);
			// setErrorMessage(Object.values(error.response.data).flat(2)[0] as string);
		} else if (error.request) {
			// setErrorMessage("Сервер не отвечает");
		} else {
			// setErrorMessage("Возникла ошибка при настройке запроса");
		}
		return null;
	}
};

export const useEditUser = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: editUser,
		onSettled() {
			queryClient.invalidateQueries(["account"]);
		},
	});

	return [mutation.mutateAsync, mutation] as const;
};
