import React from 'react';
import {GrayCircle, UserName} from "../UserWithThreeStates/styles";
import CircleWithLetters from "../CircleWithLetters";
import {emoji} from "../../utils/emoji";
import unmarked from "../../assets/unmarked.svg";
import {UserPanel} from "./styles";

const UserWithOlderReports = ({prop}) => {
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
                <div style={{marginRight: 20}}><img src={emoji(prop.ago9)} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(prop.ago8)} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(prop.ago7)} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(prop.ago6)} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(prop.ago5)} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(prop.ago4)} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(prop.ago3)} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(prop.ago2)} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(prop.ago1)} alt={unmarked}/></div>
                <div style={{marginRight: 100}}><img src={emoji(prop.current)} alt={unmarked}/></div>
            </div>
        </UserPanel>
    );
};

export default UserWithOlderReports;