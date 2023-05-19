import React from "react";
import logo from "../../media/images/logo.svg";
import Banquet from "../../media/images/Banquet.svg";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Logo = () => {
	const navigate = useNavigate();

	return (
		<div className="logo" onClick={() => navigate("/")}>
			<img src={logo} alt="logo-line" className="logo-line" />
			<img
				src={Banquet}
				alt="logo-line"
				className="logo-line"
				style={{ cursor: "pointer" }}
			/>
		</div>
	);
};

export default Logo;
