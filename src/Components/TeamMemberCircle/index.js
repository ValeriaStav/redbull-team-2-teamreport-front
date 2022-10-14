import React from "react"
import { CircleDiv } from "./styles"

const TeamMemberСircle = ({
    name,
  ...props
}) => {

  return (
    <>
        <CircleDiv {...props}>
            {name}
        </CircleDiv>
      
    </>
  )
}

TeamMemberСircle.propTypes = {}

export default TeamMemberСircle