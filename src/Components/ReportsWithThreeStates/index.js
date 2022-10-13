import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OptionsPanel, Switches } from "../../Pages/Team Reports/styles";
import UserWithThreeStates from "../UserWithThreeStates";
import ReportsOlder from "../ReportsOlder";

const ReportsWithThreeStates = ({ switcher }) => {

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
            ago9: 5,
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
    const propsForAllPeriodsM = [
        {
            userid: 1,
            username: "Gregory House",
            ago9: 1,
            ago8: 4,
            ago7: 3,
            ago6: 3,
            ago5: 5,
            ago4: 2,
            ago3: 5,
            ago2: 3,
            ago1: 3,
            current: 5
        },
        {
            userid: 2,
            username: "Gregory House",
            ago9: 5,
            ago8: 2,
            ago7: 0,
            ago6: 4,
            ago5: 3,
            ago4: 1,
            ago3: 2,
            ago2: 3,
            ago1: 1,
            current: 5
        },
        {
            userid: 3,
            username: "Gregory House",
            ago9: 1,
            ago8: 2,
            ago7: 3,
            ago6: 3,
            ago5: 5,
            ago4: 1,
            ago3: 0,
            ago2: 3,
            ago1: 0,
            current: 5
        }
    ]
    const propsForAllPeriodsS = [
        {
            userid: 1,
            username: "Gregory House",
            ago9: 1,
            ago8: 2,
            ago7: 3,
            ago6: 1,
            ago5: 5,
            ago4: 1,
            ago3: 0,
            ago2: 3,
            ago1: 4,
            current: 4
        },
        {
            userid: 2,
            username: "Gregory House",
            ago9: 5,
            ago8: 4,
            ago7: 0,
            ago6: 4,
            ago5: 1,
            ago4: 1,
            ago3: 0,
            ago2: 3,
            ago1: 4,
            current: 3
        },
        {
            userid: 3,
            username: "Gregory House",
            ago9: 1,
            ago8: 2,
            ago7: 1,
            ago6: 0,
            ago5: 5,
            ago4: 5,
            ago3: 2,
            ago2: 5,
            ago1: 4,
            current: 0
        }
    ]
    const propsForAllPeriodsW = [
        {
            userid: 1,
            username: "Gregory House",
            ago9: 1,
            ago8: 2,
            ago7: 2,
            ago6: 0,
            ago5: 5,
            ago4: 2,
            ago3: 2,
            ago2: 2,
            ago1: 4,
            current: 1
        },
        {
            userid: 2,
            username: "Gregory House",
            ago9: 5,
            ago8: 2,
            ago7: 1,
            ago6: 4,
            ago5: 1,
            ago4: 1,
            ago3: 2,
            ago2: 1,
            ago1: 4,
            current: 1
        },
        {
            userid: 3,
            username: "Gregory House",
            ago9: 1,
            ago8: 2,
            ago7: 3,
            ago6: 0,
            ago5: 5,
            ago4: 3,
            ago3: 2,
            ago2: 3,
            ago1: 3,
            current: 0
        }
    ]

    const [propsAll, setPropsAll] = useState(propsForAllPeriodsM);
    const dispatch = useDispatch()
    const id = useSelector((state) => state.usersReducer.currentUserCommand)
    const renderData = useSelector((state) => state.teamReducer.teamReports)

    const [state, setState] = useState(1)





    switch (switcher) {
        case 1:
            const propsP = [
                {
                    userid: 1,
                    username: "Antony Stark",
                    morale: 2,
                    stress: 4,
                    workload: 2
                },
                {
                    userid: 2,
                    username: "Antony Stark",
                    morale: 2,
                    stress: 4,
                    workload: 2
                }
            ]
            return (
                <>
                    <div style={{ textAlign: "center", fontSize: 18, marginBottom: 30, marginTop: 50 }}>
                        <b>IMMEDIATE TEAM</b>
                        <div style={{ background: "yellow", padding: 4, marginInline: 760, marginTop: 20 }}></div>
                    </div>

                    <OptionsPanel>
                        <p style={{ marginRight: 35 }}>Morale</p>
                        <p style={{ marginRight: 25 }}>Stress</p>
                        <p style={{ marginRight: 100 }}>Workload</p>
                    </OptionsPanel>
                    {renderData.map((prop, index) =>
                        <UserWithThreeStates prop={prop} key={index} />
                    )}
                </>
            )

        case 2:
            const propsC = [
                {
                    userid: 1,
                    username: "Antony Stark",
                    morale: 1,
                    stress: 4,
                    workload: 2
                },
                {
                    userid: 2,
                    username: "Antony Stark",
                    morale: 5,
                    stress: 3,
                    workload: 1
                }
            ]
            return (
                <>
                    <div style={{ textAlign: "center", fontSize: 18, marginBottom: 30, marginTop: 50 }}>
                        <b>IMMEDIATE TEAM</b>
                        <div style={{ background: "yellow", padding: 4, marginInline: 760, marginTop: 20 }}></div>
                    </div>

                    <OptionsPanel>
                        <p style={{ marginRight: 35 }}>Morale</p>
                        <p style={{ marginRight: 25 }}>Stress</p>
                        <p style={{ marginRight: 100 }}>Workload</p>
                    </OptionsPanel>
                    {propsC.map(prop =>
                        <UserWithThreeStates prop={prop} key={prop.userid} />
                    )}
                </>
            )

        case 3: return (
            <>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                    <Switches active={state === 1} onClick={() => {
                        setState(1)
                        setPropsAll(propsForAllPeriods)
                    }}>
                        Overall
                    </Switches>
                    <Switches active={state === 2} onClick={() => {
                        setState(2)
                        setPropsAll(propsForAllPeriodsM)
                    }}>
                        Morale
                    </Switches>
                    <Switches active={state === 3} onClick={() => {
                        setState(3)
                        setPropsAll(propsForAllPeriodsS)
                    }}>
                        Stress
                    </Switches>
                    <Switches active={state === 4} onClick={() => {
                        setState(4)
                        setPropsAll(propsForAllPeriodsW)
                    }}>
                        Workload
                    </Switches>
                    <div style={{ textAlign: "center", fontSize: 18, marginBottom: 30, marginTop: 50 }}>
                        <b>EXTENDED TEAM AVERAGE</b>
                        <div style={{ background: "yellow", padding: 4, marginInline: 760, marginTop: 20 }}></div>
                    </div>
                </div>
                <ReportsOlder state={state} props={propsAll} />

            </>
        )
        default: return (<div>Ups-ss...</div>)

    }
};

export default ReportsWithThreeStates;