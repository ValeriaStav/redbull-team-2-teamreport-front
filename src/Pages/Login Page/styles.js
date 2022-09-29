import styled from 'styled-components'

export const FormContainer= styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  width: 50%;
`

export const StyledForm = styled.form`
  background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
`
export const StyledTitle = styled.h1`
font-weight: bold;
margin: 0;
color: #1f2426;

`
export const WhiteTitle = styled.h1`
font-weight: bold;
margin: 0;
`


export const SignInButton = styled.button`
border-radius: 20px;
border: 1px solid #333a3d;
background-color: #333a3d;
color: #FFFFFF;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
cursor: pointer;

&:active {
	transform: scale(0.95);
}
`

export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
z-index: 100;
`

export const StyledOverlay = styled.div`
background: linear-gradient(to right, #ee9428, #ffd658);
color: #FFFFFF;
position: relative;
left: -100%;
height: 100%;
width: 200%;
`

export const OverlayRightPanel = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
top: 0;
height: 100%;
width: 50%;
right: 0;
`
export const StyledP = styled.p`
font-size: 14px;
font-weight: 100;
line-height: 20px;
letter-spacing: 0.5px;
margin: 20px 0 30px;
`

export const StyledBody = styled.body`
background: #f6f5f7;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Montserrat', sans-serif;
height: 100vh;
`
export const ContentContainer = styled.div`
background-color: #fff;
border-radius: 10px;
position: relative;
overflow: hidden;
width: 768px;
max-width: 100%;
min-height: 480px;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
`

export const MarginedTitle = styled.div`
margin: 10px;
color: #635858;
opacity: 0.7;
font-weight: 200;
`




