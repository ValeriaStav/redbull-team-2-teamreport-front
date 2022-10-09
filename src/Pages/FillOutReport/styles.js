import styled from "styled-components"
import FillOutLogo from '../../assets/FillOutLogo.png'


export const WelcomeLogo = styled.img`
  width: 408px;
  height: 60px;
`
export const StatusIcon = styled.img`
width: 60px;
heigh: 60px;
margin-bottom: 25px;
`
export const Container = styled.div`
margin-top: 50px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export const Title =  styled.div`
font-weight: 900;
    font-size: xxx-large;
    font-family: fangsong;

`
export const HeaderText = styled.div`
font-size: 14px;
    margin-top: 21px;
    word-spacing: -2px;
    color: #222222;
`
export const ContentWrapper = styled.div`
margin-top: 50px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export const StyledQuestion = styled.div`
font-size: 25px;
font-weight: 600;
margin-bottom: 20px;
` 
export const EmojiBlock = styled.div`
background-color: #ffffff;
width: 140px;
height: 145px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 20px;
cursor: pointer;

&:hover>img {
  transform: scale(1.2);
  transition: all 0.3s;
}
`
export const StatusWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
font-size: 13px;

`
WelcomeLogo.defaultProps = {
  src: FillOutLogo,
}