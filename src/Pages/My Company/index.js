import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Formik, ErrorMessage } from "formik"
import { useSelector } from 'react-redux'
import Header from "../../Components/Header"
import { FlexCol } from "../../styles"
import HelpButton from "../../Components/HelpButton"
import FeedbackButton from "../../Components/FeedbackButton"
import InputField from "../../Components/InputField"
import WhiteButton from "../../Components/WhiteButton"

import { TitleContainer, Title, Subtitle, MembersContainer } from "./styles"
import { Divider } from "../Edit Member/styles"
import validate, { moreThanTwo } from "../../utils/validators"

const companyMock = {
  id: 1,
  name: "ANKO Technology Corp",
  date: "January 2020",
}

const stylesOverride = {
  border: "1px solid #ffcd29",
  borderRadius: "6px",
  width: "400px",
  backgroundColor: "white",
}

const MyCompany = (props) => {
  const navigate = useNavigate()
  const company = useSelector((state) => state.currentCompanyId)

  const handleSaveClick = (values) => {
    console.log("values", values)
  }

  const handleSeeClick = () => {
    navigate(`/my-company/${companyMock.id}`)
  }

  const signUp = () => {
    navigate("/company-registration")
  }

  return (
    <FlexCol>
      {!company? (
      <> 
      <Header
        Content={
          <TitleContainer>
            <Title>You don't have company yet</Title>
          </TitleContainer>
        } />
         <HelpButton />
      <FeedbackButton />
      <MembersContainer>
      <h1>You can create your company now</h1>
      <WhiteButton onClick={signUp} >Sign Up Company</WhiteButton>

       </MembersContainer>
      </> ) : (
        <>
      <Header
        Content={
          <TitleContainer>
            <Title>{companyMock.name}</Title>
            <Subtitle>Joined {companyMock.date}</Subtitle>
          </TitleContainer>
        }
      />
      <HelpButton />
      <FeedbackButton />
      <MembersContainer>
        <h1>Edit {companyMock.name}'s Information</h1>
        <span>You may do whatever you want here!</span>
        <Divider>Rename {companyMock.name}</Divider>
        <Formik
          onSubmit={handleSaveClick}
          initialValues={{
            name: companyMock.name,
          }}
          validate={(values) =>
            validate([
              {
                name: "name",
                value: values.name,
                functions: moreThanTwo,
              },
            ])
          }
        >
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <InputField
                name='title'
                label='Change company name.'
                type='text'
                onChange={handleChange}
                initialValue={values.name}
                component={InputField}
                stylesOverride={stylesOverride}
              />
              <ErrorMessage name='title' component={Error} />
              <WhiteButton type='submit'>Save name change</WhiteButton>
            </form>
          )}
        </Formik>
        <Divider>See a list of {companyMock.name}'s team members</Divider>
        <div style={{ margin: "10px 0 30px" }}>
          If you need to edit a particular team member, you can see a complete
          list of team members and visit their profile to make edits.
          <b>You will not be able to see a team mamber's weekly report.</b>
        </div>
        <WhiteButton onClick={handleSeeClick}>See All Team Members</WhiteButton>
      </MembersContainer>
      </>
      )
}
    </FlexCol>
  )
}

export default MyCompany
