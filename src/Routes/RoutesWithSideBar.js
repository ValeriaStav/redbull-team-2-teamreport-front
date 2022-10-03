import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/Home Page'
import InviteYourTeam from '../Pages/Invite Your Team'
import TeamReports from '../Pages/Team Reports'
import SeeMembers from '../Pages/See Members'
import FillOutReport from '../Pages/Fill Out Report'
import EditMember from '../Pages/Edit Member'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import { FlexCol } from '../styles'
import HelpButton from '../Components/HelpButton'
import { ColumnContainer, Container } from './styles'

const RoutesWithSideBar = () => {
  // const Route = props => <RouterRoute {...props} />

  return (
    <ColumnContainer className="RouterWrapper">
      <Sidebar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invite" element={<InviteYourTeam />} />
          <Route path="/team-reports" element={<TeamReports />} />
          <Route path="/fill" element={<FillOutReport />} />
          <Route path="/fill/:id" element={<SeeMembers />} />
          <Route path="/edit-member/:id" element={<EditMember />} />
        </Routes>
      </Container>
    </ColumnContainer>
  )
}

export default RoutesWithSideBar
