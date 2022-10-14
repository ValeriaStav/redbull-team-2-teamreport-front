import { useEffect } from "react"

import TeamMemberСircle from "../../Components/TeamMemberCircle"

import { Wrapper, Container, CloseIcon, MembersListWrapper } from "./styles"

const Modal = ({ children, setIsOpen }) => {
  const handleEscapeClick = ({ key }) => {
    if (key === "Escape") {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeClick)
    return () => {
      window.removeEventListener("keydown", handleEscapeClick)
    }
  }, [])

  return (
    <Wrapper onClick={() => setIsOpen(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={() => setIsOpen(false)}>X</CloseIcon>
        {children}
      </Container>
    </Wrapper>
  )
}

export default Modal
