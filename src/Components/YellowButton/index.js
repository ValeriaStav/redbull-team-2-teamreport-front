import React from 'react'
import { StyledButton } from './styles'

const YellowButton = ({ buttonText, children, onClick }) => {
  return (
    <StyledButton onClick={onClick || (() => {})}>
      { children || 'OK'}
    </StyledButton >
  )
}

YellowButton.propTypes = {}

export default YellowButton