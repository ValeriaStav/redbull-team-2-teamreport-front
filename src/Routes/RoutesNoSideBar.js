import React from 'react'
import {
  Route
} from "react-router-dom"

import LoginPage from '../Pages/Login Page'
import CompanyRegistration from '../Pages/CompanyRegistration'
import TeamRegistrationPage from '../Pages/Registration Team Member Page'

export const routesNoSideBar = () => {
  return (
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/company-registration" element={<CompanyRegistration />} />
      <Route path="/team-member-registration" element={<TeamRegistrationPage />} />
    </>
  )
}
