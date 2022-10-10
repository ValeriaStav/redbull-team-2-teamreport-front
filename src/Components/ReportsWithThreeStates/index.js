import React, {useState} from 'react';
import { OptionsPanel, Switches} from "../../Pages/Team Reports/styles";
import UserWithThreeStates from "../UserWithThreeStates";
import ReportsOlder from "../ReportsOlder";
import Overall from "../Overall";

const ReportsWithThreeStates = ({switcher}) => {

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

    const [state, setState] = useState(1)
        switch (switcher){
            case 1:
                const propsP = [
                    {
                        userid: 1,
                        username:"Antony Stark",
                        morale: 2,
                        stress: 4,
                        workload:2
                    },
                    {
                        userid: 2,
                        username:"Antony Stark",
                        morale: 2,
                        stress: 4,
                        workload:2
                    }
                ]
                return (
                <>
                    <div style={{textAlign: "center", fontSize: 18, marginBottom: 30, marginTop: 50}}>
                        <b>IMMEDIATE TEAM</b>
                        <div style={{background: "yellow", padding: 4, marginInline: 760, marginTop: 20}}></div>
                    </div>

                    <OptionsPanel>
                        <p style={{marginRight: 35}}>Morale</p>
                        <p style={{marginRight: 25}}>Stress</p>
                        <p style={{marginRight: 100}}>Workload</p>
                    </OptionsPanel>
                    {propsP.map(prop =>
                        <UserWithThreeStates prop={prop} key={prop.userid}/>
                    )}
                </>
            )

            case 2:
                const propsC = [
                    {
                        userid: 1,
                        username:"Antony Stark",
                        morale: 1,
                        stress: 4,
                        workload:2
                    },
                    {
                        userid: 2,
                        username:"Antony Stark",
                        morale: 5,
                        stress: 3,
                        workload:1
                    }
                ]
                return (
                <>
                    <div style={{textAlign: "center", fontSize: 18, marginBottom: 30, marginTop: 50}}>
                        <b>IMMEDIATE TEAM</b>
                        <div style={{background: "yellow", padding: 4, marginInline: 760, marginTop: 20}}></div>
                    </div>

                    <OptionsPanel>
                        <p style={{marginRight: 35}}>Morale</p>
                        <p style={{marginRight: 25}}>Stress</p>
                        <p style={{marginRight: 100}}>Workload</p>
                    </OptionsPanel>
                    {propsC.map(prop =>
                        <UserWithThreeStates prop={prop} key={prop.userid}/>
                    )}
                </>
            )

            case 3: return (
                <>
                    <div style={{textAlign: "center", marginTop: 20}}>
                        <Switches active={state === 1} onClick={() => setState(1)}>
                            Overall
                        </Switches>
                        <Switches active={state === 2} onClick={() => setState(2)}>
                            Morale
                        </Switches>
                        <Switches active={state === 3} onClick={() => setState(3)}>
                            Stress
                        </Switches>
                        <Switches active={state === 4} onClick={() => setState(4)}>
                            Workload
                        </Switches>
                        <div style={{textAlign: "center", fontSize: 18, marginBottom: 30, marginTop: 50}}>
                            <b>EXTENDED TEAM AVERAGE</b>
                            <div style={{background: "yellow", padding: 4, marginInline: 760, marginTop: 20}}></div>
                        </div>
                    </div>
                    <Overall props={propsForAllPeriods}/>
                    <div style={{textAlign: "center", fontSize: 18, marginBottom: 30, marginTop: 50}}>
                        <b>EXTENDED TEAM</b>
                        <div style={{background: "yellow", padding: 4, marginInline: 760, marginTop: 20}}></div>
                    </div>
                    <ReportsOlder state={state} />
                </>
            )
            default: return (<div>Ups-ss...</div>)

        }
};

export default ReportsWithThreeStates;