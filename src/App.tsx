import React, {Suspense} from 'react'
import './App.css';
import {Route, Routes} from "react-router-dom";
import Loading from "./Components/Loading";

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
            <Suspense>
                <Navbar/>
            </Suspense>
            <Routes>
                <Route path="/" element={<Suspense fallback={<Loading/>}><StartMain/></Suspense>}/>
                <Route path="/license" element={<Suspense fallback={<Loading/>}><LicensePages/></Suspense>}/>
                <Route path="*" element={<Suspense fallback={<Loading/>}><NotFoundPages/></Suspense>}/>

                <Route path="/article/How-to-save-money"
                       element={<Suspense fallback={<Loading/>}><HowToSaveMoneyArticle/></Suspense>}/>
                <Route path="/article/How-To-Choose-a-driving-school-for-a-beginner"
                       element={<Suspense
                           fallback={<Loading/>}><HowToChooseADrivingSchoolForABeginnerArticle/></Suspense>}/>
                <Route path="/article/How-Me" element={<Suspense fallback={<Loading/>}><HowMeArticle/></Suspense>}/>
                <Route path="/article/Medical-Test-On-The-Road"
                       element={<Suspense fallback={<Loading/>}><MedicalTestOnTheRoad/></Suspense>}/>
                <Route path="/article/Honest-Hours-In-Driving-School"
                       element={<Suspense fallback={<Loading/>}><HonestHoursInDrivingSchool/></Suspense>}/>
                <Route path="/article/Get-a-car"
                       element={<Suspense fallback={<Loading/>}><GetOutOfTheCarOrNotArticle/></Suspense>}/>
                <Route path="/article/Buy-Car"
                       element={<Suspense fallback={<Loading/>}><HowToBuyAUsedCar/></Suspense>}/>
                <Route path="/article/Wu-category"
                       element={<Suspense fallback={<Loading/>}><WuCategoriesArticle/></Suspense>}/>
                <Route path="/article/Euro-Protocol"
                       element={<Suspense fallback={<Loading/>}><EuroProtocolArticle/></Suspense>}/>
            </Routes>
            <Suspense>
                <Footer/>
            </Suspense>


        </>
    );
}

export default App;
