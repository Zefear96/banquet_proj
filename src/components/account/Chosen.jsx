import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./person.scss";
import Delete from "../../img/delete.svg";
import StarIcon from "@mui/icons-material/Star";
import { PersonalArea } from "./PersonalArea";
import Footer from "../Footer";
export const Chosen = () => {
  return (
    <>
      <Box className="profcateg">
        <Box>
          <NavLink to="/">Главная </NavLink> /
          <NavLink to="/Mychosen"> Личный кабинет </NavLink>
        </Box>
        <PersonalArea />
        <Box sx={{ marginTop: "20px", width: "auto" }}>
          <Box className="Mychose">
            <NavLink to="/Myfeedback">
              <Typography>Мои отзывы</Typography>
              <Box className="textLine"></Box>
            </NavLink>
            <NavLink to="/Mychosen">
              <Typography>Избранное</Typography>
              <Box className="textLine"></Box>
            </NavLink>
          </Box>
          <Box className="line"></Box>
        </Box>
        <Box className="Chosen">
          <Typography>Избранные места | 3 места</Typography>

          <Box className="chosenCard">
            <Box>
              <img
                src="https://images.wallpaperscraft.ru/image/single/kafe_restoran_stolik_110567_3840x2160.jpg"
                alt=""
              />
              <Box className="deleteChosen1">
                <img src={Delete} alt="" /> Удалить
              </Box>
            </Box>
            <Box className="chosenCardIn">
              <Typography
                variant="h6"
                sx={{
                  color: "#A07D50",
                  fontSize: "24px",
                  fontWeight: "600",
                }}>
                Золотой Дракон
              </Typography>
              <Rating
                name="text-feedback"
                value={4}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Typography>Бишкек, Проспект Победы 351</Typography>
            </Box>
            <Box>
              <Box className="deleteChosen2">
                <img src={Delete} alt="" /> Удалить
              </Box>
              <Typography sx={{ textAlign: "end" }}>
                Банкетный чек на гостя: <br /> от 1000с{" "}
              </Typography>
            </Box>
          </Box>
          <Box className="chosenCard">
            <Box>
              <img
                src="https://images.wallpaperscraft.ru/image/single/kafe_restoran_stolik_110567_3840x2160.jpg"
                alt=""
              />
              <Box className="deleteChosen1">
                <img src={Delete} alt="" /> Удалить
              </Box>
            </Box>
            <Box className="chosenCardIn">
              <Typography
                variant="h6"
                sx={{
                  color: "#A07D50",
                  fontSize: "24px",
                  fontWeight: "600",
                }}>
                Золотой Дракон
              </Typography>
              <Rating
                name="text-feedback"
                value={4}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Typography>Бишкек, Проспект Победы 351</Typography>
            </Box>
            <Box>
              <Box className="deleteChosen2">
                <img src={Delete} alt="" /> Удалить
              </Box>
              <Typography sx={{ textAlign: "end" }}>
                Банкетный чек на гостя: <br /> от 1000с{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};
