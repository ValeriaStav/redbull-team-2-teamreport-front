import React from 'react'
import { StyledButton } from './styles'

const YellowButton = ({ children, onClick, style, type, disabled }) => {
  return (
    <StyledButton type={type} style={style} onClick={onClick || (() => {})} disabled={disabled}>
      {children || 'OK'}
    </StyledButton>
  )
}

YellowButton.propTypes = {}

export default YellowButton
