import React from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { Container, StyledLink, Logo } from "./styles"

const Sidebar = (props) => {
  const navigate = useNavigate()
  // console.log('window.location.pathname', window.location.pathname)

  // const handleClick = (pathname) => {
  //   history.push(pathname)
  // }

  return (
    <Container>
     <Logo />
      <StyledLink
        active={window.location.pathname === "/"}
        to="/"
      >
        Launch Guide
      </StyledLink>
      <StyledLink
        active={window.location.pathname === "/invite"}
        to="/invite"
      >
        Invite Your Team
      </StyledLink>
      <StyledLink
        active={window.location.pathname === "/team-reports"}
        to="/team-reports"
      >
        Team Reports
      </StyledLink>
      <StyledLink
        active={window.location.pathname === "/reports"}
        to="/reports"
      >
        My Reports
      </StyledLink>
      <StyledLink
        active={window.location.pathname === "/fill"}
        to="/fill"
      >
        Fill Out Report
      </StyledLink>
      <StyledLink
        active={window.location.pathname === "/login"}
       to="/login"
      >
        Login
      </StyledLink>
    </Container>
  )
}

Sidebar.propTypes = {}

export default Sidebar
