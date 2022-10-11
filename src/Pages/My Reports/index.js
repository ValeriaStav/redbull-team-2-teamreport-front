import React, { useEffect, useState } from "react"
import Header from "../../Components/Header"
import { FlexCol } from "../../styles"
import { useDispatch, useSelector } from "react-redux"
import {
  Container,
  HrShort,
  THead,
  RowExpand,
  RowCollapseHead,
  RowCollapse,
  RowCollapseBody,
  Button,
  ProfileIcon,
  HeaderText,
  VeryHappyCell,
  HappyCell,
  NeutralCell,
  SadCell,
  VerySadCell,
  TextRow,
  TextCell,
} from "./styles"

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import VeryHappy from "../../assets/very-happy.svg"
import Happy from "../../assets/happy.svg"
import Neutral from "../../assets/neutral.svg"
import Sad from "../../assets/sad.svg"
import VerySad from "../../assets/very-sad.svg"

import ReportWrapper from "../../Components/ReportWrapper"

const reportMock = [
  {
    id: 1,
    userId: 41,
    morale: 2,
    moraleDescription: "string",
    stress: 2,
    stressDescription: "string",
    workload: 2,
    workloadDescription: "string",
    high: "string",
    low: "string",
    anythingElse: "string",
    dateRange: "10 Sun - 12 Night",
  },
  {
    id: 2,
    userId: 41,
    morale: 3,
    moraleDescription: "string",
    stress: 5,
    stressDescription: "string",
    workload: 1,
    workloadDescription: "string",
    high: "string",
    low: "string",
    anythingElse: "string",
    dateRange: "mm-dd-yy/mm-dd-yy",
  },
]


const MyReports = () => {
  const [isActive, setIsActive] = useState("")
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.usersReducer.currentUserId)
  const reports = useSelector((state) => state.reportsReducer.byId[userId || '']?.reports)

  useEffect(() => {
    console.log("mount")
    dispatch({ type: "FETCH_USER_REPORTS_START", payload: { userId } })
    return () => {
      console.log("unmount")
    }
  }, [])

  const handleExpandAll = () => {
    if (isActive === "all") {
      setIsActive("nothing")
    } else {
      setIsActive("all")
    }
  }

  console.log({ reports })
  return (
    <FlexCol>
      <Header
        Content={
          <HeaderText>
            <ProfileIcon>
              <h5>TM</h5>
            </ProfileIcon>
            <h2>Team Member</h2>
            <p>team-member@ankosoftware.com</p>
          </HeaderText>
        }
      ></Header>
      <Container>
        <h2>Past Weekly Reports</h2>
        <div>
          <HrShort />
        </div>
        <div>
          <Button onClick={handleExpandAll}>Expand All</Button>
        </div>

        <THead>
          <th width='60%'></th>
          <th width='10%'>Morale</th>
          <th width='10%'>Stress</th>
          <th width='10%'>Workload</th>
          <th width='15%'></th>
        </THead>
        {reports?.length ? reports.map((report) => (
          <ReportWrapper
            key={`${report.id}`}
            report={report}
            isActive={isActive === "all" || isActive === report.reportId}
            setIsActive={setIsActive}
          />
        )) : null}
      </Container>
    </FlexCol>
  )
}

export default MyReports
