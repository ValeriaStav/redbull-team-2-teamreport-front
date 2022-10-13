import React, { useState, useEffect} from 'react'
import Header from "../../Components/Header";
import { Switches, HeaderText} from "./styles"
import ReportsWithThreeStates from "../../Components/ReportsWithThreeStates";
import { useDispatch, useSelector } from 'react-redux';

const TeamReports = () => {
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
    const [switcher, setSwitcher] = useState(1)
    const dispatch = useDispatch();
    const id = useSelector((state) => state.usersReducer.currentUserCommand)

    useEffect(() => {
        console.log("4cw3ws4tw", switcher)
        switch (switcher) {
            case 1:
                dispatch({ type: "FETCH_IMMEDIATE_TEAM_REPORTS", payload: { id, reportTipe: 'previous' } })

            case 2:
                dispatch({ type: "FETCH_IMMEDIATE_TEAM_REPORTS", payload: { id, reportTipe: 'current' } })

            case 3:
                dispatch({ type: "FETCH_EXTENDED_TEAM_REPORTS", payload: { id, reportTipe: 'overall' } })

            default: break

        }
    }, [switcher])

    return (
          <>
              <Header
                Content={
                  <>
                      <div>
                          <Switches active={switcher < 3} onClick={() => setSwitcher(1)}>Immediate Team</Switches>
                          <Switches active={switcher === 3} onClick={() => setSwitcher(3)}>Extended Team</Switches>
                      </div>
                      {switcher !== 3 ?
                          <HeaderText>
                              Your team
                              {propsP.length > 0
                                  ?
                                  <b> has {propsP.length} reports </b>
                                  :
                                  <b> has not submitted </b>
                              }
                              reports this week
                          </HeaderText>
                          :
                          <>
                              <HeaderText><b>Weekly Report History</b></HeaderText>
                              <p style={{color: "white", fontSize: 20, marginBottom: 0, paddingBottom:0}}>Get a bigger picture of how your team has been doing over time</p>
                          </>
                      }

                  </>
                }
              />
              <div style={{textAlign: "center", marginTop: 20}}>
                  <Switches active={switcher === 1} onClick={() => setSwitcher(1)}>
                    Previous Period
                  </Switches>
                  <Switches active={switcher === 2} onClick={() => setSwitcher(2)}>
                      Current Period
                  </Switches>
                  <Switches active={switcher === 3} onClick={() => setSwitcher(3)}>
                      Older Reports
                  </Switches>
              </div>

              <ReportsWithThreeStates switcher={switcher}/>

          </>

    )
}

export default TeamReports