import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomAlert = ({ message, type }) => {
	const [open, setOpen] = React.useState(true);
	console.log(message, type);

	// const handleClick = () => {
	// 	setOpen(true);
	// };
	if (message === "user with this email already exists.") {
		message = "Пользователь с указанной почтой уже существует!";
	}

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default CustomAlert;
