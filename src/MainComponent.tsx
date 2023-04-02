import React from 'react';
import {Container, Typography} from "@mui/material";

const MainComponent = () => {

    return (
        <Container sx={{width: "65%", marginTop: "70px", height: "600px"}} className="adaptive__reviews_height">

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
                Сайт не работает!
            </Typography>

        </Container>
    );
};

export default MainComponent;
