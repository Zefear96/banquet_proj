import React, { useState } from "react";
import Button from "@mui/material/Button";

const ActiveButton = ({ action }) => {
	const [hover, setHover] = useState(false);
	const [clicked, setClicked] = useState(false);

	const handleMouseOver = () => {
		setHover(true);
	};

	const handleMouseLeave = () => {
		setHover(false);
	};

	const buttonStyle = {
		backgroundColor: clicked ? "white" : hover ? "#C7AE8F" : "#A07D50",
		color: clicked ? "black" : "white",
		width: "9rem",
		height: "2.5rem",
	};

	const handleClick = () => {
		setClicked(true);
	};

	return (
		<Button
			variant="contained"
			style={buttonStyle}
			onMouseOver={handleMouseOver}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
		>
			{action}
		</Button>
	);
};

export default ActiveButton;
