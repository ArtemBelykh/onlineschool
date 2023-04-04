import React from 'react';
import {Container, Typography} from "@mui/material";
import Slider from "react-slick";
import OneReviews from "../Reviews/One.reviews";

export const styleSliderItems = {
    width: window.screen.width < 900 ? "330px !important" : "457px !important" ,
    height: "100%",
    border: "1px solid #DB241C",
    borderRadius: "20px",
    cursor: "poiner"
}

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src="/Arrow%201.png" alt="arrow"/>
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, position: "absolute !important", bottom: "0"}}
            onClick={onClick}
        >
            <img style={{transform: "scaleX(-1)",transformOrigin: "center", transformBox: "fill-box"}} src="/Arrow%201.png" alt="arrow"/>
        </div>
    );
}


const FifthScreen = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: window.screen.width < 900 ? 1 : 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Container id="reviews" sx={{width: "65%", marginTop: "70px", height: "600px"}} className="adaptive__reviews_height">

            <Typography sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "30px",
                textTransform: "uppercase",
                color: "rgba(0, 0, 0, 0.5)",
                marginBottom: "20px"
            }} variant="h6" component="h2">
                Отзывы
            </Typography>


            <Slider {...settings} className="sliderSlider">
                <OneReviews/>
                <OneReviews/>
                <OneReviews/>
            </Slider>

        </Container>
    );
};

export default FifthScreen;