import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Formik, ErrorMessage } from "formik"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import Header from "../../Components/Header"
import HelpButton from "../../Components/HelpButton"
import FeedbackButton from "../../Components/FeedbackButton"
import InputField from "../../Components/InputField"
import WhiteButton from "../../Components/WhiteButton"

import { FlexCol } from "../../styles"
import { TitleContainer, Title, Subtitle, MembersContainer } from "./styles";
import { Divider } from "../Edit Member/styles";

import validate, { moreThanTwo } from "../../utils/validators";

const companyMock = {
    id: 1,
    name: "ANKO Technology Corp",
    date: "January 2020",
};

const stylesOverride = {
    border: "1px solid #ffcd29",
    borderRadius: "6px",
    width: "400px",
    backgroundColor: "white",
};

const MyCompany = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const companyId = parseInt(useSelector((state) => state.usersReducer.currentUserCommand))
  const companyName = useSelector((state) => state.usersReducer.currentUserCompanyName)

  useEffect(() => {
    dispatch({ type:"FETCH_COMPANY_DATA", payload: companyId })
  }, [])
  
  const showToastMessage = () => {
    toast.success('Your company has been successfully updated !', {
        position: toast.POSITION.BOTTOM_CENTER
    });
};
    const handleSaveClick = (values) => {
        dispatch({ type: "EDIT_COMPANY_DATA", payload: { teamName: values.name, teamId: companyId  } })
        showToastMessage()
    };

    const handleSeeClick = () => {
        navigate(`/my-company/${companyId}`);
    };

  const signUp = () => {
    navigate("/company-registration")
  }

  return (
    <FlexCol>
      {!companyId? (
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
            <Title>{companyName}</Title>
            <Subtitle>October 2022</Subtitle>
          </TitleContainer>
        }
      />
      <HelpButton />
      <FeedbackButton />
      <MembersContainer>
        <h1>Edit {companyName}'s Information</h1>
        <span>You may do whatever you want here!</span>
        <Divider>Rename {companyName}</Divider>
        <Formik
          onSubmit={handleSaveClick}
          initialValues={{
            name: companyName,
          }}
          enableReinitialize={true}
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
                name='name'
                label='Change company name.'
                type='text'
                onChange={handleChange}
                initialValue={values.name}
                stylesOverride={stylesOverride}
              />
              <ErrorMessage name='title' component={Error} />
              <WhiteButton type='submit'>Save name change</WhiteButton>
            </form>
          )}
        </Formik>
        <Divider>See a list of {companyName}'s team members</Divider>
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

export default MyCompany;
