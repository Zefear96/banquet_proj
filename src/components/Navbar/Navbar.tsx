// import logo from "../../assets/img/logo-line.svg"
import "./style.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useActions } from "../../hooks/UseActions";
import { useSelector } from "react-redux";
import ava from "../../media/images/ava.svg";
import heart from "../../media/images/heart.svg";
import { useFetchUser } from "../../services/account/fetchUser";
import { useNavigate } from "react-router-dom";

import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import RegisterModal from "../account/modals/RegisterModal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { checkTokenExists } from "../../store/slices/user.slice";
import { useLogout } from "../../services/account/logout";
import UserMenu from "./UserMenu";

const Navbar = () => {
	const user = useAppSelector((state) => state.user.data);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(checkTokenExists());
	}, [dispatch]);
	console.log(user);

	const navigate = useNavigate();

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null,
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null,
	);

	const handleOpenNavMenu = (
		event: React.MouseEvent<HTMLElement>,
		link: string,
	) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleModal = () => {
		<RegisterModal open={true} />;
	};

	return (
		<>
			<nav className="navbar">
				<Logo />
				{!user ? (
					<div className="login">
						<div className="mobile">
							<Link to="/login">
								<img src={heart} alt="favorite icon" className="fave" />
							</Link>
							<Link to="/register">
								<img src={ava} alt="ava icon" />
							</Link>
						</div>
						<div className="desktop">
							<Link to="/login">
								<h6 className="login-reg">Войти</h6>
							</Link>
							<span>/</span>
							<Link to="/register">
								<h6 className="login-reg" onClick={handleModal}>
									Регистрация
									{/* <RegisterModal open={true} /> */}
								</h6>
							</Link>
						</div>
					</div>
				) : (
					<UserMenu />
				)}
			</nav>
		</>
	);
};

export default Navbar;
