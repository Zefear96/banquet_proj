import React from "react";
import "./style.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<Link to="/">
				<Logo />
			</Link>
			<ul className="links">
				<li>ссылки наших партнёров </li>
				<li>ссылки наших партнёров </li>
				<li>©2023 Junior.dev Все права защищены </li>
			</ul>
		</footer>
	);
};

export default Footer;
