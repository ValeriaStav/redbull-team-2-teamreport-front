import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, StyledLink, Logo, BottomContainer } from './styles'
import { AiFillSetting } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'

const Sidebar = props => {
  const location = useLocation()

  return (
    <Container>
      <Logo />
      <StyledLink active={location.pathname === '/'} to="/">
        Launch Guide
      </StyledLink>
      <StyledLink active={location.pathname === '/invite'} to="/invite">
        Invite Your Team
      </StyledLink>
      <StyledLink
        active={location.pathname === '/team-reports'}
        to="/team-reports"
      >
        Team Reports
      </StyledLink>
      <StyledLink active={location.pathname === '/reports'} to="/reports">
        My Reports
      </StyledLink>
      <StyledLink
        active={
          location.pathname.includes('/fill') ||
          location.pathname.includes('/edit-member')
        }
        to="/fill"
      >
        Fill Out Report
      </StyledLink>
      <BottomContainer>
        <StyledLink active={location.pathname === '/edit'} to="/edit">
          Back to Elite
        </StyledLink>

        <StyledLink active={location.pathname === '/mycompany'} to="/mycompany">
          My Company
        </StyledLink>

        <StyledLink active={location.pathname === '/myprofile'} to="/myprofile">
          <AiFillSetting />
          My Profile
        </StyledLink>

        <StyledLink active={location.pathname === '/login'} to="/login">
          <BiExit />
          Sign Out
        </StyledLink>
      </BottomContainer>
    </Container>
  )
}

export default Sidebar
