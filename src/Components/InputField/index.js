import React from "react"
import PropTypes from "prop-types"
import { StyledInput, WidthDiv } from './styles'

const InputField = ({ placeholder, type, onChange }) => {
  const handleChange = (event) => {
    onChange(event?.target?.value)
  }

  return (
    <>
      {window.location.pathname === '/team-member-registration' ? <WidthDiv>
        <StyledInput placeholder={placeholder} type={type} onChange={handleChange}></StyledInput>
      </WidthDiv> : <div>
        <StyledInput placeholder={placeholder} type={type} onChange={handleChange}></StyledInput>
      </div>
      }
    </>
  )
}



InputField.propTypes = {}

export default InputField
