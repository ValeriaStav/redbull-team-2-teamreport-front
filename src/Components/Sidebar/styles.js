import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FlexRow } from '../../styles'
import SideBarLogo from '../../assets/SideBarLogo.png'

export const Logo = styled.img`
  width: 90%;
  height: 17%;
`

export const Container = styled(FlexRow)`
  width: 300px;
  background-color: #333a3d;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const StyledLink = styled(NavLink)`
  padding: 10px;
  margin-bottom: 7%;
  color: white;
  background-color: ${({active}) => active ? '#292F31' : 'transparent'};
  text-decoration: none;
  width: 68%;
  justify-content: center;
  font-weight: ${({active}) => active ? '900' : '500'};
  cursor: pointer;

  &:hover {
    color: yellow;
  }
`
Logo.defaultProps = {
  src: SideBarLogo,
};