import React from 'react';
import {Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const SecondScreen = () => {
    return (
        <Container id="about" className={"SecondScreenAdaptive"} sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
            flexWrap: "wrap",
            marginTop: "100px"
        }}>

            <div className="adaptPuz" style={{position: "absolute", left: "0", marginTop: "300px", zIndex: "-1"}}><img
                style={{width: "100%", height: "100%"}} src="/puz/puz1.png" alt="puz1"/></div>
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
                }}>Автошкола «Право на права плюс» — автошкола в Костроме, которая профессионально обучит будущих водителей
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
                    }} to={'/license'}>Правоустанавливающие документы</Link>

                </div>
            </div>

            <div className="secondImages">
                <img style={{width: "322px", height: "467px"}} alt={"О школе"} src="/secondImages.jpg"/>
            </div>


        </Container>
    );
};

export default SecondScreen;