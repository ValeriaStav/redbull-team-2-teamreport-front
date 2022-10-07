import styled from 'styled-components'

export const StyledButton = styled.div`
  background-color: #0b3d67;
  width: 95px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  transform: translate(calc((95px - 35px) / 2), 0) rotate(-90deg);
  cursor: pointer;
  position: fixed;
  top: 60%;
  right: 0px;

  svg {
    margin-right: 5px;
  }
`
