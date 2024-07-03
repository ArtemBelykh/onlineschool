import React from 'react';
import {Rating, Typography} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import {styleSliderItems} from "../Screen/FifthScreen";

const IndexReviews = ({name, text, city}: any) => {
    const value = 5;
    return (
        <Box sx={styleSliderItems}>

            <div style={{padding: "30px", height: "270px"}}>
                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "23px",
                    marginBottom: "10px"
                }} variant="h4" component="h2">
                    {name}
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
                    {city}
                </Typography>

                <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                />

                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "20px"
                }} variant="h6" component="h2">
                    {text}
                </Typography>
            </div>
        </Box>
    );
};

export default IndexReviews;