import React from 'react';
import {Container, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {pages} from "./Navbar";
import ModalMain from "./ModalMain";
import {Link as LinkScroll} from "react-scroll/modules";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <footer className="footer__adaptive" style={{display: "flex", alignItems: "center"}}>
                <Container>


                    <div className="adaptiveListFooter1" style={{display: "flex", justifyContent: "space-between"}}>
                        <List className="adaptiveListFooter" sx={{display: "flex", width: "50%"}}>
                            <img width="50" height="50" style={{borderRadius: "50%"}} src="/logoMain.jpg" alt="43r534"/>
                            {pages.map((page, index) => (
                                <ListItemButton key={index}>
                                    <ListItemIcon>
                                        <LinkScroll onClick={() => navigate(-1)}
                                                    activeClass="active" spy={true}
                                                    smooth={true}
                                                    offset={-100}
                                                    duration={500}
                                                    style={{color: "white", textDecoration: "none"}}
                                                    to={page.tags}>
                                            <ListItemText id={"#" + page.tags} sx={{fontFamily: "Mulish"}}>
                                                {page.title}
                                            </ListItemText>
                                        </LinkScroll>
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
                        © {new Date().getFullYear()} Автошкола Право на Права
                    </div>
                </Container>
            </footer>
        </>

    );
};

export default Footer;