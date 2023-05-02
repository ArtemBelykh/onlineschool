import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import LicensePages from "./Components/Pages/License.pages";
import WorkProgramPages from "./Components/Pages/WorkProgram.pages";
import StartMain from "./Components/StartMain";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NotFoundPages from "./Components/Pages/NotFound.pages";
import HowToChooseADrivingSchoolForABeginnerArticle from "./Components/Pages/Articles/HowToChooseADrivingSchoolForABeginner.article";
import HowMeArticle
    from "./Components/Pages/Articles/HowMe.article";
import Typography from "@mui/material/Typography";
import HowToSaveMoneyArticle from "./Components/Pages/Articles/HowToSaveMoney.article";

function App() {
    return (
        <>

            {/*<Typography variant="h1" component="h1" sx={{textAlign: "center"}}>Сайт не работает!</Typography>*/}
            <Navbar/>
            <Routes>
                <Route path="/" element={<StartMain/>} />
                <Route path="/license" element={<LicensePages/>}/>
                <Route path="/work-programs" element={<WorkProgramPages/>}/>
                <Route path="*" element={<NotFoundPages/>}/>



                <Route path="/article/How-to-save-money" element={<HowToSaveMoneyArticle/>} />
                <Route path="/article/How-To-Choose-a-driving-school-for-a-beginner" element={<HowToChooseADrivingSchoolForABeginnerArticle/>} />
                <Route path="/article/How-Me" element={<HowMeArticle/>} />
            </Routes>

            <Footer/>
        </>
    );
}

export default App;
