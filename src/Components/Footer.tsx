import React from 'react';
import {Container, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {pages} from "./Navbar";
import ModalMain from "./ModalMain";
import {Link as LinkScroll} from "react-scroll/modules";
import {useNavigate} from "react-router-dom";
import {useTitle} from "./changeTitle";

const Footer = () => {
    const navigate = useNavigate()
    const appTitle = useTitle();
    return (
        <>
            <footer className="footer__adaptive" style={{display: "flex", alignItems: "center"}}>
                <Container>


                    <div className="adaptiveListFooter1" style={{display: "flex", justifyContent: "space-between"}}>
                        <List className="adaptiveListFooter" sx={{display: "flex", width: "50%"}}>
                            <img width="50" height="50" style={{borderRadius: "50%"}} src="/favicon-32x32.png" alt="favicon-32x32"/>
                            {pages.map((page, index) => (
                                <ListItemButton key={index}>
                                    <ListItemIcon>
                                        <LinkScroll
                                            activeClass="active" spy={true}
                                            onClick={() => navigate('/')}
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                            style={{color: "white", textDecoration: "none"}}
                                            href={"#"}
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
                        © {new Date().getFullYear()} {appTitle}
                    </div>
                </Container>
            </footer>
        </>

    );
};

export default Footer;