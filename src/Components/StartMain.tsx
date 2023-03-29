import React from 'react';
import FirstScreen from "./Screen/FirstScreen";
import SecondScreen from "./Screen/SecondScreen";
import ThirdScreen from "./Screen/ThirdScreen";
import FourthScreen from "./Screen/FourthScreen";
import FifthScreen from "./Screen/FifthScreen";
import SixthScreen from "./Screen/SixthScreen";

const StartMain = () => {
    return (
        <div>

            <FirstScreen/>
            <SecondScreen/>

            <ThirdScreen/>
            <FourthScreen/>
            <FifthScreen/>

            <SixthScreen/>

        </div>
    );
};

export default StartMain;