import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OptionsPanel, Switches } from "../../Pages/Team Reports/styles";
import UserWithThreeStates from "../UserWithThreeStates";
import ReportsOlder from "../ReportsOlder";

const ReportsWithThreeStates = ({ switcher }) => {
    const dispatch = useDispatch()
    const id = useSelector((state) => state.usersReducer.currentUserCommand)
    const renderData = useSelector((state) => state.teamReducer.teamReports)
    const [currentSubTab, setCurrentSubTab] = useState(1)

    useEffect(() => {
        switch (currentSubTab) {
            case 1: {
                dispatch({ type: "FETCH_EXTENDED_TEAM_REPORTS", payload: { id, reportType: 'overall' } })
                break
            }
            case 2: {
                dispatch({ type: "FETCH_EXTENDED_TEAM_REPORTS", payload: { id, reportType: 'morale' } })
                break
            }
            case 3: {
                dispatch({ type: "FETCH_EXTENDED_TEAM_REPORTS", payload: { id, reportType: 'stress' } })
                break
            }
            case 4: {
                dispatch({ type: "FETCH_EXTENDED_TEAM_REPORTS", payload: { id, reportType: 'workload' } })
                break
            }
            default: break
        }
    }, [currentSubTab])

    switch (switcher) {
        case 1:
            return (
                <>
                    <div style={{ textAlign: "center", fontSize: 18, marginBottom: 30, marginTop: 50 }}>
                        <b>IMMEDIATE TEAM</b>
                        <div style={{ background: "yellow", padding: 4, marginInline: 600, marginTop: 20 }}></div>
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
            return (
                <>
                    <div style={{ textAlign: "center", fontSize: 18, marginBottom: 30, marginTop: 50 }}>
                        <b>IMMEDIATE TEAM</b>
                        <div style={{ background: "yellow", padding: 4, marginInline: 600, marginTop: 20 }}></div>
                    </div>

                    <OptionsPanel>
                        <p style={{ marginRight: 35 }}>Morale</p>
                        <p style={{ marginRight: 25 }}>Stress</p>
                        <p style={{ marginRight: 100 }}>Workload</p>
                    </OptionsPanel>
                    {renderData.map(prop =>
                        <UserWithThreeStates prop={prop} key={prop.userid} />
                    )}
                </>
            )

        case 3: return (
            <>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                    <Switches active={currentSubTab === 1} onClick={() => {
                        setCurrentSubTab(1)
                    }}>
                        Overall
                    </Switches>
                    <Switches active={currentSubTab === 2} onClick={() => {
                        setCurrentSubTab(2)
                    }}>
                        Morale
                    </Switches>
                    <Switches active={currentSubTab === 3} onClick={() => {
                        setCurrentSubTab(3)
                    }}>
                        Stress
                    </Switches>
                    <Switches active={currentSubTab === 4} onClick={() => {
                        setCurrentSubTab(4)
                    }}>
                        Workload
                    </Switches>
                    <div style={{ textAlign: "center", fontSize: 18, marginBottom: 30, marginTop: 50 }}>
                        <b>EXTENDED TEAM AVERAGE</b>
                        <div style={{ background: "yellow", padding: 4, marginInline: 600, marginTop: 20 }}></div>
                    </div>
                </div>
                <ReportsOlder state={currentSubTab} props={renderData} />
            </>
        )
        default: return (<div>Ups-ss...</div>)

    }
};

export default ReportsWithThreeStates;