import {
  Box,
  Button,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import "./reviews.scss";
import exit from "../../../../media/images/exit.svg";
export const ReviewsModal = ({ modal }) => {
  return (
    <>
      <Box className="reviewsModal">
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <img src={exit} alt="" onClick={() => modal("none")} />
        </Box>
        <Typography>Оставить отзыв</Typography>
        <TextField
          sx={{ width: "95%", marginTop: "10px" }}
          id="outlined-multiline-flexible"
          label="Отзыв"
          multiline
          maxRows={8}
        />
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button className="reviewsBtn">Добавить</Button>
        </Box>
      </Box>
    </>
  );
};
