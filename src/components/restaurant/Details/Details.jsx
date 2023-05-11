import React, { useState }  from 'react';
import './Details.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Menu from './Menu';
import Carousel from 'react-bootstrap/Carousel';

const Details = () => {
    const navigate = useNavigate()
  
  return (
    <div className="details_con">
        <div className='details' >
            <div className="details_block">

                <div className="details_router">
                    <span className='details_span' onClick={() => navigate('/home')} >Главная / </span>
                    <span className='details_span' onClick={() => navigate('/')} > Рестораны</span>

                    <Box sx={{ marginTop: "40px", width: "auto" }}>
                        <Box className="Mychose" sx={{display: 'flex'}}>
                            <NavLink >
                            <Typography>О заведение</Typography>
                            <Box className="textLine"></Box>
                            </NavLink>
                            <NavLink >
                            <Typography>Меню (6)</Typography>
                            <Box className="textLine"></Box>
                            </NavLink>
                        </Box>
                        <Box className="line"></Box>
                    </Box>
                </div>

                <div className="details_search">
                    <input className='dateils_input' type="search" placeholder='Название ресторана' />
                </div>

            </div>

            <div className="details_content">
                <div className="content_zogo">
                    <h1 className="content_title">Паруса на крыше</h1>
                    <h2 className="content_text">Ресторан</h2>
                </div>

                <div className="content_rating">
                <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </Stack>

                <div className='content_favorite' >
                    <span className='content_likes'>160</span>
                </div>
                </div>
            </div>

            <div className="dateils_slider">
                {/* <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgs6LhW_5BFf5Lxkty7SqAg7-fJTOBbMboE0Bq5tA&s"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgs6LhW_5BFf5Lxkty7SqAg7-fJTOBbMboE0Bq5tA&s"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgs6LhW_5BFf5Lxkty7SqAg7-fJTOBbMboE0Bq5tA&s"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}

                    <div className="slider_addres">
                        <h4>Address</h4>
                        <h5 className='slider_text' >Ул. Львя Толстого 9</h5>
                    </div>

                    <div className="slider_addres">
                        <h4>Address</h4>
                        <h5 className='slider_text' >Ул. Львя Толстого 9</h5>
                    </div>


                    <div className="slider_addres">
                        <h4>Address</h4>
                        <h5 className='slider_text' >Ул. Львя Толстого 9</h5>
                    </div>

                    <div className="slider_addres">
                        <h4>Address</h4>
                        <h5 className='slider_text' >Ул. Львя Толстого 9</h5>
                    </div>

                    <div className="slider_addres">
                        <h4>Address</h4>
                        <h5 className='slider_text' >Ул. Львя Толстого 9</h5>
                    </div>
                </div>

                <div className='info'>
                    <p className="details_info">
                        «Паруса на крыше» – панорамный ресторан на 10 этаже бизнес-центра «Толстой Сквер». Насладиться блюдами от шефа здесь можно, любуясь завораживающим видом на Петербург с высоты птичьего полета – перед вами как на ладони купол Исаакиевского собора, шпиль Петропавловской крепости, бесконечная череда крыш и небо. Панорамные окна выходят сразу на три стороны, а в теплое время года прямо на крыше работает летняя терраса.
                        Свидание двух романтиков, деловой обед с коллегами, тихий семейный ужин – повод окружить себя красотой может быть разным. Настоящую гармонию вкуса, комфорта и эстетического наслаждения вы найдете у нас – в «Парусах на крыше».
                    </p>
                </div>

                <div className="details_food">
                    <h2 style={{color: '#A07D50'}} >Популярные блюда в меню ресторана «Паруса на крыше»</h2>
                    <div className="food_block">
                        <div className='food_card' >
                            <img className='img' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                            <h5 style={{color: '#373E44', textAlign: 'center'}} >Салат с хрустящими баклажанами и сливочным сыром</h5>
                        </div>
                        <div className='food_card' >
                            <img className='img' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                            <h5 style={{color: '#373E44', textAlign: 'center'}} >Салат с хрустящими баклажанами и сливочным сыром</h5>
                        </div>

                        <div className='food_card' >
                            <img className='img' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                            <h5 style={{color: '#373E44', textAlign: 'center'}} >Салат с хрустящими баклажанами и сливочным сыром</h5>
                        </div>

                        <div className='food_card' >
                            <img className='img' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                            <h5 style={{color: '#373E44', textAlign: 'center'}} >Салат с хрустящими баклажанами и сливочным сыром</h5>
                        </div>

                        <div className='food_card' >
                            <img className='img' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                            <h5 style={{color: '#373E44', textAlign: 'center'}} >Салат с хрустящими баклажанами и сливочным сыром</h5>
                        </div>

                        <div className='food_card' >
                            <img className='img' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                            <h5 style={{color: '#373E44', textAlign: 'center'}} >Салат с хрустящими баклажанами и сливочным сыром</h5>
                        </div>

                        <div className='food_card' >
                            <img className='img' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                            <h5 style={{color: '#373E44', textAlign: 'center'}} >Салат с хрустящими баклажанами и сливочным сыром</h5>
                        </div>

                        <div className='food_card' >
                            <img className='img' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                            <h5 style={{color: '#373E44', textAlign: 'center'}} >Салат с хрустящими баклажанами и сливочным сыром</h5>
                        </div>

                        <div className='food_card' >
                            <img className='img' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                            <h5 style={{color: '#373E44', textAlign: 'center'}} >Салат с хрустящими баклажанами и сливочным сыром</h5>
                        </div>

                        <div className='food_card' >
                            <img className='img' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                            <h5 style={{color: '#373E44', textAlign: 'center'}} >Салат с хрустящими баклажанами и сливочным сыром</h5>
                        </div>
                    </div>

                    <button className="food_btn">
                        Показать больше
                    </button>
                </div>

        </div>
                <Menu/>
    </div>
  )
}

export default Details