import React from 'react';
import {UserName} from "../UserWithThreeStates/styles";
import {emoji} from "../../utils/emoji";
import unmarked from "../../assets/unmarked.svg";
import {UserPanel} from "../UserWithOlderReports/styles";
import {statusCalculate} from "../../utils/statusCalculate";

const Overall = ({props}) => {

    let forEmoji = statusCalculate(props);
    return (
        <UserPanel>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <UserName style={{ marginTop: "13px"}}>
                    Overall
                </UserName>
            </div>
            <div style={{display: "flex",justifyContent: "space-between", marginLeft:"12px"}}>
                <div style={{marginRight: 20}}><img src={emoji(forEmoji[9])} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(forEmoji[8])} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(forEmoji[7])} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(forEmoji[6])} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(forEmoji[5])} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(forEmoji[4])} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(forEmoji[3])} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(forEmoji[2])} alt={unmarked}/></div>
                <div style={{marginRight: 20}}><img src={emoji(forEmoji[1])} alt={unmarked}/></div>
                <div style={{marginRight: 100}}><img src={emoji(forEmoji[0])} alt={unmarked}/></div>
            </div>
        </UserPanel>
    );
};

export default Overall;