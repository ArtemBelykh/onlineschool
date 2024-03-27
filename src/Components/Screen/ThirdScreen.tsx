import React, {Suspense} from 'react'
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CategoryBByi from "../Rates/CategoryB.byi";
import ProfessionalReCertification from "../Rates/ProfessionalReCertification";

const Acordion = React.lazy(() => import("../Acordion"))

const CategoryBKostroma = React.lazy(() => import("../Rates/CategoryB.Kostroma"))
const CategoryBGalyth = React.lazy(() => import("../Rates/CategoryB.Galyth"))
const CategoryAKostroma = React.lazy(() => import("../Rates/CategoryA.Kostroma"))
const RecertificationInSchool = React.lazy(() => import("../Rates/RecertificationInSchool"))

const RememberEverything = React.lazy(() => import("../Rates/RememberEverything"))

const AdditionalLessonInTheory = React.lazy(() => import("../Rates/AdditionalLessonInTheory"))

const AdditionalDriving = React.lazy(() => import("../Rates/AdditionalDriving"))

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
                        <Typography component={'span'}>{children}</Typography>
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
                    <Suspense fallback="load">
                        <CategoryBKostroma/>
                    </Suspense>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Suspense fallback="load">
                        <CategoryBGalyth/>
                    </Suspense>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Suspense fallback="load">
                        <CategoryAKostroma/>
                    </Suspense>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Suspense fallback="load">
                        <RecertificationInSchool/>
                    </Suspense>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Suspense fallback="load">
                        <RememberEverything/>
                    </Suspense>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Suspense fallback="load">
                        <AdditionalDriving/>
                    </Suspense>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Suspense fallback="load">
                        <AdditionalLessonInTheory/>
                    </Suspense>
                </TabPanel>
                <TabPanel index={7} value={value}>
                    <Suspense fallback="load">
                        <CategoryBByi/>
                    </Suspense>
                </TabPanel>
                <TabPanel index={8} value={value}>
                    <Suspense fallback="load">
                        <ProfessionalReCertification/>
                    </Suspense>
                </TabPanel>
                <Tabs
                    orientation="vertical"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{borderColor: 'divider'}}
                >
                    <Tab
                        label="Категория 'В' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; г. Кострома" {...a11yProps(0)} />
                    <Tab
                        label="Категория 'В' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; г. Галич" {...a11yProps(1)} />
                    <Tab
                        label="Категория 'А' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; г. Кострома" {...a11yProps(2)} />
                    <Tab label="Переаттестация после обучения в другой атвошколе" {...a11yProps(3)} />
                    <Tab label="Вспомнить Всё!" {...a11yProps(4)} />
                    <Tab label="Дополнительное занятие по вождению" {...a11yProps(5)} />
                    <Tab label="Дополнительное занятие по теории" {...a11yProps(6)} />
                    <Tab label="Теория 'В' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; г. Буй" {...a11yProps(7)} />
                    <Tab label="Переаттестация ПРОФ" {...a11yProps(8)} />
                </Tabs>

            </Box>

            {/*&#10;&#13;*/}
        </Container>
    );
};

export default ThirdScreen;