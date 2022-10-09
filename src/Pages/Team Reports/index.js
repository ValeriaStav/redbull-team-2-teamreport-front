import React, {useState} from 'react'
import Header from "../../Components/Header";
import { Switches, HeaderText} from "./styles"
import ReportsWithThreeStates from "../../Components/ReportsWithThreeStates";

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