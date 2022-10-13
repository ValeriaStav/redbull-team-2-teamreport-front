import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Formik, ErrorMessage } from "formik"
import { useSelector, useDispatch } from "react-redux"

import Header from "../../Components/Header"
import { FlexCol } from "../../styles"
import HelpButton from "../../Components/HelpButton"
import FeedbackButton from "../../Components/FeedbackButton"
import validate, {
  moreThanTwo,
  startsFromCapitalize,
} from "../../utils/validators"
import InputField from "../../Components/InputField"
import { css } from "styled-components"
import YellowButton from "../../Components/YellowButton"
import Error from "../../Components/Error"
import WhiteButton from "../../Components/WhiteButton"
import Modal from "../../Components/Modal"

import {
  TitleContainer,
  Title,
  Subtitle,
  MemberIcon,
  Container,
  Divider,
} from "../Edit Member/styles"

const stylesOverride = {
  border: "1px solid grey",
}

const MyProfile = () => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false)
  const userDetails = useSelector( (state) => state.usersReducer)
  const [modalMessage, setModalMessage] = useState({
    title: "",
    subtitle: "",
    tip: "",
  })
  const { currentUserFirstName = "", currentUserLastName = "", currentUserEmail= "", currentUserTitle="" } = userDetails || {}
  const userId = useSelector( (state) => state.usersReducer.currentUserId)

  const handleSaveClick = (submitValues) => {
    dispatch({ type:"EDIT_USER" , payload: {...submitValues, userId} })
  }

  const handleOpenModalClick = (type) => {
    if (type === "leader") {
      setModalMessage({
        title: "Edit Leader(s)",
        subtitle:
          "By default, the person who sent oyu the invite will receive your weekly report. You may also select the person you report to directly as an additional leader.",
        tip: "Pro Tip: You can change who sees your report in your profile settings.",
      })
    }
    if (type === "member") {
      setModalMessage({
        title: "Edit Member(s)",
        subtitle: "Some member stuff",
        tip: "Pro Tip: You can change whose reports to see in your profile settings",
      })
    }
    setOpen(true)
  }

  return (
    <FlexCol>
      <Header
        Content={
          <TitleContainer>
            <MemberIcon>{`${currentUserFirstName[0]}${currentUserLastName[0]}`}</MemberIcon>
            <Title>{`${currentUserFirstName} ${currentUserLastName}`}</Title>
            <Subtitle>{currentUserEmail}</Subtitle>
          </TitleContainer>
        }
      />
      <HelpButton />
      <FeedbackButton />
      <Container>
        <span
          style={{ fontWeight: 900, fontSize: "40px", marginBottom: "15px" }}
        >
          Edit your information
        </span>
        <Divider>Basic Profile information</Divider>
        <Formik
          onSubmit={handleSaveClick}
          initialValues={{
            firstName: currentUserFirstName,
            lastName: currentUserLastName,
            title: currentUserTitle,
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
            ])
          }
        >
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <InputField
                name='firstName'
                label='First Name'
                type='text'
                onChange={handleChange}
                initialValue={values.firstName}
                stylesOverride={{ ...stylesOverride, width: "200px" }}
                component={InputField}
              />
              <ErrorMessage name='firstName' component={Error} />
              <InputField
                name='lastName'
                label='Last Name'
                type='text'
                onChange={handleChange}
                initialValue={values.lastName}
                stylesOverride={{ ...stylesOverride, width: "300px" }}
                component={InputField}
              />
              <ErrorMessage name='lastName' component={Error} />
              <InputField
                name='title'
                label='Title'
                type='text'
                onChange={handleChange}
                initialValue={values.title}
                stylesOverride={{ ...stylesOverride, width: "400px" }}
                component={InputField}
              />
              <ErrorMessage name='title' component={Error} />
              <YellowButton type='submit' style={{ width: "70px" }}>
                Save
              </YellowButton>
            </form>
          )}
        </Formik>
        <Divider>Your reports to the following leaders:</Divider>
        <WhiteButton
          onClick={() => handleOpenModalClick("leader")}
          style={{ width: "200px" }}
        >
          Edit Leader(s)
        </WhiteButton>
        <Divider>The following members report to you:</Divider>
        <WhiteButton
          onClick={() => handleOpenModalClick("member")}
          style={{ width: "200px" }}
        >
          Edit Member(s)
        </WhiteButton>
        {isOpen && (
          <Modal setIsOpen={setOpen}>
            <div
              style={{
                fontWeight: 900,
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              {modalMessage.title}
            </div>
            <div style={{ fontSize: "14px" }}>{modalMessage.subtitle}</div>
            <div style={{ fontSize: "14px", marginTop: "20px" }}>
              {modalMessage.tip}
            </div>
            {/* Add badges here */}
            <InputField />
            <YellowButton>Save Changes</YellowButton>
          </Modal>
        )}
      </Container>
    </FlexCol>
  )
}

MyProfile.propTypes = {}

export default MyProfile
