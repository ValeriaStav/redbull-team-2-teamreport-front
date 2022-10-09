import React from 'react';
import {emoji} from "../../utils/emoji";
import very_sad from "../../assets/very_sad.svg";
import CircleWithLetters from "../CircleWithLetters";

const UserWithThreeStates = ({prop}) => {
    return (
        <div style={{
            background: "white",
            boxShadow: "0px 4px 5px 0px rgb(34 60 80 / 40%)",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
            marginInline: 110,
            marginTop: 20,
            borderRadius: 2
        }}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{
                    background: "lightgray",
                    borderRadius: 50,
                    paddingInline: 20,
                    margin: 10,
                    marginLeft: 15,
                    fontSize: 20,
                }}>
                    <CircleWithLetters username={prop}/>
                </div>
                <div style={{
                    marginLeft: 20,
                    marginTop: 10,
                    fontWeight: 600,
                    fontSize: 20
                }}>
                    {prop.username}
                </div>
            </div>
            <div style={{display: "flex",justifyContent: "space-between"}}>
                <div style={{marginRight: 20}}><img src={emoji(prop.morale)} alt={very_sad}/></div>
                <div style={{marginRight: 20}}><img src={emoji(prop.stress)} alt={very_sad}/></div>
                <div style={{marginRight: 100}}><img src={emoji(prop.workload)} alt={very_sad}/></div>
            </div>
        </div>
    );
};

export default UserWithThreeStates;