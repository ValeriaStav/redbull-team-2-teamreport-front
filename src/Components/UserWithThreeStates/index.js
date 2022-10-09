import React from 'react';
import {emoji} from "../../utils/emoji";
import very_sad from "../../assets/very_sad.svg";
import CircleWithLetters from "../CircleWithLetters";
import {GrayCircle, UserName, UserPanel} from "./styles";

const UserWithThreeStates = ({prop}) => {
    return (
        <UserPanel>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <GrayCircle>
                    <CircleWithLetters username={prop}/>
                </GrayCircle>
                <UserName>
                    {prop.username}
                </UserName>
            </div>
            <div style={{display: "flex",justifyContent: "space-between"}}>
                <div style={{marginRight: 20}}><img src={emoji(prop.morale)} alt={very_sad}/></div>
                <div style={{marginRight: 20}}><img src={emoji(prop.stress)} alt={very_sad}/></div>
                <div style={{marginRight: 100}}><img src={emoji(prop.workload)} alt={very_sad}/></div>
            </div>
        </UserPanel>
    );
};

export default UserWithThreeStates;