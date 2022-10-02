import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/Home Page'
import InviteYourTeam from '../Pages/Invite Your Team'
import TeamReports from '../Pages/Team Reports'
import FillOutReport from '../Pages/Fill Out Report'
import EditMember from '../Pages/Edit Member'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import { FlexCol } from '../styles'
import HelpButton from '../Components/HelpButton'
import { ColumnContainer } from './styles'

import { RoutesWrapper } from './styles'

const RoutesWithSideBar = () => {
  return (
    <RoutesWrapper>
      <Sidebar />
      <ColumnContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invite" element={<InviteYourTeam />} />
          <Route path="/team-reports" element={<TeamReports />} />
          <Route path="/fill" element={<FillOutReport />} />
          <Route path="/edit-member/:id" element={<EditMember />} />
        </Routes>
      </ColumnContainer>
    </RoutesWrapper>
  )
}

export default RoutesWithSideBar
