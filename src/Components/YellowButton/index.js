import React from 'react'
import { StyledButton } from './styles'

const YellowButton = ({ children, onClick, style, type }) => {
  return (
    <StyledButton type={type} style={style} onClick={onClick || (() => {})}>
      {children || 'OK'}
    </StyledButton>
  )
}

YellowButton.propTypes = {}

export default YellowButton
