import React from 'react';
import {upperLetters} from "../utils/upperLetters";

const CircleWithLetters = ({prop}) => {
    return (
        <p style={{color: "rgba(0,0,0,0.6)"}}>
            {upperLetters(prop?.name.toString())}
        </p>
    );
};

export default CircleWithLetters;