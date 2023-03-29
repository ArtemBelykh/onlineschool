import React from 'react';
import {Rating, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import {styleSliderItems} from "../Screen/FifthScreen";

const OneReviews = () => {
    const value = 3.5;
    return (
        <Box sx={styleSliderItems}>


            <div style={{position: "absolute", left: window.screen.width < 900 ? "190px" : "300px", top: "0", zIndex: "10000"}}>
                <img style={{position: "absolute", zIndex: "1"}} src="/reviews/reviews.png" alt="reviews"/>
                <img style={{position: "absolute", zIndex: "0", top: "60px", left: "-30px"}} src="/circel2.png"
                     alt="circel2"/>
            </div>


            <div style={{padding: "30px"}}>
                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "23px",
                    marginBottom: "10px"
                }} variant="h4" component="h2">
                    Иванов Иван
                </Typography>

                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "19px",
                    marginBottom: "10px",
                    color: "rgba(0, 0, 0, 0.5)"
                }} variant="h4" component="h2">
                    г. Галич
                </Typography>

                <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />

                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "20px"
                }} variant="h6" component="h2">
                    Хочется выразить огромную благодарность автошколе "право на права", инструктору Дмитрию
                    Анатольевичу, он знает чему и как учит,ни одно занятие не прошло впустую. Он профессионал, я
                    советую тем кто задумывается ещё в какую автошколу идти.
                </Typography>
            </div>
        </Box>
    );
};

export default OneReviews;