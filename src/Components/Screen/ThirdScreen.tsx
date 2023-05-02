import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CategoryBKostroma from "../Rates/CategoryB.Kostroma";
import CategoryBGalyth from "../Rates/CategoryB.Galyth";
import CategoryAKostroma from "../Rates/CategoryA.Kostroma";
import RecertificationInSchool from "../Rates/RecertificationInSchool";
import RememberEverything from "../Rates/RememberEverything";
import AdditionalDriving from "../Rates/AdditionalDriving";
import AdditionalLessonInTheory from "../Rates/AdditionalLessonInTheory";
import Acordion from "../Acordion";

const ThirdScreen = () => {
    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const {children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography component={'span'} >{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    function a11yProps(index: number) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container id="rate" sx={{width: "55%", marginTop: "70px"}}>
            <Typography sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "30px",
                textTransform: "uppercase",
                color: "rgba(0, 0, 0, 0.5)",
                marginBottom: "20px"
            }} variant="h6" component="h2">
                Тарифы
            </Typography>


            <Acordion/>

            <Box
                sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 800, justifyContent: "end"}}
                className="hidden_boxThird"
            >
                <TabPanel value={value} index={0}>
                    <CategoryBKostroma/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CategoryBGalyth/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <CategoryAKostroma/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <RecertificationInSchool/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <RememberEverything/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <AdditionalLessonInTheory/>
                </TabPanel>
                <Tabs
                    orientation="vertical"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{borderColor: 'divider'}}
                >
                    <Tab label="Категория 'В' г. Кострома" {...a11yProps(0)} />
                    <Tab label="Категория 'В' г. Галич" {...a11yProps(1)} />
                    <Tab label="Категория 'А' г. Кострома" {...a11yProps(2)} />
                    <Tab label="Переаттестация после обучения" {...a11yProps(3)} />
                    <Tab label="Вспомнить Всё!" {...a11yProps(4)} />
                    <Tab label="Дополнительное занятие по вождению" {...a11yProps(5)} />
                </Tabs>

            </Box>


        </Container>
    );
};

export default ThirdScreen;