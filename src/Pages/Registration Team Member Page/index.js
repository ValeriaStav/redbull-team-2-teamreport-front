import React, { useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { Formik, ErrorMessage } from "formik"
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

import validate, {
  moreThanTwo,
  startsFromCapitalize,
  passwordRule,
  validEmail,
} from "../../utils/validators"

import Error from "../../Components/Error"

import InputField from "../../Components/InputField"

const TeamRegistrationPage = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submit = (values) => {
    dispatch({ type: "SIGNUP_USER", payload: { ...values, navigate } })
  }

  const signIn = () => {
    navigate("/login")
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
                  name: "firstName",
                  value: values.firstName,
                  functions: [moreThanTwo, startsFromCapitalize],
                },
                {
                  name: "lastName",
                  value: values.lastName,
                  functions: [moreThanTwo, startsFromCapitalize],
                },
                {
                  name: "title",
                  value: values.title,
                  functions: moreThanTwo,
                },
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
            {(({ handleSubmit, handleChange }) => (
              <StyledForm onSubmit={handleSubmit}>
                <StyledTitle>Team Member Registration</StyledTitle>
                <InputField
                  placeholder='First Name'
                  name="firstName"
                  type='text'
                  onChange={handleChange}
                />
                <ErrorMessage name='firstName' component={Error} />
                <InputField
                  placeholder='Last Name'
                  name="lastName"
                  type='text'
                  onChange={handleChange}
                />
                <ErrorMessage name='lastName' component={Error} />
                <InputField
                  placeholder='Title'
                  name="title"
                  type='text'
                  onChange={handleChange}
                />
                <ErrorMessage name='title' component={Error} />
                <InputField
                  placeholder='Email Address'
                  name="email"
                  type='email'
                  onChange={handleChange}
                />
                <ErrorMessage name='email' component={Error} />
                <InputField
                  placeholder='Password'
                  name="password"
                  type='password'
                  onChange={handleChange}
                />
                <ErrorMessage name='password' component={Error} />
                <SignInButton type="submit">Sign Up</SignInButton>
              </StyledForm>
            ))}
          </Formik>
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
