import React from 'react';
import {Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const SecondScreen = () => {
    return (
        <Container id="about" sx={{display: "flex", justifyContent: "space-around", width: "60%", flexWrap: "wrap"}}>

            <div style={{width: "400px"}}>
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
                    о школе
                </Typography>

                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "36px",
                    lineHeight: "114.5%",
                    color: "#000000"
                }} variant="h4" component="h2">
                    Мы научим Вас водить
                    лучше, чем ходить!
                </Typography>

                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "133.5%",
                    color: "#000000",
                    marginTop: "20px",
                    marginBottom: "25px"
                }}>«Автошкола «Право на Права» — автошкола в Костроме, которая профессионально обучит будущих водителей
                    транспортных средств категории "А" и "В". Наша теоретическая подготовка и курсы помогут Вам получить
                    отличные навыки вождения и успешно сдать экзамены в ГИБДД.</Typography>


                <div className="adaptive__link_second">
                    <Link style={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "17px",
                        lineHeight: "25px",
                        color: "#DB241C",
                        textDecoration: "none"
                    }} to={'/license'}>Лицензии</Link>

                    <Link style={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "17px",
                        lineHeight: "25px",
                        color: "#DB241C",
                        marginLeft: "50px",
                        textDecoration: "none"
                    }} to={'/work-programs'}>Рабочие программы</Link>
                </div>
            </div>

            <div className="secondImages">
                <img style={{width: "322px", height: "467px"}} src="/secondImages.png"/>
            </div>


        </Container>
    );
};

export default SecondScreen;