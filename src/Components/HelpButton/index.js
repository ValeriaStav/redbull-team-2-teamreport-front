import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const HelpButton = props => {
  return (
    <StyledButton>
      <AiOutlineQuestionCircle />
      Help
    </StyledButton>
  )
}

HelpButton.propTypes = {}

export default HelpButton