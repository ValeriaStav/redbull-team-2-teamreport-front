import React from 'react';
import {upperLetters} from "../utils/upperLetters";

const CircleWithLetters = ({username}) => {
    return (
        <p style={{color: "rgba(0,0,0,0.6)"}}>
            {upperLetters(username.username.toString())}
        </p>
    );
};

export default CircleWithLetters;