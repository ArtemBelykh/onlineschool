import React from 'react';
import {Container, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {pages} from "./Navbar";
import ModalMain from "./ModalMain";

const Footer = () => {
    return (
        <>
            <footer className="footer__adaptive" style={{display: "flex", alignItems: "center"}}>
                <Container>


                    <div className="adaptiveListFooter1" style={{display: "flex", justifyContent: "space-between"}}>
                        <List className="adaptiveListFooter" sx={{display: "flex", width: "50%"}}>
                            {/*<img width="50" height="50" style={{borderRadius: "50%"}} src="/logoMain.jpg" alt="43r534"/>*/}
                            {pages.map((page, index) => (
                                <ListItemButton key={index}>
                                    <ListItemIcon>
                                        <ListItemText sx={{
                                            fontFamily: "Mulish",
                                            color: "white"
                                        }}>{page}</ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                            ))}

                        </List>

                        <ModalMain styleBtn={{
                            background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)",
                            color: "#DB241C",
                            width: "247px",
                            height: "50px"
                        }} variantBtn="text" titleBtn="Записаться"/>

                    </div>


                    <div className="topAdaptiveFooter"
                         style={{textAlign: "center", color: "white", marginTop: "30px"}}>Права защищены
                        © {new Date().getFullYear()} Автошкола право на права
                    </div>
                </Container>
            </footer>
        </>

    );
};

export default Footer;