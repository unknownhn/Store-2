import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './App.css';

import "../../App.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { axiosRequest } from "../../utils/axiosRequest";
import { useNavigate, Link } from "react-router-dom";
import { saveToken } from "../../utils/token";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = {
      userName: event.target["email"].value,
      password: event.target["password"].value,
    };
    console.log(user);
    try {
      const { data } = await axiosRequest.post("Account/login", user);
      console.log(data.data);
      saveToken(data.data);
      navigate("/Admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=' ml-[-230px] bg-white '>
      <div className=" flex justify-center pt-[30px] items-end ">
        <div className=" flex">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          // dur
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative left-[405px] mt-[25px] rounded-[20px] "
      >
      </Swiper> 
          <div>
            <img  src="src/assets/images/frames.svg" alt="" />    
          </div>
          <div>
        <div
        className=' border-[1px] p-[30px]'
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <div className=' flex justify-center'>
        <img className='w-[200px]'
        src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" alt="" />
            </div>
            <div className=' flex justify-center'>
            <input
              margin="normal"
              className=' w-[280px] p-[10px] border-[1px] '

              required
              // fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder='Телефон, имя пользователья или эл.почта'
            />
            </div>
            <div className=' flex justify-center mt-[10px]'>
            <input
            className=' w-[280px] p-[10px] border-[1px]'
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder='Пароль'
            />
            </div>
            
            <div className=' text-white p-[5px] bg-blue-400 mt-[20px] flex justify-center rounded-[10px]'>
            <button
            className='  '
              type="submit"
            >
            Войти
          </button>
            </div>
            <div className=' p-[10px] flex justify-center'>
              <img src="src/assets/images/separator.png" alt="" />
            </div>
            <div className=' p-[10px] flex justify-center'>
              <img src="src/assets/images/continue with google.png" alt="" />
            </div>
            <div className=' flex justify-center p-[10px]'>
              <p>Забыли пароль ?</p>
            </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                У вас ещё нет аккаунта? 
                <Link to={"registration"}>
                <span className=' text-blue-600'>Зарегистрироваться</span>
                </Link>
                </Link>
              </Grid>
            </Grid>
          </Box>
          
        </div>
          <div className=' p-[20px] flex justify-center'>
          Установите приложение.

          </div>
          <div className=' flex justify-center'>
            <img src="src/assets/images/links.png" alt="" />
          </div>
          </div>
        </div>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </div>
    </div>
  );

}
