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
} from "../Login Page/styles"

import InputField from "../../Components/InputField"

const TeamRegistrationPage = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [title, setTitle] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const submit = () => {
    dispatch({ type: "SIGNUP_USER", payload: { firstName, lastName, email, title, password, navigate }})
  }

  const signIn = () => {
    navigate("/login")
  }

  return (
    <StyledBody>
      <ContentContainer>
        <FormContainer>
          <StyledForm>
            <StyledTitle>Team Member Registration</StyledTitle>
            <InputField
              placeholder='First Name'
              type='text'
              onChange={setFirstName}
            ></InputField>
            <InputField
              placeholder='Last Name'
              type='text'
              onChange={setLastName}
            ></InputField>
            <InputField
              placeholder='Title'
              type='text'
              onChange={setTitle}
            ></InputField>
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

            <SignInButton onClick={submit} type="button">Sign Up</SignInButton>
          </StyledForm>
        </FormContainer>
        <OverlayContainer>
          <StyledOverlay>
            <OverlayRightPanel>
              <WhiteTitle>Welcome Back!</WhiteTitle>

              <StyledP>
                If you already have an account in the teamplease login with your
                personal info
              </StyledP>
              <SignInButton onClick={signIn}>Sign In</SignInButton>
            </OverlayRightPanel>
          </StyledOverlay>
        </OverlayContainer>
      </ContentContainer>
    </StyledBody>
  )
}

TeamRegistrationPage.propTypes = {}

export default TeamRegistrationPage
