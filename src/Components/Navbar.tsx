import React from "react";
import {
    AppBar, Container, Link, List, ListItemButton, ListItemIcon, ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import ModalMain from "./ModalMain";
import {NavLink} from "react-router-dom";

export const pages = ["О школе", "Тарифы", "Новости", "Отзывы", "Контакты"];

const Navbar = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <React.Fragment>
            <AppBar sx={{background: "white"}}>
                <Container>

                    <Toolbar>
                        <img width="50" height="50" style={{borderRadius: "50%"}} src="/logoMain.jpg" alt="43r534"/>
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
                                                <ListItemText sx={{fontFamily: "Mulish"}}>{page}</ListItemText>
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
                                <ModalMain styleBtn={{marginLeft: "auto", background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)"}} variantBtn="contained"
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