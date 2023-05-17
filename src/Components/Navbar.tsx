import React from "react";
import {
    AppBar, Container, Link, List, ListItemButton, ListItemIcon, ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import {Link as LinkScroll} from "react-scroll";

import {Link as NavLinks, useNavigate} from "react-router-dom";
import ModalMain from "./ModalMain";

export const pages = [{title: "О школе", tags: "about", link: "/about"}, {
    title: "Тарифы",
    tags: "rate",
    link: "/rate"
}, {
    title: "Статьи",
    tags: "articles",
    link: "/articles"
}, {title: "Отзывы", tags: "reviews", link: "/reviews"}, {title: "Контакты", tags: "contact", link: "/contact"}];

const Navbar = () => {

    const navigate = useNavigate()

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <React.Fragment>
            <AppBar sx={{background: "white"}}>
                <Container>

                    <Toolbar>
                        <NavLinks to="/">
                            <img width="50" height="50" style={{borderRadius: "50%"}} src="/logoMain.jpg" alt="43r534"/>
                        </NavLinks>
                        {isMatch ? (
                            <>
                                <DrawerComp/>
                            </>
                        ) : (
                            <>
                                <List sx={{display: "flex", marginLeft: "30px"}}>
                                    {pages.map((page, index) => (
                                        <ListItemButton key={index}>
                                            <ListItemIcon>
                                                <LinkScroll
                                                    activeClass="active" spy={false}
                                                    onClick={() => navigate('/')}
                                                    smooth={true}
                                                    offset={-100}
                                                    duration={500}
                                                    style={{color: "black", textDecoration: "none"}}
                                                    to={page.tags}
                                                >
                                                    <ListItemText id={"#" + page.tags} sx={{fontFamily: "Mulish"}}>
                                                        {page.title}
                                                    </ListItemText>
                                                </LinkScroll>
                                            </ListItemIcon>
                                        </ListItemButton>
                                    ))}
                                </List>

                                {/*</Tabs>*/}

                                <Typography variant="h6" component="h6" sx={{
                                    marginLeft: "auto",
                                    color: "black",
                                    fontFamily: "Mulish",
                                    fontStyle: "normal",
                                    fontWeight: "200",
                                    fontSize: "17px"
                                }}>
                                    <Link sx={{color: "black", textDecoration: "none"}} href={"tel:+7 (8142) 33 22 11"}>+7
                                        (910) 801-96-91</Link>
                                </Typography>
                                <ModalMain styleBtn={{
                                    marginLeft: "auto",
                                    background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)"
                                }} variantBtn="contained"
                                           titleBtn="Записаться на обучение"/>
                            </>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

        </React.Fragment>


    );
};

export default Navbar;