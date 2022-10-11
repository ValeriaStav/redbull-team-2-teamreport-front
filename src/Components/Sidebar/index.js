import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, StyledLink, Logo, BottomContainer, StyledButton } from './styles'
import { AiFillSetting } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'
import { useDispatch } from 'react-redux'

const Sidebar = props => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignout = () => {
    localStorage.removeItem('userToken')
    dispatch({ type: 'LOGOUT_USER' })
    navigate("/login")
  }

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

        <StyledLink active={
          location.pathname.includes('/my-company') ||
          location.pathname.includes('/edit-member')
        }
          to="/my-company"
        >
          My Company
        </StyledLink>

        <StyledLink active={location.pathname === '/myprofile'} to="/myprofile">
          <AiFillSetting />
          My Profile
        </StyledLink>

        <StyledButton active={location.pathname === '/login'} onClick={handleSignout}>
          <BiExit />
          Sign Out
        </StyledButton>
      </BottomContainer>
    </Container>
  )
}

export default Sidebar
