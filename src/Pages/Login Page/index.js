import React, { useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import {
  FormContainer,
  StyledForm,
  StyledTitle,
  SignInButton,
  WhiteTitle,
  OverlayContainer,
  StyledOverlay,
  MarginedTitle,
  OverlayRightPanel,
  StyledP,
  StyledBody,
  ContentContainer,
} from "./styles"

import InputField from "../../Components/InputField"

const LoginPage = (props) => {
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const submit = () => {
    navigate("/")
    // dispatch({ type: "SEND_LOGIN_CREDENTIALS", value: { email, password } })
    // Здесь диспатчить экшен с имейлом и паролем, а в саге, которая слушает этот экшен, отсылать аксиос запрос
  }

  const signUp = () => {
    navigate("/company-registration")
  }

  return (
    <StyledBody>
      <ContentContainer>
        <FormContainer>
          <StyledForm>
            <StyledTitle>Sign In</StyledTitle>
            <InputField
              placeholder='Email Address'
              type='email'
              onChange={setEmail}
            ></InputField>
            <InputField
              placeholder='Password'
              type='password'
              onChange={setPassword}
            ></InputField>
            <MarginedTitle> Forgot Password ?</MarginedTitle>

            <SignInButton onClick={submit}>Sign In</SignInButton>
          </StyledForm>
        </FormContainer>
        <OverlayContainer>
          <StyledOverlay>
            <OverlayRightPanel>
              <WhiteTitle>Hello, Friend!</WhiteTitle>

              <StyledP>
                Enter your company details and start improving your business
                with us
              </StyledP>
              <SignInButton onClick={signUp}>Sign Up</SignInButton>
            </OverlayRightPanel>
          </StyledOverlay>
        </OverlayContainer>
      </ContentContainer>
    </StyledBody>
  )
}

LoginPage.propTypes = {}

export default LoginPage
