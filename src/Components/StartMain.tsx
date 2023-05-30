import React, {Suspense} from 'react'
import Loading from "./Loading";

const FirstScreen = React.lazy(() => import("./Screen/FirstScreen"))

const SecondScreen = React.lazy(() => import("./Screen/SecondScreen"))
const ThirdScreen = React.lazy(() => import("./Screen/ThirdScreen"))
const FourthScreen = React.lazy(() => import("./Screen/FourthScreen"))
const FifthScreen = React.lazy(() => import("./Screen/FifthScreen"))
const SixthScreen = React.lazy(() => import("./Screen/SixthScreen"))


const StartMain = () => {
    return (
        <div>
            <FirstScreen/>
            <SecondScreen/>
            <ThirdScreen/>
            <FourthScreen/>
            <FifthScreen/>
            <Suspense fallback={<Loading/>}><SixthScreen/></Suspense>


        </div>
    );
};

export default StartMain;