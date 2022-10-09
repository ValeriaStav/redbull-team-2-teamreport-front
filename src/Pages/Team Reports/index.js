import React from 'react'
import Header from "../../Components/Header";
import UserWithThreeStates from "../../Components/UserWithThreeStates";
import {OptionsPanel, Switches, TextInHeader} from "./styles"

const TeamReports = () => {
    const props = [
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
              <Header
                Content={
                  <>
                  <TextInHeader>
                      Your team
                      {props.length > 0
                          ?
                          <b> has {props.length} reports </b>
                          :
                          <b> has not submitted </b>
                      }
                      reports this week
                  </TextInHeader>
                  </>
                }
              />
              <div style={{textAlign: "center", marginTop: 20}}>
                  <Switches>
                    Previous Period
                  </Switches>
                  <Switches>
                      Current Period
                  </Switches>
                  <Switches>
                      Older Reports
                  </Switches>
              </div>
              <div style={{textAlign: "center", fontSize: 18}}>
                  <b>IMMEDIATE TEAM</b>
                  <div style={{background: "yellow", padding: 4, marginInline: 760, marginTop: 20}}></div>
              </div>
              <OptionsPanel>
                  <p style={{marginRight: 35}}>Morale</p>
                  <p style={{marginRight: 25}}>Stress</p>
                  <p style={{marginRight: 100}}>Workload</p>
              </OptionsPanel>
              {props.map(prop =>
                  <UserWithThreeStates prop={prop} key={prop.userid}/>
              )}

          </>

    )
}

export default TeamReports