import React, { useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";
import Delete from "@mui/icons-material/DeleteOutline";
import "./edit.scss";
import "./person.scss";
import { useActions } from "../hooks/UseActions";
import { useState } from "react";
import Footer from "../Footer";
import { useSelector } from "react-redux";

export const EditProfile = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const name = localStorage.getItem("name");
  const last = localStorage.getItem("last");

  const { EditAccount } = useActions();
  const [first_name, setName] = useState(name);
  const [last_name, setLast] = useState(last);
  const [username, setUser] = useState("");
  const [avatar, setAvatar] = useState("");
  console.log(avatar);
  function editProf() {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("avatar", avatar);
    EditAccount(formData);
    localStorage.setItem("name", first_name);
    localStorage.setItem("last", last_name);
  }
  return (
    <>
      <Box className="profcateg">
        <Box className="path">
          <NavLink to="/">Главная </NavLink> /
          <NavLink to="/Myfeedback"> Личный кабинет </NavLink> /
          <NavLink to="/editProfile"> Редактировать профиль </NavLink>
        </Box>
        <Box className="edit">
          <Box className="BlockLeft">
            <Typography variant="h5">Личные данные</Typography>
            <label className="feedback__label">
              К
              <input
                accept="image/png, image/jpeg"
                type="file"
                id="file_in"
                className="feedback__file"
                value={avatar}
                onChange={e => setAvatar(e.target.value)}
              />
            </label>
            <Typography sx={{ display: "flex", color: "#787878" }}>
              <Delete /> Удалить фото
            </Typography>
          </Box>
          <Box className="BlockRight">
            <Box>
              <Typography> Имя и Фамилия на сайте</Typography>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Имя
                </InputLabel>
                <OutlinedInput
                  value={first_name}
                  onChange={e => setName(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Visibility className="inpIcon" />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Фамилия
                </InputLabel>
                <OutlinedInput
                  value={last_name}
                  onChange={e => setLast(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Visibility className="inpIcon" />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box>
              {/* <Typography>Изменить пароль</Typography>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>{" "}
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl> */}
            </Box>
            <Button onClick={() => editProf()} className="edProfBt">
              Сохранить
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
