import { Box, Button, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./reviews.scss";
import StarIcon from "@mui/icons-material/Star";
import line from "../../../../media/images/LineComment.svg";
import { ReviewsModal } from "./ReviewsModal";
import React from "react";
export const Reviews = () => {
  const [modal, SetModal] = React.useState<string>("none");
  console.log(modal);
  return (
    <>
      <Box>
        <Box className="restchose">
          <NavLink to="/">Главная </NavLink> /{" "}
          <Typography> Ресторан</Typography>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            width: "95vw",
            margin: "auto",
            marginBottom: "120px",
          }}>
          <Box className="Mychosecd">
            <NavLink to="/in">
              <Typography>О ЗАВЕДЕНИИ</Typography>
              <Box className="textLine"></Box>
            </NavLink>
            <NavLink to="/menu">
              <Typography>МЕНЮ</Typography>
              <Box className="textLine"></Box>
            </NavLink>
            <NavLink to="/reviews">
              <Typography>ОТЗЫВЫ</Typography>
              <Box className="textLine"></Box>
            </NavLink>
          </Box>
          <Box className="line1"></Box>
        </Box>
        <Box className="reviews">
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px",
            }}>
            <Typography variant="h5">
              Всего 21 отзыв о ресторане «Паруса на крыше»
            </Typography>
            <Button onClick={() => SetModal("block")}>Добавить отзыв</Button>
          </Box>
        </Box>
        <Box className="reviews">
          <Box className="reviewsCrd">
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  margin: "20px",
                }}>
                <Box sx={{ display: "flex" }}>
                  <Box className="avatar"></Box>
                  <Box>
                    <Typography>dsvsdvfv dfvdfv</Typography>

                    <Typography>24 vfhnf 2023ujl</Typography>
                  </Box>
                </Box>
                <Rating
                  name="text-feedback"
                  value={4}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </Box>
            </Box>
            <img className="lineImg" src={line} alt="" />{" "}
            <Typography className="reviewsText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus harum reprehenderit at accusantium eveniet atque facilis
              maxime consectetur, sit, numquam vitae quidem rerum eos
              perferendis alias mollitia nostrum architecto placeat.
            </Typography>
          </Box>
        </Box>
        <Box display={modal}>
          <ReviewsModal modal={SetModal} />
        </Box>
      </Box>
    </>
  );
};
