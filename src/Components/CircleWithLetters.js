import React from 'react';
import {upperLetters} from "../utils/upperLetters";

const CircleWithLetters = ({name}) => {
    const iterableName = name
    return (
        <p style={{color: "rgba(0,0,0,0.6)"}}>
            {iterableName?.split(' ').reduce((acc, item) => acc + item[0], '')}
        </p>
    );
};

export default CircleWithLetters;