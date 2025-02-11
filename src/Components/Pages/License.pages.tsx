import React from 'react';
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ModalAssets from "../ModalAssets";


const LicensePages = () => {
    return (
        <Container className="fistScreenContainer__adaptive "
                   sx={{marginTop: "120px", height: "100%", marginBottom: "50px"}}>

            <Typography variant="h2" component="h2" sx={{
                textAlign: "center",
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "40px",
                lineHeight: "114.5%"
            }}>
                Документы
            </Typography>

            <Typography variant="h4" component="h4" sx={{
                textAlign: "center",
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "113.5%",
                marginTop: "10px"
            }}>
                Деятельность нашей автошколы лицензирована и соответствует всем требованиям образовательного
                учреждения, в том числе материально-техническая база проверена и согласована ГИБДД
            </Typography>


            <Box className="adaptLicence"
                 sx={{display: "flex", justifyContent: "space-between", marginTop: "30px", flexWrap: "wrap"}}>
                <ModalAssets img="/license_doc/ExtractFromTheRegisterOfLicensesNo_02_21_001.jpg"
                             img2="/license_doc/ExtractFromTheRegisterOfLicensesNo_02_21_002.jpg" isPdf={true}/>
                <ModalAssets img="/license_doc/2.jpg"/>
                <ModalAssets img="/license_doc/3.jpg"/>

                <ModalAssets img="/license_doc/docSchool1.jpg"/>
                <ModalAssets img="/license_doc/docSchool2.jpg"/>
                <ModalAssets img="/license_doc/docSchool3.jpg"/>
                <ModalAssets img="/license_doc/schoolR.jpg"/>
            </Box>


            <br/><br/>


            <a style={{color: "blue", textDecoration: "none", fontSize: "18px"}} target="_blank"
               href="/license_doc/act_samoobsl_2025.pdf">Отчет о результатах самообследования 2025 года г.
                Ярославль</a><br/>
            <a style={{color: "blue", textDecoration: "none", fontSize: "18px"}} target="_blank"
               href="/license_doc/act_samoobsledovanya.pdf">Отчет о результатах самообследования 2024 года г.
                Буй</a><br/>
            <a style={{color: "blue", textDecoration: "none", fontSize: "18px"}} target="_blank"
               href="/Отчет_о_результатах_самообследования_г_Кострома_2023.pdf">Отчет о результатах самообследования
                2023 года г. Кострома</a><br/>
            <a style={{color: "blue", textDecoration: "none", fontSize: "18px"}} target="_blank"
               href="/Отчет_о_результатах_самообследования_г_Галич_2023.pdf">Отчет о результатах самообследования 2023
                года г. Галич</a><br/>
            <a style={{color: "blue", textDecoration: "none", fontSize: "18px"}} target="_blank"
               href="/Отчет_о_результатах_самообследования_г_Кострома_2021.pdf">Отчет о результатах самообследования
                2021 года г. Кострома</a><br/>

        </Container>
    );
};

export default LicensePages;
