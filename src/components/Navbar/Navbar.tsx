// import logo from "../../assets/img/logo-line.svg"
import "./style.scss";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useActions } from "../../hooks/UseActions";
import { useSelector } from "react-redux";
import ava from "../../media/images/ava.svg";
import fave from "../../media/images/fave.svg";
import { useFetchAccount } from "../../services/account/fetch";
import { useNavigate } from "react-router-dom";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

export const Navbar = () => {
	const [account, { isLoading, isError }] = useFetchAccount();
	const navigate = useNavigate();
	// const { profile } = useSelector((store) => store.todo);
	// const { getprofile } = useActions();
	// useEffect(() => {
	// 	getprofile();
	// }, []);

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null,
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null,
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<>
			{account ? (
				// profile.map((item) => (
				// 	<nav className="navbar">
				// 		<Link to="/">
				// 			<Logo />
				// 		</Link>
				// 		<Link to="/Myfeedback">
				// 			<div className="avatar">{item.email[0]}</div>
				// 		</Link>
				// 	</nav>
				// ))
				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt="user avatar" src={account.avatar} />
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
						{settings.map((setting) => (
							<MenuItem
								key={setting.id}
								onClick={() => {
									handleCloseUserMenu;
									navigate(setting.link);
								}}
							>
								<Typography textAlign="center">{setting.title}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			) : (
				<nav className="navbar">
					<Logo />
					<div className="login">
						<div className="mobile">
							<Link to="/login">
								<img src={fave} alt="favorite icon" className="fave" />
							</Link>
							<Link to="/register">
								<img src={ava} alt="ava icon" />
							</Link>
						</div>
						<div className="desktop">
							<Link to="/login">
								<h6 className="login-reg">Войти</h6>
							</Link>
							<p>/</p>
							<Link to="/register">
								<h6 className="login-reg">Регистрация</h6>
							</Link>
						</div>
					</div>
				</nav>
			)}
		</>
	);
};

const settings = [
	{
		title: "Profile",
		link: "/account/profile",
		id: 1,
	},
	{
		title: "Settings",
		link: "/account/settings",
		id: 2,
	},
	{
		title: "Logout",
		link: "/",
		id: 3,
	},
];
