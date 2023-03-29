import React from 'react';
import {Container, Typography} from "@mui/material";

const HowToChooseADrivingSchoolForABeginnerArticle = () => {
    return (
        <Container sx={{display: "flex", width: "60%", marginTop: "100px", alignItems: "center", height: "68vh"}}>
            <Typography sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "36px",
                lineHeight: "113.5%",
                color: "#000000",
                textAlign: "center"
            }} variant="h3" component="h2">
                Рабочие программы
            </Typography>
        </Container>
    );
};

export default HowToChooseADrivingSchoolForABeginnerArticle;