import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RegisterForm from "../RegisterForm";
import MainPage from "../../Home/MainPage";
import "../styles/auth.scss";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const RegisterModal = ({ open }: { open: boolean }) => {
	const [openModal, setOpenModal] = React.useState(false);
	const handleOpen = () => setOpenModal(true);
	const handleClose = () => setOpenModal(false);

	return (
		<div>
			<Box className="mainMob">
				<MainPage />
			</Box>
			<Modal
				open={openModal}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<RegisterForm />
				</Box>
			</Modal>
		</div>
	);
};

export default RegisterModal;
