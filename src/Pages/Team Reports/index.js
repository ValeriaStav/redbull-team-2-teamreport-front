import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ReportsWithThreeStates from "../../Components/ReportsWithThreeStates";
import Header from "../../Components/Header";
import { Switches, HeaderText} from "./styles"


const TeamReports = () => {
    const [switcher, setSwitcher] = useState(1)
    const dispatch = useDispatch();
    const id = useSelector((state) => state.usersReducer.currentUserCommand)
    const reports = useSelector((state) => state.teamReducer.teamReports)

    useEffect(() => {
        switch (switcher) {
            case 1:
                dispatch({ type: "FETCH_IMMEDIATE_TEAM_REPORTS", payload: { id, reportType: 'previous' } })
                break
            case 2:
                dispatch({ type: "FETCH_IMMEDIATE_TEAM_REPORTS", payload: { id, reportType: 'current' } })
                break

            case 3:
                dispatch({ type: "FETCH_EXTENDED_TEAM_REPORTS", payload: { id, reportType: 'overall' } })
                break

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
                              {reports.length > 0
                                  ?
                                  <b> has {reports.length} reports </b>
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