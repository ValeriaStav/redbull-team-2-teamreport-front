import React, { useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { FormContainer, StyledForm, StyledTitle, SignInButton, WhiteTitle, OverlayContainer, StyledOverlay, MarginedTitle, OverlayRightPanel, StyledP, StyledBody, ContentContainer} from '../Login Page/styles'

import InputField from "../../Components/InputField"

const CompanyRegistration = (props) => {
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  const [companyName, setCompanyName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const submit = () => {
    navigate('/')
    // dispatch({ type: "SEND_LOGIN_CREDENTIALS", value: { email, password } })
    // Здесь диспатчить экшен с имейлом и паролем, а в саге, которая слушает этот экшен, отсылать аксиос запрос
  }

  const signIn = () => {
    navigate('/login')
  }

  return (
    <StyledBody>
      <ContentContainer>
        <FormContainer>
          <StyledForm>
            <StyledTitle>
              Company Registration
            </StyledTitle>
        <InputField placeholder='Company Name' type='email' onChange={setEmail}></InputField>
        <InputField placeholder='Email Address' type='email' onChange={setEmail}></InputField>
      <InputField placeholder='Password' type='password' onChange={setPassword}></InputField>
     
      <SignInButton onClick={submit}>Sign Up</SignInButton>
          </StyledForm>
        </FormContainer>
        <OverlayContainer>
          <StyledOverlay>
            <OverlayRightPanel>
              <WhiteTitle>
              Welcome Back!
              </WhiteTitle>

              <StyledP>
              To keep connected with us please login with your personal info
              </StyledP>
              <SignInButton onClick={signIn}>Sign In</SignInButton>
            </OverlayRightPanel>
          </StyledOverlay>
        </OverlayContainer>
      </ContentContainer>
    </StyledBody>
  )
}

CompanyRegistration.propTypes = {}

export default CompanyRegistration
