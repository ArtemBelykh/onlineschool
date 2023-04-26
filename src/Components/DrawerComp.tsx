import React, {useState} from "react";
import {
    Drawer,
    IconButton, Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText, Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {pages} from "./Navbar";
import CloseIcon from "@mui/icons-material/Close";
import {Link as LinkScroll} from "react-scroll/modules";

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <React.Fragment>
            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <CloseIcon sx={{cursor: "pointer", margin: "10px 10px 0 auto"}} onClick={() => setOpenDrawer(false)}/>
                <List sx={{height: "100vh", width: "100%", marginTop: "15%"}}>

                    {pages.map((page, index) => (
                        <ListItemButton sx={{paddingLeft: "50px"}} key={index}>
                            <ListItemIcon>
                                <LinkScroll activeClass="active" spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                            style={{color: "black", textDecoration: "none"}}
                                            to={page.tags}><ListItemText id={"#" + page.tags}
                                                                         sx={{fontFamily: "Mulish"}}>{page.title}</ListItemText></LinkScroll>
                            </ListItemIcon>

                        </ListItemButton>
                    ))}
                    <ListItemText sx={{marginTop: "30px"}}><Link sx={{color: "rgba(0, 0, 0, 0.54)", textDecoration: "none", paddingLeft: "50px"}}
                                        href={"tel:+7 (8142) 33 22 11"}>+7
                        (910) 801-96-91</Link></ListItemText>
                </List>
            </Drawer>


            <IconButton
                sx={{color: "black", marginLeft: "auto"}}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <Typography variant="h6" component="h6" sx={{
                    marginLeft: "auto",
                    color: "black",
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "200",
                    fontSize: "17px"
                }}>
                    <Link sx={{color: "black", textDecoration: "none", marginRight: "20px"}}
                          href={"tel:+7 (8142) 33 22 11"}>+7 (910) 801-96-91</Link>
                </Typography>
                <MenuIcon/>
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;