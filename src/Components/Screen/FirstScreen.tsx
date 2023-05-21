import React from 'react';
import {Card, CardContent, Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import ModalMain from "../ModalMain";
import {ImageSchool} from "../ImageSchool";

const styleH5 = {
    width: "80%",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "35px",
    lineHeight: "114.5%"
}

const FirstScreen = () => {
    return (
        <>
            <Container className="fistScreenContainer__adaptive " sx={{marginTop: "120px", height: "100%"}}>
                <Typography className="fistScreenH5__adaptive" variant="h5" component="h2" sx={styleH5}>Обретите свободу
                    передвижения и юридическое
                    сопровождение вместе с Автошколой <b style={{color: "#DB1C1C"}}>"Право на Права"!</b></Typography>

                <ImageSchool src={"/mainIMG.webp"} placeholderSrc={"/mainIMG-small.webp"}
                             className="image_main__adaptive"
                             style={{width: "100%", height: "auto", marginTop: "50px", zIndex: "0"}}
                             alt={"Сайт в городе Костроме и Галиче"}
                />
                {/*<img className="image_main__adaptive"*/}
                {/*     style={{width: "100%", height: "auto", marginTop: "50px", zIndex: "0"}}*/}
                {/*     src="/mainIMG.png" alt="main"/>*/}

                <div className="circeBtn__adaptive" style={{display: "none"}}>
                    <ModalMain styleBtn={{
                        width: "120px",
                        height: "120px",
                        background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                        borderRadius: "50%",
                        fontSize: "11px"
                    }} variantBtn="contained"
                               titleBtn="Записаться на обучение"/>
                </div>

                <Box className="fistScreenBox__adaptive" style={{zIndex: "1"}} sx={{
                    position: "relative",
                    background: "white",
                    width: "100%",
                    height: "200px",
                    zIndex: "5",
                    boxShadow: "0px 0px 9px rgba(0, 0, 0, 0.25)",
                    borderRadius: "0px 0px 58px 58px",
                    marginTop: "-110px",
                }}>
                    <Card className="fistScreenBoxCard__adaptive" style={{zIndex: "1"}} sx={{
                        maxWidth: "100%",
                        height: "100%",
                        boxShadow: "none",
                        borderRadius: "58px 58px 58px 58px",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}>
                        <CardContent>
                            <ImageSchool style={{width: "130px", height: "130px"}} src="/pc.png" alt="Онлайн и офлайн обучение"/>
                        </CardContent>
                        <CardContent>
                            <ImageSchool style={{width: "130px", height: "130px"}} src="/teacher.png" alt="Опытные преподаватели"/>
                        </CardContent>
                        <CardContent>
                            <ImageSchool style={{width: "130px", height: "130px"}} src="/cars.png" alt="Своя площадкадля учебной езды"/>
                        </CardContent>
                        <CardContent>
                            <ImageSchool style={{width: "130px", height: "130px"}} src="/Maps.png" alt="Гибкая система оплаты"/>
                        </CardContent>
                    </Card>
                </Box>
            </Container>

        </>
    );
};

export default FirstScreen;