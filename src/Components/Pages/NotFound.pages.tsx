import React from 'react';
import {Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const NotFoundPages = () => {
    return (
        <Container sx={{display: "flex", width: "60%", marginTop: "100px", alignItems: "center", height: "68vh"}}>
            <Typography className="textStroke404" variant="h1" component="h1">
                404
            </Typography>


            <div style={{display: "block", marginLeft: "43px", marginTop: "200px"}}>
                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "36px",
                    lineHeight: "113.5%",
                    color: "#000000"
                }} variant="h3" component="h2">
                    Упс, что-то
                    пошло не так...
                </Typography>

                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "113.5%",
                    color: "#000000",
                    marginTop: "20px"
                }} variant="h6" component="h2">
                    Обновите страницу
                    или повторите попытку позже
                </Typography>


                <Link to="/" style={{textDecoration: "none", display: "block", justifyContent: "center"}}>
                    <Typography sx={{
                        width: "160px",
                        height: "160px",
                        background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                        borderRadius: "50%",
                        marginTop: "50px",
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "15px",
                        lineHeight: "19px",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        textTransform: "uppercase"
                    }}>
                        вернуться <br/>
                        на главную
                    </Typography>
                </Link>
            </div>

        </Container>
    );
};

export default NotFoundPages;