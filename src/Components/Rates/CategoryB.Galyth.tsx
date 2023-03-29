import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {styleBox, styleTitle} from "./styles";
import ModalMain from "../ModalMain";

const CategoryBGalyth = () => {
    return (
        <Box sx={styleBox} className="adaptive__rates">
            <div style={{padding: "50px"}} className="adaptive__rates_div">
                <Typography sx={styleTitle} variant="h2" component="h2">
                    Категория “В”
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
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "25px",
                        color: "#000000"
                    }} variant="h6" component="h2">
                        г. Галич
                    </Typography>

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

                <div style={{display: "flex", justifyContent: "space-between", width: "390px", marginTop: "16px"}} className="adaptive__rates_div1">
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
                        3 месяца
                    </Typography>
                </div>


                <div style={{display: "flex", alignItems: "center", marginTop: "45px"}} >
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
                        190 часов теории
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
                        56 часов практики
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
                    <Typography sx={{
                        fontFamily: "Mulish",
                        fontStyle: "normal",
                        fontWeight: "900",
                        fontSize: "40px",
                        lineHeight: "50px",
                        color: "#000000",
                        textTransform: "uppercase",
                    }} variant="h6" component="h2">
                        35 000 ₽
                    </Typography>



                </div>
                <ModalMain styleBtn={{background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)", borderRadius: "23px", width: "100%", height: "73px"}} variantBtn="contained"
                           titleBtn="Записаться на обучение"/>
            </div>
        </Box>
    );
};

export default CategoryBGalyth;