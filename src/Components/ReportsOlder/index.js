import React from 'react';
import {OlderPanel} from "../../Pages/Team Reports/styles";
import UserWithOlderReports from "../UserWithOlderReports";

const ReportsOlder = ({state}) => {
    const propsForAllPeriods = [
        {
            userid: 1,
            username: "Gregory House",
            ago9: 1,
            ago8: 2,
            ago7: 3,
            ago6: 0,
            ago5: 5,
            ago4: 1,
            ago3: 2,
            ago2: 3,
            ago1: 4,
            current: 5
        },
        {
            userid: 2,
            username: "Gregory House",
            ago9: 1,
            ago8: 2,
            ago7: 0,
            ago6: 4,
            ago5: 5,
            ago4: 1,
            ago3: 2,
            ago2: 3,
            ago1: 4,
            current: 5
        },
        {
            userid: 3,
            username: "Gregory House",
            ago9: 1,
            ago8: 2,
            ago7: 3,
            ago6: 0,
            ago5: 5,
            ago4: 1,
            ago3: 2,
            ago2: 3,
            ago1: 4,
            current: 5
        }
    ]
            switch (state) {
                case 1:
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
                        {propsForAllPeriods.map(prop =>
                        <   UserWithOlderReports prop={prop} key={prop.userid}/>
                        )}
                    </>
                )
            case 2:
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
                    {
                        propsForAllPeriods.map(prop =>
                            <UserWithOlderReports prop={prop} key={prop.userid}/>
                    )
                    }
                </>
            )
            case 3:
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
                    {propsForAllPeriods.map(prop =>
                        <UserWithOlderReports prop={prop} key={prop.userid}/>
                    )}
                </>
            )
            case 4:
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
                    {propsForAllPeriods.map(prop =>
                        <UserWithOlderReports prop={prop} key={prop.userid}/>
                    )}
                </>
            )
            default:
            return (<div>Ups-ss...</div>)
        }

};

export default ReportsOlder;