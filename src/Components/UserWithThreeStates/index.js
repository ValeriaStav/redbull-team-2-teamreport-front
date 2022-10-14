import React from 'react';
import { emoji } from "../../utils/emoji";
import very_sad from "../../assets/very_sad.svg";
import CircleWithLetters from "../CircleWithLetters";
import { GrayCircle, UserName, UserPanel } from "./styles";

const UserWithThreeStates = ({ prop }) => {
    const doesReportExist = (prop.morale + prop.stress + prop.workload) > 0
    return (
        <UserPanel>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <GrayCircle>
                    <CircleWithLetters name={prop.userName || prop.name} />
                </GrayCircle>
                <div style={{flexDirection: "column", display: "flex", alignItems: "center", width: "208px"}}>
                <UserName>
                    {prop.userName || prop.name}
                </UserName>
                {!doesReportExist && (
                    <div style={{ color: "#957070c2" }}>is missing report</div>
                )}
                </div>
            </div>
            {doesReportExist && (
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ marginRight: 20 }}><img src={emoji(prop.morale)} alt={very_sad} /></div>
                    <div style={{ marginRight: 20 }}><img src={emoji(prop.stress)} alt={very_sad} /></div>
                    <div style={{ marginRight: 100 }}><img src={emoji(prop.workload)} alt={very_sad} /></div>
                </div>
            )}
        </UserPanel>
    );
};

export default UserWithThreeStates;