import React, {Suspense} from 'react'
const FirstScreen = React.lazy(() => import("./Screen/FirstScreen"))

const SecondScreen = React.lazy(() => import("./Screen/SecondScreen"))
const ThirdScreen = React.lazy(() => import("./Screen/ThirdScreen"))
const FourthScreen = React.lazy(() => import("./Screen/FourthScreen"))
const FifthScreen = React.lazy(() => import("./Screen/FifthScreen"))
const SixthScreen = React.lazy(() => import("./Screen/SixthScreen"))


const StartMain = () => {
    return (
        <div>
            <Suspense><FirstScreen/></Suspense>
            <Suspense><SecondScreen/></Suspense>
            <Suspense><ThirdScreen/></Suspense>
            <Suspense><FourthScreen/></Suspense>
            <Suspense><FifthScreen/></Suspense>
            <Suspense><SixthScreen/></Suspense>


        </div>
    );
};

export default StartMain;