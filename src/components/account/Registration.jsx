import React from "react";
import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import back from "../../img/back.svg";
import exit from "../../img/exit.svg";
import { useActions } from "../hooks/UseActions";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MainPage from "../../pages/Main";
import "./auth.scss";
export const Registration = () => {
  const { Register } = useActions();
  const navigate = useNavigate();
  // ! Password
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword1 = () => setShowPassword1(show => !show);
  const handleMouseDownPassword1 = event => {
    event.preventDefault();
  };
  const handleClickShowPassword2 = () => setShowPassword2(show => !show);
  const handleMouseDownPassword2 = event => {
    event.preventDefault();
  };
  // ?Password

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, SetConfirmPass] = useState("");
  const [category, SetCategory] = useState("default");
  console.log(category);
  function SaveReg() {
    if (!email.trim() || !password.trim() || !confirmPass.trim()) {
      alert("Неправильно");
      return;
    }
    if (password !== confirmPass) {
      alert("пароли не совпадают");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", confirmPass);
    Register(formData, navigate);
  }
  return (
    <>
      <Box className="mainMob">
        <MainPage />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "110vh",
          position: "absolute",
          zIndex: 10,
          background: "rgba(120, 120, 120, 0.8)",
        }}></Box>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: 0,
          zIndex: 999,
        }}>
        <Box Box className="authBlock">
          <Box
            sx={{ margin: "30px", display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link to="/login">
                <img src={back} alt="" />
              </Link>
              <Link to="/">
                <img src={exit} alt="" />
              </Link>
            </Box>
            <Typography sx={{ margin: "40px auto", fontSize: "23px" }}>
              Регистрация
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}>
              <TextField
                id="outlined-basic"
                label="Логин"
                variant="outlined"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <br />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Пароль
                </InputLabel>
                <OutlinedInput
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  // id="outlined-adornment-password"
                  type={showPassword1 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        onMouseDown={handleMouseDownPassword1}
                        edge="end">
                        {showPassword1 ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <br />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Подтверждение пароля
                </InputLabel>
                <OutlinedInput
                  value={confirmPass}
                  onChange={e => SetConfirmPass(e.target.value)}
                  id="outlined-adornment-password"
                  type={showPassword2 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                        edge="end">
                        {showPassword2 ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <br />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <FormControl sx={{ color: "#989B9E" }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group">
                    <FormControlLabel
                      value="default"
                      onChange={() => SetCategory("default")}
                      control={<Radio />}
                      label="Гость"
                    />
                    <FormControlLabel
                      value=" business"
                      onChange={() => SetCategory("business")}
                      control={<Radio />}
                      label="Ресторатор"
                    />
                  </RadioGroup>
                </FormControl>
                <NavLink
                  to="/login"
                  style={{
                    height: "auto",
                    color: "#2439F9",
                    borderBottom: "2px solid #2439F9",
                  }}>
                  Уже зарегистрированы ?
                </NavLink>
              </Box>
            </Box>
            <Button
              onClick={SaveReg}
              sx={{
                background: "#A07D50",
                color: "white",
                width: "200px",
                margin: "50px auto",
                textTransform: "capitalize",
              }}>
              Зарегистрироваться
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
