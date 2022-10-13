import React, { useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { Formik, ErrorMessage } from "formik"

import validate, {
  passwordRule,
  validEmail,
} from "../../utils/validators"

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
  const dispatch = useDispatch()

  const submit = (values) => {
    dispatch({ type: "SIGNIN_USER", payload: { ...values, navigate } })
  }

  const signUp = () => {
    navigate("/team-member-registration")
  }

  return (
    <StyledBody>
      <ContentContainer>
        <FormContainer>
          <Formik onSubmit={submit}
            initialValues={{
              firstName: '',
              lastName: '',
              title: '',
              email: '',
              password: '',
            }}

            validate={(values) =>
              validate([
                {
                  name: "email",
                  value: values.email,
                  functions: validEmail,
                },
                {
                  name: "password",
                  value: values.password,
                  functions: passwordRule,
                },
              ])
            }
          >
            {({ handleSubmit, handleChange }) => (
              <StyledForm onSubmit={handleSubmit}>
                <StyledTitle>Sign In</StyledTitle>
                <InputField
                  placeholder='Email Address'
                  name='email'
                  type='email'
                  onChange={handleChange}
                ></InputField>
                <InputField
                  placeholder='Password'
                  name='password'
                  type='password'
                  onChange={handleChange}
                ></InputField>
                <MarginedTitle> Forgot Password ?</MarginedTitle>

                <SignInButton onClick={submit}>Sign In</SignInButton>
              </StyledForm>
            )}
          </Formik>
        </FormContainer>
        <OverlayContainer>
          <StyledOverlay>
            <OverlayRightPanel>
              <WhiteTitle>Hello, Friend!</WhiteTitle>

              <StyledP>
                Enter your details and start improving your business
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
