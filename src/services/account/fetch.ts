import { useAppSelector } from "../../store/hooks";
import { baseAxios } from "../../utils/baseAxios";
import { Account } from "../../utils/types";
import { useQuery } from "@tanstack/react-query";

export const fetchAccount = async () => {
	const { data } = await baseAxios.get<Account>("account/profile");

	return data;
};

export const useFetchAccount = () => {
	const accessToken = useAppSelector((state) => state.auth.accessToken);

	const query = useQuery({
		queryFn: fetchAccount,
		queryKey: ["account", accessToken],
		initialData: null,
		enabled: Boolean(accessToken),
	});

	return [query.data, query] as const;
};
