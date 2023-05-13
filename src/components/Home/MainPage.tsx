import React from "react";
import mainBg from "../../media/images/main_bg.jpg";
import mobileBg from "../../media/images/mobile-bg.jpg";

import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const MainPage = () => {
	return (
		<div>
			<BackgroundBox>
				<Typography
					sx={{
						color: "#fff",
						fontFamily: "'Inter', sans-serif",
						fontWeight: "700",
						fontSize: "36px",
					}}
				>
					Подберем ресторан там, где удобно вам!
				</Typography>
				<SearchBar>
					<IconButton type="submit" aria-label="search">
						<SearchIcon />
					</IconButton>
					<StyledInputBase
						placeholder="Название ресторана..."
						inputProps={{ "aria-label": "search" }}
					/>
				</SearchBar>
			</BackgroundBox>
		</div>
	);
};

export default MainPage;

const BackgroundBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "110vh",
	background: `linear-gradient(rgba(55, 62, 68, 0.5), rgba(55, 62, 68, 0.5)), url(${mainBg})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	gap: "4rem",
	textAlign: "center",
	[theme.breakpoints.down(880)]: {
		background: `linear-gradient(rgba(55, 62, 68, 0.5), rgba(55, 62, 68, 0.5)), url(${mobileBg})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
}));

const SearchBar = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	height: "4.5rem",
	width: "55rem",
	borderRadius: 4,
	backgroundColor: "#fff",
	padding: "4px 8px",
	[theme.breakpoints.down("md")]: {
		width: "40rem",
	},
	[theme.breakpoints.down("sm")]: {
		width: "30rem",
	},
	[theme.breakpoints.down("xs")]: {
		width: "80%",
		marginLeft: "auto",
		marginRight: "auto",
	},
}));

const StyledInputBase = styled(InputBase)({
	marginLeft: 8,
	flex: 1,
});
