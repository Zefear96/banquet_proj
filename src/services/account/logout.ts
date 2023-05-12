import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { updateTokens } from "../../store/slices/auth.slice";

export const useLogout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logout = useCallback(() => {
		dispatch(updateTokens({ accessToken: null, refreshToken: null }));
		// navigate("/");
	}, [dispatch, navigate]);

	return logout;
};
