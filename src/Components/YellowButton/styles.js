import styled from "styled-components";


export const StyledButton = styled.button`
  background-color: ${({disabled = false}) => disabled ? '#d8d8d8' : '#ffcd29'};
  border-radius: 2px;
  border: none;
  padding: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`