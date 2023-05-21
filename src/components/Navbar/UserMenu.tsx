import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../services/account/logout";
import { useAppSelector } from "../../store/hooks";
import { useFetchUser } from "../../services/account/fetchUser";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -2,
		top: 10,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
		background: "red",
	},
}));

const UserMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const logout = useLogout();
	const user = useAppSelector((state) => state.user.data);
	// const [currentUser] = useFetchUser();

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = (link: string) => {
		setAnchorElUser(null);
		navigate(link);
	};

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null,
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null,
	);

	return (
		<React.Fragment>
			<Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
				<Typography sx={{ minWidth: 100 }}>
					<IconButton
						aria-label="favorite"
						sx={{ width: "40px", height: "40px" }}
						onClick={() => navigate("/profile/favorites")}
					>
						<StyledBadge badgeContent={4} color="secondary">
							<FavoriteBorderIcon fontSize="large" />
						</StyledBadge>
					</IconButton>
				</Typography>
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
					>
						<Avatar
							alt="user avatar"
							src={user.avatar}
							style={{
								border: "2px solid rgba(160, 125, 80, 1)",
								width: "50px",
								height: "50px",
							}}
						/>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={() => {
					handleClose();
					navigate("/profile");
				}}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem
					onClick={() => {
						handleClose();
						navigate("/profile");
					}}
				>
					<ListItemIcon>
						<PermIdentityIcon fontSize="small" />
					</ListItemIcon>
					Профиль
				</MenuItem>
				<Divider />
				<MenuItem
					onClick={() => {
						handleClose();
						navigate("/profile/edit");
					}}
				>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					Настройки
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleClose();
						logout();
					}}
				>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Выйти
				</MenuItem>
			</Menu>
		</React.Fragment>
	);
};

export default UserMenu;

{
	/* {settings.map((setting) =>
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
				)} */
}

// const settings = [
// 	{
// 		title: "Профиль",
// 		link: "/profile",
// 		id: 1,
// 	},
// 	{
// 		title: "Настройки",
// 		link: "/profile/edit",
// 		id: 2,
// 	},
// 	{
// 		title: "Выйти",
// 		link: "/",
// 		id: 3,
// 	},
// ];
