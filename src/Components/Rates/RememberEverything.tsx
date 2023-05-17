import React from 'react';
import Box from "@mui/material/Box";
import {styleBox, styleTitle} from "./styles";
import {Typography} from "@mui/material";
import ModalMain from "../ModalMain";

const RememberEverything = () => {
    return (
        <Box sx={styleBox} className="adaptive__rates">
            <div style={{padding: "50px"}} className="adaptive__rates_div">
                <Typography sx={styleTitle} variant="h2" component="h2">
                    Вспомнить Всё!
                </Typography>

                <div style={{display: "flex", justifyContent: "space-between", width: "400px"}} className="adaptive__rates_div1">
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "25px",
                        color: "#000000"
                    }} variant="h6" component="h2">
                        Вождение (МКПП)
                    </Typography>
                    {/*<Typography sx={{*/}
                    {/*    fontFamily: "Mulish",*/}
                    {/*    fontStyle: "normal",*/}
                    {/*    fontWeight: "500",*/}
                    {/*    fontSize: "20px",*/}
                    {/*    lineHeight: "25px",*/}
                    {/*    color: "#000000"*/}
                    {/*}} variant="h6" component="h2">*/}
                    {/*    г. Кострома*/}
                    {/*</Typography>*/}

                </div>

                <div style={{display: "flex", justifyContent: "space-between", width: "365px", marginTop: "43px"}} className="adaptive__rates_div1">
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "rgba(0, 0, 0, 0.5)"
                    }} variant="h6" component="h2">
                        Форма обучения
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "24px",
                        lineHeight: "30px",
                        color: "#000000"
                    }} variant="h6" component="h2">
                        Очная
                    </Typography>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", width: "380px", marginTop: "16px"}} className="adaptive__rates_div1">
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "rgba(0, 0, 0, 0.5)"
                    }} variant="h6" component="h2">
                        Срок обучения
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "24px",
                        lineHeight: "30px",
                        color: "#000000"
                    }} variant="h6" component="h2">
                        1 месяц
                    </Typography>
                </div>


                <div style={{display: "flex", alignItems: "center", marginTop: "45px"}}>
                    <div><img src="/symbol.png" alt="symbol"/></div>

                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "24px",
                        lineHeight: "94%",
                        color: "#000000",
                        marginLeft: "14px"
                    }} variant="h6" component="h2">
                        Доступ к обучающей онлайн платформе
                    </Typography>
                </div>

                <div style={{display: "flex", alignItems: "center", marginTop: "25px", marginBottom: "53px"}}>
                    <div><img src="/symbol.png" alt="symbol"/></div>

                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "24px",
                        lineHeight: "94%",
                        color: "#000000",
                        marginLeft: "14px"
                    }} variant="h6" component="h2">
                        5 практических занятий
                    </Typography>
                </div>


                <hr style={{border: "1px solid #DB241C", marginBottom: "54px"}}/>


                <div style={{display: "flex", justifyContent: "space-between", width: "450px", alignItems: "center", marginBottom: "37px"}} className="adaptive__rates_div1">
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "28px",
                        lineHeight: "35px",
                        color: "#000000"
                    }} variant="h6" component="h2">
                        Стоимость
                    </Typography>



                    <div style={{marginTop: "-30px", textAlign: "end"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "20px",
                            color: "rgba(0, 0, 0, 0.5)",
                            textTransform: "uppercase",
                            textDecorationLine: "line-through"
                        }} variant="h6" component="h2">
                            9 000 ₽
                        </Typography>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "900",
                            fontSize: "40px",
                            lineHeight: "50px",
                            color: "#000000",
                            textTransform: "uppercase"
                        }} variant="h6" component="h2">
                            7 000 ₽
                        </Typography>
                    </div>



                </div>
                <ModalMain styleBtn={{background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)", borderRadius: "23px", width: "100%", height: "73px"}} variantBtn="contained"
                           titleBtn="Записаться на обучение"/>
            </div>
        </Box>
    );
};

export default RememberEverything;