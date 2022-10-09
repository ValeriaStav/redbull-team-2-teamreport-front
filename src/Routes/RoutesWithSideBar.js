import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/Home Page'
import InviteYourTeam from '../Pages/Invite Your Team'
import TeamReports from '../Pages/Team Reports'
import SeeMembers from '../Pages/See Members'
import MyCompany from '../Pages/My Company'
import EditMember from '../Pages/Edit Member'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import FillOutReport from '../Pages/FillOutReport'
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
          <Route path="/my-company" element={<MyCompany />} />
          <Route path="/my-company/:id" element={<SeeMembers />} />
          <Route path="/edit-member/:id" element={<EditMember />} />
          <Route path="/fill" element={<FillOutReport />} />

        </Routes>
      </Container>
    </ColumnContainer>
  )
}

export default RoutesWithSideBar
