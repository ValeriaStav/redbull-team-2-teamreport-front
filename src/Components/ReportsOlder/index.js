import React from 'react';
import {OlderPanel} from "../../Pages/Team Reports/styles";
import UserWithOlderReports from "../UserWithOlderReports";
import Overall from "../Overall";

const ReportsOlder = ({props}) => {

    return (
            <>
                <OlderPanel>
                    <p style={{marginRight: 30}}>9w ago</p>
                    <p style={{marginRight: 35}}>8w ago</p>
                    <p style={{marginRight: 30}}>7w ago</p>
                    <p style={{marginRight: 35}}>6w ago</p>
                    <p style={{marginRight: 30}}>5w ago</p>
                    <p style={{marginRight: 30}}>4w ago</p>
                    <p style={{marginRight: 30}}>3w ago</p>
                    <p style={{marginRight: 30}}>2w ago</p>
                    <p style={{marginRight: 35}}>1w ago</p>
                    <p style={{marginRight: 100}}>Current</p>
                </OlderPanel>
                <Overall props={props}/>
                <div style={{textAlign: "center", fontSize: 18, marginBottom: 30, marginTop: 50}}>
                    <b>EXTENDED TEAM</b>
                    <div style={{background: "yellow", padding: 4, marginInline: 760, marginTop: 20}}></div>
                </div>
                <OlderPanel>
                    <p style={{marginRight: 30}}>9w ago</p>
                    <p style={{marginRight: 35}}>8w ago</p>
                    <p style={{marginRight: 30}}>7w ago</p>
                    <p style={{marginRight: 35}}>6w ago</p>
                    <p style={{marginRight: 30}}>5w ago</p>
                    <p style={{marginRight: 30}}>4w ago</p>
                    <p style={{marginRight: 30}}>3w ago</p>
                    <p style={{marginRight: 30}}>2w ago</p>
                    <p style={{marginRight: 35}}>1w ago</p>
                    <p style={{marginRight: 100}}>Current</p>
                </OlderPanel>
                {
                    props.map(prop =>
                        <UserWithOlderReports prop={prop} key={prop.userid}/>
                )
                }
            </>
        )
};

export default ReportsOlder;