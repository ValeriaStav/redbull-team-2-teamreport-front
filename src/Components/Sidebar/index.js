import React from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { Container, StyledLink, Logo, BottomContainer } from "./styles"
import { AiFillSetting } from "react-icons/ai";
import { BiExit } from "react-icons/bi";

const Sidebar = (props) => {
  const navigate = useNavigate()

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
      <BottomContainer>
      <StyledLink
        active={window.location.pathname === "/edit"}
       to="/edit"
      >
        Back to Elite
      </StyledLink>

      <StyledLink
        active={window.location.pathname === "/mycompany"}
       to="/mycompany"
      >
        My Company
      </StyledLink>

      <StyledLink
        active={window.location.pathname === "/myprofile"}
       to="/myprofile"
      >
        <AiFillSetting />
        My Profile
      </StyledLink>

      <StyledLink
        active={window.location.pathname === "/login"}
       to="/login"
      >
        <BiExit />
       Sign Out
      </StyledLink>
      </BottomContainer>
    </Container>
  )
}

Sidebar.propTypes = {}

export default Sidebar
