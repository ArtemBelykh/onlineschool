import React from 'react';
import {Typography} from "@mui/material";

const AddressesComponents = () => {
    return (
        <>
            <Typography sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "20px",
                color: "rgba(0, 0, 0, 0.5)",
            }} variant="h6" component="h2">
                Адреса
            </Typography>

            <Typography sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "23px",
                color: "#000000"
            }} variant="h6" component="h2">
                г. Кострома <br/>
                ул. Советская 44а <br/>
                офис 25, 2 этаж
            </Typography>


            <br/>

            <Typography sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "23px",
                color: "#000000"
            }} variant="h6" component="h2">
                Костромская обл., <br/>
                г. Галич, <br/>
                ул. Ленина, д. 43, <br/>
                помещение 10 (категория «В»);
            </Typography>

            <br/>

            <Typography sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "23px",
                color: "#000000"
            }} variant="h6" component="h2">
                Костромская обл., <br/>
                г. Буй, пл. Революции, д. 11, <br/>
                помещение с инвентарным <br/> номером 2-11 (категория «В»);
            </Typography>

            <br/>

            <Typography sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "23px",
                color: "#000000"
            }} variant="h6" component="h2">
                г. Ярославль, <br/>
                Московский просп., д. 97, <br/>
                помещение Nº 43 (категория «В»). <br/>
                Автодром - г. Кострома, <br/>
                ул. Коммунаров, д. 40
            </Typography>
        </>
    );
};

export default AddressesComponents;