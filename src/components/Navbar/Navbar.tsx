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

const Navbar = () => {
	const { query, errorFetch, clearErrorFetch, fetchUser } = useFetchUser();
	const logout = useLogout();

	// const [userInSys, setUserInSys] = React.useState(null);
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
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = (link: string) => {
		setAnchorElUser(null);
		navigate(link);
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
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="user avatar" src={user.avatar} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) =>
								setting.title === "Выйти" ? (
									<MenuItem
										key={setting.id}
										onClick={() => {
											handleCloseUserMenu(setting.link);
											logout();
										}}
									>
										<Typography textAlign="center">{setting.title}</Typography>
									</MenuItem>
								) : (
									<MenuItem
										key={setting.id}
										onClick={() => handleCloseUserMenu(setting.link)}
									>
										<Typography textAlign="center">{setting.title}</Typography>
									</MenuItem>
								),
							)}
						</Menu>
					</Box>
				)}
			</nav>
		</>
	);
};

export default Navbar;

const settings = [
	{
		title: "Профиль",
		link: "/profile",
		id: 1,
	},
	{
		title: "Настройки",
		link: "/profile/edit",
		id: 2,
	},
	{
		title: "Выйти",
		link: "/",
		id: 3,
	},
];
