import React from "react"
import { StyledInput, WidthDiv, InputLabel } from "./styles"

const InputField = ({
  placeholder,
  type,
  onChange,
  label,
  initialValue,
  stylesOverride,
  ...props
}) => {
  const handleChange = (event) => {
    props.name ? onChange(event) : onChange(event?.target?.value)
  }

  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      {window.location.pathname === "/team-member-registration" ? (
        <WidthDiv>
          <StyledInput
            stylesOverride={stylesOverride}
            defaultValue={initialValue || ""}
            placeholder={placeholder}
            type={type}
            onChange={handleChange}
            {...props}
          ></StyledInput>
        </WidthDiv>
      ) : (
        <div>
          <StyledInput
            stylesOverride={stylesOverride}
            defaultValue={initialValue || ""}
            placeholder={placeholder}
            type={type}
            onChange={handleChange}
            {...props}
          ></StyledInput>
        </div>
      )}
    </>
  )
}

InputField.propTypes = {}

export default InputField
