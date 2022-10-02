import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Formik, ErrorMessage } from 'formik'
import Header from '../../Components/Header'
import { FlexCol } from '../../styles'
import HelpButton from '../../Components/HelpButton'
import FeedbackButton from '../../Components/FeedbackButton'
import validate, {
  moreThanTwo,
  startsFromCapitalize,
} from '../../utils/validators'

import {
  TitleContainer,
  Title,
  Subtitle,
  MemberIcon,
  Container,
  Divider,
} from './styles'
import InputField from '../../Components/InputField'
import { css } from 'styled-components'
import YellowButton from '../../Components/YellowButton'
import Error from '../../Components/Error'

const stylesOverride = {
  border: '1px solid grey',
}

const FillOutReport = () => {
  const { state: memberDetails } = useLocation()

  const { firstName, lastName, email, title } = memberDetails

  const handleSaveClick = submitValues => {
    console.log({ submitValues })
    // serve some axios request here
  }

  return (
    <FlexCol>
      <Header
        Content={
          <TitleContainer>
            <MemberIcon>{`${firstName[0]}${lastName[0]}`}</MemberIcon>
            <Title>{`${firstName} ${lastName}`}</Title>
            <Subtitle>{email}</Subtitle>
          </TitleContainer>
        }
      />
      <HelpButton />
      <FeedbackButton />
      <Container>
        <span
          style={{ fontWeight: 900, fontSize: '40px', marginBottom: '15px' }}
        >
          Edit {firstName}'s information
        </span>
        <span style={{ fontSize: '14px' }}>
          You may assign leaders or team members to this person, as well as
          deactivate their account if they no longer work on your organization.
        </span>
        <Divider>Basic Profile information</Divider>
        <Formik
          onSubmit={handleSaveClick}
          initialValues={{
            firstName: firstName,
            lastName: lastName,
            title: title,
          }}
          validate={values =>
            validate([
              {
                name: 'firstName',
                value: values.firstName,
                functions: [moreThanTwo, startsFromCapitalize],
              },
              {
                name: 'lastName',
                value: values.lastName,
                functions: [moreThanTwo, startsFromCapitalize],
              },
              {
                name: 'title',
                value: values.title,
                functions: moreThanTwo,
              },
            ])
          }
        >
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <InputField
                name="firstName"
                label="First Name"
                type="text"
                onChange={handleChange}
                initialValue={values.firstName}
                stylesOverride={{ ...stylesOverride, width: '200px' }}
                component={InputField}
              />
              <ErrorMessage name="firstName" component={Error} />
              <InputField
                name="lastName"
                label="Last Name"
                type="text"
                onChange={handleChange}
                initialValue={values.lastName}
                stylesOverride={{ ...stylesOverride, width: '300px' }}
                component={InputField}
              />
              <ErrorMessage name="lastName" component={Error} />
              <InputField
                name="title"
                label="Title"
                type="text"
                onChange={handleChange}
                initialValue={values.title}
                stylesOverride={{ ...stylesOverride, width: '400px' }}
                component={InputField}
              />
              <ErrorMessage name="title" component={Error} />
              <YellowButton type="submit" style={{ width: '70px' }}>
                Save
              </YellowButton>
            </form>
          )}
        </Formik>
        <Divider>{firstName} reports to the following leaders:</Divider>
        <Divider>The following members report to {firstName}:</Divider>
        <Divider>{firstName}'s invite link</Divider>
      </Container>
    </FlexCol>
  )
}

FillOutReport.propTypes = {}

export default FillOutReport
