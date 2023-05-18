import React, { useState } from "react";
import RestaurantList from "../../RestaurantList";
import { Box, IconButton, Rating, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import SoupKitchenOutlinedIcon from "@mui/icons-material/SoupKitchenOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import "./Institution.scss";
import "../Infocard.scss";

import { NavLink } from "react-router-dom";
import { any } from "zod";
export const Institution = () => {
  const images: any = Array.from(
    { length: 10 },
    (_, i) => `https://loremflickr.com/640/480?random=${i + 1}`
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedImages, setLikedImages] = useState();
  new Array(images.length).fill(false);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // const toggleLike = () => {
  // 	const newLikedImages = [...likedImages];
  // 	newLikedImages[currentIndex] = !newLikedImages[currentIndex];
  // 	setLikedImages(newLikedImages);
  // };

  const getPrevImageIndex = () => {
    return (currentIndex - 1 + images.length) % images.length;
  };

  const getNextImageIndex = () => {
    return (currentIndex + 1) % images.length;
  };

  return (
    <>
      <Box className="restchose">
        <NavLink to="/">Главная </NavLink> / <Typography> Ресторан</Typography>
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
      <Box className="CarlNav">
        <Box>
          <Typography variant="h4">Паруса на крыше</Typography>
          <Typography variant="h5">РЕСТОРАН</Typography>
        </Box>
        <Rating
          name="text-feedback"
          value={4}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Box>
      <Box>
        <Box className="Carousel">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            overflow="hidden">
            <IconButton onClick={handlePrev}>
              <ArrowBackIos style={{ color: "#A07D50" }} />
            </IconButton>
            <Box width="70%" marginRight="-8rem">
              <img
                src={images[getPrevImageIndex()]}
                alt={images.name}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  opacity: "0.5",
                  borderRadius: "5px",
                }}
              />
            </Box>

            {/* current img */}
            <Box width="100%" position="relative" zIndex="5">
              <IconButton
                // onClick={toggleLike}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  // color: likedImages[currentIndex] ? "red" : "black",
                }}
                sx={{ backgroundColor: "#F5F4F1" }}>
                {/* {likedImages[currentIndex] ? <Favorite /> : <FavoriteBorder />} */}
              </IconButton>
              <img
                src={images[currentIndex]}
                alt={images.name}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "5px",
                }}
              />
              <Box
              // position="absolute"
              // bottom="5%"
              // left="43%"
              // transform="translate(-50%, 0)"
              // color="white"
              >
                <Typography
                  variant="body1"
                  fontFamily="'Inter', sans-serif"
                  fontSize="1.5rem"
                  fontWeight="700">
                  {currentIndex + 1} из {images.length}
                </Typography>
              </Box>
            </Box>

            {/* right img */}

            <Box width="70%" marginLeft="-8rem">
              <img
                src={images[getNextImageIndex()]}
                alt={images.name}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  opacity: "0.5",
                  borderRadius: "5px",
                }}
              />
            </Box>
            <IconButton onClick={handleNext}>
              <ArrowForwardIos style={{ color: "#A07D50" }} />
            </IconButton>
          </Box>

          <Box className="footcarosel">
            <Box className="footcaroselCard">
              <PinDropOutlinedIcon fontSize="large" sx={{ color: "#A07D50" }} />
              <Box className="ftCrdtwo">
                <Typography variant="h6">Адрес</Typography>
                <Typography>Жвс апвмвапм</Typography>
              </Box>
            </Box>

            <Box className="footcaroselCard">
              <SoupKitchenOutlinedIcon
                fontSize="large"
                sx={{ color: "#A07D50" }}
              />
              <Box className="ftCrdtwo">
                <Typography variant="h6">Кухня</Typography>
                <Typography>Жвс апвмвапм</Typography>
              </Box>
            </Box>
            <Box className="footcaroselCard">
              <PhoneInTalkOutlinedIcon
                fontSize="large"
                sx={{ color: "#A07D50" }}
              />
              <Box className="ftCrdtwo">
                <Typography variant="h6">Телефон заведения</Typography>
                <Typography>Жвс апвмвапм</Typography>
              </Box>
            </Box>
            <Box className="footcaroselCard">
              <CurrencyRubleIcon fontSize="large" sx={{ color: "#A07D50" }} />
              <Box className="ftCrdtwo">
                <Typography variant="h6">Средний чек</Typography>
                <Typography>Жвс апвмвапм</Typography>
              </Box>
            </Box>
            <Box className="footcaroselCard">
              <AccessTimeOutlinedIcon
                fontSize="large"
                sx={{ color: "#A07D50" }}
              />
              <Box className="ftCrdtwo">
                <Typography variant="h6">Время работы</Typography>
                <Typography>Жвс апвмвапм</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography className="additionally">
        «Паруса на крыше» – панорамный ресторан на 10 этаже бизнес-центра
        «Толстой Сквер». Насладиться блюдами от шефа здесь можно, любуясь
        завораживающим видом на Петербург с высоты птичьего полета – перед вами
        как на ладони купол Исаакиевского собора, шпиль Петропавловской
        крепости, бесконечная череда крыш и небо. Панорамные окна выходят сразу
        на три стороны, а в теплое время года прямо на крыше работает летняя
        терраса. Свидание двух романтиков, деловой обед с коллегами, тихий
        семейный ужин – повод окружить себя красотой может быть разным.
        Настоящую гармонию вкуса, комфорта и эстетического наслаждения вы
        найдете у нас – в «Парусах на крыше».
      </Typography>
    </>
  );
};
