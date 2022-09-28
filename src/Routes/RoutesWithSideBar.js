import {
  Routes,
  Route,
} from "react-router-dom"
import HomePage from '../Pages/Home Page'
import InviteYourTeam from '../Pages/Invite Your Team'
import TeamReports from '../Pages/Team Reports'
import Sidebar from "../Components/Sidebar"

import { RoutesWrapper } from './styles'

const RoutesWithSideBar = () => {
  return (
    <RoutesWrapper>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invite" element={<InviteYourTeam />} />
        <Route path="/team-reports" element={<TeamReports />} />
      </Routes>
    </RoutesWrapper>
  )
}

export default RoutesWithSideBar