import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader } from './styles'

const Header = ({Content}) => {

  return (
    <StyledHeader> 
      {Content}
    </StyledHeader>
  )
}
 Header.propTypes = {}

export default Header