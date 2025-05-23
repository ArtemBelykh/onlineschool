import React from 'react'
import {Container, Link, Typography} from "@mui/material";
import {FrameLoad} from "../FrameLoad";
import AddressesComponents from "../Adress/Addresses.components";

const SixthScreen = () => {

    return (
        <div style={{marginTop: "120px"}}>

            <Container id="contact" sx={{width: "60%"}}>
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
                    Контакты
                </Typography>
            </Container>

            <div style={{
                display: "flex",
                marginBottom: "100px",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "center"
            }}>
                <FrameLoad
                    src={"https://yandex.ru/map-widget/v1/?ll=40.945624%2C57.762388&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjM0ODY2NRJD0KDQvtGB0YHQuNGPLCDQmtC-0YHRgtGA0L7QvNCwLCDQodC-0LLQtdGC0YHQutCw0Y8g0YPQu9C40YbQsCwgNDTQkCIKDVHII0IVrwxnQg%2C%2C&z=17.1"}/>


                <div className={"adaptiveSix"} style={{paddingLeft: "50px"}}>

                    <AddressesComponents/>

                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "rgba(0, 0, 0, 0.5)",
                        marginTop: "38px"
                    }} variant="h6" component="h2">
                        Часы работы
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "24px",
                        lineHeight: "30px",
                        color: "#000000"
                    }} variant="h6" component="h2">
                        с 9.00 до 20.00
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "#000000"
                    }} variant="h6" component="h2">
                        без перерыва и выходных
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "rgba(0, 0, 0, 0.5)",
                        marginTop: "38px"
                    }} variant="h6" component="h2">
                        Телефон
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "24px",
                        lineHeight: "30px",
                        color: "#000000"
                    }} variant="h6" component="h2">
                        <Link
                            sx={{color: "black", textDecoration: "none"}}
                            href={"tel:+79108019691"}>
                            +7 (910) 801-96-91
                        </Link>
                    </Typography>
                    <div style={{display: "flex", marginTop: "38px"}}>
                        <a href="https://vk.com/club196114781" rel="noreferrer" target="_blank"><img
                            style={{marginRight: "30px", width: "52px", height: "52px"}} src="/vk.png"
                            alt="vk"/></a>
                        <a href="whatsapp://send?text=l&phone=+79108019691&abid=+79108019691" rel="noreferrer"><img
                            style={{marginRight: "30px", width: "52px", height: "52px"}} src="/whatsapp.png"
                            alt="whatsapp"/></a>
                        <a href="tg://resolve?domain=PravoNaPrava44" rel="noreferrer" target="_blank">
                            <img style={{width: "52px", height: "52px"}}
                                 src="/telegram.png"
                                 alt="telegram"/></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SixthScreen;