import React from 'react';
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ModalAssets from "../ModalAssets";


const LicensePages = () => {
    return (
        <Container className="fistScreenContainer__adaptive " sx={{marginTop: "120px", height: "100%", marginBottom: "50px"}}>

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


            <Box className="adaptLicence" sx={{display: "flex", justifyContent: "space-between", marginTop: "30px", flexWrap: "wrap" }}>
                <ModalAssets img="/license/2.jpg"/>
                <ModalAssets img="/license/3.jpg"/>
                <ModalAssets img="/license/l1pdf.png" img2="/license/l2pdf.png" isPdf={true}/>
            </Box>

        </Container>
    );
};

export default LicensePages;