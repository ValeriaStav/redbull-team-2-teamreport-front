import React from "react"
import PropTypes from "prop-types"

const InputField = ({ label, onChange }) => {
  const handleChange = (event) => {
    onChange(event?.target?.value)
  }

  return (
    <div>
      {label && <div>{label}</div>}
      <input onChange={handleChange}></input>
    </div>
  )
}

InputField.propTypes = {}

export default InputField
