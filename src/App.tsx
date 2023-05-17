import React, {Suspense} from 'react'
import './App.css';
import {Route, Routes} from "react-router-dom";

const Navbar = React.lazy(() => import("./Components/Navbar"))
const Footer = React.lazy(() => import("./Components/Footer"))
const NotFoundPages = React.lazy(() => import("./Components/Pages/NotFound.pages"))
const HowToChooseADrivingSchoolForABeginnerArticle = React.lazy(() => import("./Components/Pages/Articles/HowToChooseADrivingSchoolForABeginner.article"))
const HowMeArticle = React.lazy(() => import("./Components/Pages/Articles/HowMe.article"))
const HowToSaveMoneyArticle = React.lazy(() => import("./Components/Pages/Articles/HowToSaveMoney.article"))
const MedicalTestOnTheRoad = React.lazy(() => import("./Components/Pages/Articles/MedicalTestOnTheRoad.article"))
const HonestHoursInDrivingSchool = React.lazy(() => import("./Components/Pages/Articles/HonestHoursInDrivingSchool.article"))
const GetOutOfTheCarOrNotArticle = React.lazy(() => import("./Components/Pages/Articles/GetOutOfTheCarOrNot.article"))
const HowToBuyAUsedCar = React.lazy(() => import("./Components/Pages/Articles/HowToBuyAUsedCar.article"))
const WuCategoriesArticle = React.lazy(() => import("./Components/Pages/Articles/WuCategories.article"))
const EuroProtocolArticle = React.lazy(() => import("./Components/Pages/Articles/EuroProtocol.article"))
const StartMain = React.lazy(() => import("./Components/StartMain"))
const LicensePages = React.lazy(() => import("./Components/Pages/License.pages"))

function App() {
    return (
        <>
            <Suspense fallback="load">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<StartMain/>}/>
                    <Route path="/license" element={<LicensePages/>}/>
                    <Route path="*" element={<NotFoundPages/>}/>

                    <Route path="/article/How-to-save-money" element={<HowToSaveMoneyArticle/>}/>
                    <Route path="/article/How-To-Choose-a-driving-school-for-a-beginner"
                           element={<HowToChooseADrivingSchoolForABeginnerArticle/>}/>
                    <Route path="/article/How-Me" element={<HowMeArticle/>}/>
                    <Route path="/article/Medical-Test-On-The-Road" element={<MedicalTestOnTheRoad/>}/>
                    <Route path="/article/Honest-Hours-In-Driving-School" element={<HonestHoursInDrivingSchool/>}/>
                    <Route path="/article/Get-a-car" element={<GetOutOfTheCarOrNotArticle/>}/>
                    <Route path="/article/Buy-Car" element={<HowToBuyAUsedCar/>}/>
                    <Route path="/article/Wu-category" element={<WuCategoriesArticle/>}/>
                    <Route path="/article/Euro-Protocol" element={<EuroProtocolArticle/>}/>
                </Routes>
                <Footer/>
            </Suspense>

        </>
    );
}

export default App;
