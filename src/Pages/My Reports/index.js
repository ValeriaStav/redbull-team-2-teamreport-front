
import React, { useEffect, useState } from "react"
import Header from "../../Components/Header"
import HelpButton from "../../Components/HelpButton"
import FeedbackButton from "../../Components/FeedbackButton"
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
} from "./styles";

import ReportWrapper from "../../Components/ReportWrapper";

const MyReports = () => {

  const [isActive, setIsActive] = useState("")
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.usersReducer.currentUserId)
  const reports = useSelector((state) => state.reportsReducer.byId[userId || '']?.reports)

  useEffect(() => {
    dispatch({ type: "FETCH_USER_REPORTS_START", payload: { userId } })
  }, [])


    const handleExpandAll = () => {
        if (isActive === "all") {
            setIsActive("nothing");
        } else {
            setIsActive("all");
        }
    };

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
            <HelpButton />
            <FeedbackButton />
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

