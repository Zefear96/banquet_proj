import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";
import price from "../../../../media/images/price.svg";

export const Menu = () => {
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
            <Typography className="p1">МЕНЮ</Typography>
            <Box className="textLine"></Box>
          </NavLink>
          <NavLink to="/reviews">
            <Typography className="p1">ОТЗЫВЫ</Typography>
            <Box className="textLine"></Box>
          </NavLink>
        </Box>
        <Box className="line1"></Box>
      </Box>
      <Typography
        variant="h5"
        sx={{
          width: "95vw",
          margin: " 20px auto",
          color: "#A07D50",
          fontWeight: 600,
        }}>
        МЕНЮ "ПАРУСА НА КРЫШЕ"
      </Typography>
      <Box className="menu">
        <Card className="cardMenu" sx={{ maxWidth: 300, marginTop: "50px" }}>
          <CardActionArea>
            <CardMedia
              className="cardMenuImg"
              component="img"
              height="220"
              image="https://klopotenko.com/wp-content/uploads/2021/04/azy-z-telyatyny_siteweb.jpg?v=1618491086"
              alt="green iguana"
            />
            <Box className="MenuPrice">
              <Typography className="MenuPriceText">220 сом</Typography>{" "}
              <img src={price} alt="" />
            </Box>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="cardMenu" sx={{ maxWidth: 300, marginTop: "50px" }}>
          <CardActionArea>
            <CardMedia
              className="cardMenuImg"
              component="img"
              height="220"
              image="https://klopotenko.com/wp-content/uploads/2021/04/azy-z-telyatyny_siteweb.jpg?v=1618491086"
              alt="green iguana"
            />
            <Box className="MenuPrice">
              <Typography className="MenuPriceText">220 сом</Typography>{" "}
              <img src={price} alt="" />
            </Box>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="cardMenu" sx={{ maxWidth: 300, marginTop: "50px" }}>
          <CardActionArea>
            <CardMedia
              className="cardMenuImg"
              component="img"
              height="220"
              image="https://klopotenko.com/wp-content/uploads/2021/04/azy-z-telyatyny_siteweb.jpg?v=1618491086"
              alt="green iguana"
            />
            <Box className="MenuPrice">
              <Typography className="MenuPriceText">220 сом</Typography>{" "}
              <img src={price} alt="" />
            </Box>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="cardMenu" sx={{ maxWidth: 300, marginTop: "50px" }}>
          <CardActionArea>
            <CardMedia
              className="cardMenuImg"
              component="img"
              height="220"
              image="https://klopotenko.com/wp-content/uploads/2021/04/azy-z-telyatyny_siteweb.jpg?v=1618491086"
              alt="green iguana"
            />
            <Box className="MenuPrice">
              <Typography className="MenuPriceText">220 сом</Typography>{" "}
              <img src={price} alt="" />
            </Box>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="cardMenu" sx={{ maxWidth: 300, marginTop: "50px" }}>
          <CardActionArea>
            <CardMedia
              className="cardMenuImg"
              component="img"
              height="220"
              image="https://klopotenko.com/wp-content/uploads/2021/04/azy-z-telyatyny_siteweb.jpg?v=1618491086"
              alt="green iguana"
            />
            <Box className="MenuPrice">
              <Typography className="MenuPriceText">220 сом</Typography>{" "}
              <img src={price} alt="" />
            </Box>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="cardMenu" sx={{ maxWidth: 300, marginTop: "50px" }}>
          <CardActionArea>
            <CardMedia
              className="cardMenuImg"
              component="img"
              height="220"
              image="https://klopotenko.com/wp-content/uploads/2021/04/azy-z-telyatyny_siteweb.jpg?v=1618491086"
              alt="green iguana"
            />
            <Box className="MenuPrice">
              <Typography className="MenuPriceText">220 сом</Typography>{" "}
              <img src={price} alt="" />
            </Box>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="cardMenu" sx={{ maxWidth: 300, marginTop: "50px" }}>
          <CardActionArea>
            <CardMedia
              className="cardMenuImg"
              component="img"
              height="220"
              image="https://klopotenko.com/wp-content/uploads/2021/04/azy-z-telyatyny_siteweb.jpg?v=1618491086"
              alt="green iguana"
            />
            <Box className="MenuPrice">
              <Typography className="MenuPriceText">220 сом</Typography>{" "}
              <img src={price} alt="" />
            </Box>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="cardMenu" sx={{ maxWidth: 300, marginTop: "50px" }}>
          <CardActionArea>
            <CardMedia
              className="cardMenuImg"
              component="img"
              height="220"
              image="https://klopotenko.com/wp-content/uploads/2021/04/azy-z-telyatyny_siteweb.jpg?v=1618491086"
              alt="green iguana"
            />
            <Box className="MenuPrice">
              <Typography className="MenuPriceText">220 сом</Typography>{" "}
              <img src={price} alt="" />
            </Box>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};
