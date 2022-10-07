import styled from "styled-components"


export const TitleContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.div`
  font-size: 48px;
`

export const Subtitle = styled.div`
  font-size: 12px;
`

export const MembersContainer = styled.div`
  width: 80%;
  margin: 40px auto 0;
`

export const MemberCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 1px 2px #ededed;

  >div {
    display: flex;
    justify-content: space-between;  
    align-items: center;
  }
`

export const MemberIcon = styled.div`
  padding: 10px;
  border-radius: 100%;
  background-color: #dddddd;
  margin-right: 20px;
`

export const MemberName = styled.div`

`

export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
