import React, {Suspense} from 'react'
import './App.css';
import {Route, Routes} from "react-router-dom";
const LicensePages = React.lazy(() => import("./Components/Pages/License.pages"))
const StartMain = React.lazy(() => import("./Components/StartMain"))
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

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Suspense fallback="load"><StartMain/></Suspense>}/>
                <Route path="/license" element={<Suspense fallback="load"><LicensePages/></Suspense>}/>
                <Route path="*" element={<Suspense fallback="load"><NotFoundPages/></Suspense>}/>

                <Route path="/article/How-to-save-money" element={<Suspense fallback="load"><HowToSaveMoneyArticle/></Suspense>}/>
                <Route path="/article/How-To-Choose-a-driving-school-for-a-beginner"
                       element={<Suspense fallback="load"><HowToChooseADrivingSchoolForABeginnerArticle/></Suspense>}/>
                <Route path="/article/How-Me" element={<Suspense fallback="load"><HowMeArticle/></Suspense>}/>
                <Route path="/article/Medical-Test-On-The-Road" element={<Suspense fallback="load"><MedicalTestOnTheRoad/></Suspense>}/>
                <Route path="/article/Honest-Hours-In-Driving-School" element={<Suspense fallback="load"><HonestHoursInDrivingSchool/></Suspense>}/>
                <Route path="/article/Get-a-car" element={<Suspense fallback="load"><GetOutOfTheCarOrNotArticle/></Suspense>}/>
                <Route path="/article/Buy-Car" element={<Suspense fallback="load"><HowToBuyAUsedCar/></Suspense>}/>
                <Route path="/article/Wu-category" element={<Suspense fallback="load"><WuCategoriesArticle/></Suspense>}/>
                <Route path="/article/Euro-Protocol" element={<Suspense fallback="load"><EuroProtocolArticle/></Suspense>}/>
            </Routes>

            <Footer/>

        </>
    );
}

export default App;
