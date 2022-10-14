import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #ffffffbb;
  cursor: pointer;
  z-index: 1;
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 700px;
  padding: 70px 50px;
  background-color: white;
  border-top: 2px solid #ffcd29;
  box-shadow: 0px 3px 5px 1px #bababa;
  cursor: default;
  z-index: 2;
`

export const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 24px;
  cursor: pointer;
`

export const MembersListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 2px 8px 0;
`
