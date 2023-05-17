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
            <Suspense fallback="load">
                <FirstScreen/>
            </Suspense>

            <Suspense fallback="load">
                <SecondScreen/>
            </Suspense>

            <Suspense fallback="load">
                <ThirdScreen/>
            </Suspense>

            <Suspense fallback="load">
                <FourthScreen/>
            </Suspense>

            <Suspense fallback="load">
                <FifthScreen/>
            </Suspense>
            <Suspense fallback="load">
                <SixthScreen/>
            </Suspense>

        </div>
    );
};

export default StartMain;