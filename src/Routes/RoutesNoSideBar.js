import React from 'react'
import {
  Route
} from "react-router-dom"

import LoginPage from '../Pages/Login Page'
import RegistrationPage from '../Pages/Registration Page'
import TeamRegistrationPage from '../Pages/Registration Team Member Page'

export const routesNoSideBar = () => {
  return (
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/company-registration" element={<RegistrationPage />} />
      <Route path="/team-member-registration" element={<TeamRegistrationPage />} />
    </>
  )
}
