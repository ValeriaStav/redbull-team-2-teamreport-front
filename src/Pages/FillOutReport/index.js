import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { Formik } from "formik"
import Select from "react-select"
import moment from "moment"

import validate, { notEmpty } from "../../utils/validators"
import { FlexCol } from "../../styles"
import veryLowIcon from "../../assets/veryLowIcon.png"
import lowIcon from "../../assets/lowIcon.png"
import okayIcon from "../../assets/okayIcon.png"
import goodIcon from "../../assets/goodIcon.png"
import greatIcon from "../../assets/greatIcon.png"
import InputField from "../../Components/InputField"
import TextArea from "../../Components/TextArea"
import Error from "../../Components/Error"

import {
  WelcomeLogo,
  Container,
  Title,
  HeaderText,
  ContentWrapper,
  StyledQuestion,
  EmojiBlock,
  StatusWrapper,
  StatusIcon,
} from "./styles"
import YellowButton from "../../Components/YellowButton"

const userMock = {
  id: 1,
  name: "Anatoliy",
  date: "January 2020",
}

const oneDayMiliseconds = 1000 * 60 * 60 * 24
const oneWeekMiliseconds = oneDayMiliseconds * 7

const weekOptions = [
  {
    value: `${new Date(Date.now()).toJSON()}/${new Date(Date.now() + oneWeekMiliseconds).toJSON()}`,
    label: `Current Period: ${moment(new Date(Date.now())).format(
      "MMMM D"
    )} - ${moment(new Date(Date.now() + oneWeekMiliseconds)).format("MMMM D")}`,
  },
  {
    value: `${new Date(Date.now() - oneWeekMiliseconds).toJSON()}/${new Date(Date.now() - oneDayMiliseconds).toJSON()}`,
    label: `Previous Week: ${moment(
      new Date(Date.now() - oneWeekMiliseconds)
    ).format("MMMM D")} - ${moment(
      new Date(Date.now() - oneDayMiliseconds)
    ).format("MMMM D")}`,
  },
]

const FillOutReport = (props) => {
  const [morale, setMorale] = useState(null)
  const [stress, setStress] = useState(null)
  const [workload, setWorkload] = useState(null)
  const [dateRange, setDateRange] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = useSelector((state ) => state.usersReducer.currentUserId)

  const sendForm = (formValues) => {
    const [dateRangeStart, dateRangeEnd] = dateRange.split('/')
    console.log('*******', { userId })
    console.log('---', { userId, ...formValues, dateRange })
    dispatch({ type: "ADD_REPORT", payload: { userId, morale, stress, workload, dateRangeStart, dateRangeEnd, ...formValues, navigate } })

  }

  return (
    <FlexCol style={{ paddingBottom: "100px" }}>
      <Container>
        <WelcomeLogo />
        <Title>{userMock.name}.</Title>
        <HeaderText>
          Let your leader know where you're winning and struggling this week-in
          less than 10 minutes.{" "}
        </HeaderText>
      </Container>

      <Formik
        onSubmit={sendForm}
        initialValues={{
          moraleDescription: "",
          stressDescription: "",
          workloadDescription: "",
          high: "",
          low: "",
          anythingElse: "",
        }}
        validate={(values) =>
          validate([
            {
              name: "moraleDescription",
              value: values.moraleDescription,
              functions: notEmpty,
            },
            {
              name: "stressDescription",
              value: values.stressDescription,
              functions: notEmpty,
            },
            {
              name: "workloadDescription",
              value: values.workloadDescription,
              functions: notEmpty,
            },
            {
              name: "high",
              value: values.high,
              functions: notEmpty,
            },
            {
              name: "low",
              value: values.low,
              functions: notEmpty,
            },
          ])
        }
      >
        {({ values, errors, handleSubmit, handleChange }) => {
          const isHereError =
            errors.workloadDescription ||
            errors.stressDescription ||
            errors.moraleDescription ||
            errors.low ||
            errors.high ||
            !morale ||
            !stress ||
            !workload ||
            !dateRange

          return (
            <form onSubmit={handleSubmit}>
              <ContentWrapper>
                <StyledQuestion>How was your morale this week?</StyledQuestion>
                <StatusWrapper>
                  <EmojiBlock
                    onClick={() => setMorale(1)}
                    name='morale'
                    style={{
                      backgroundColor: morale === 1 ? "#bd4141" : "",
                    }}
                  >
                    <StatusIcon src={veryLowIcon} />
                    Very Low
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setMorale(2)}
                    style={{
                      backgroundColor: morale === 2 ? "#e97b46cf" : "",
                    }}
                  >
                    <StatusIcon src={lowIcon} />
                    Low
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setMorale(3)}
                    style={{
                      backgroundColor: morale === 3 ? "#f4f40b91" : "",
                    }}
                  >
                    <StatusIcon src={okayIcon} />
                    Okay
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setMorale(4)}
                    style={{
                      backgroundColor: morale === 4 ? "#07d107ab" : "",
                    }}
                  >
                    <StatusIcon src={goodIcon} />
                    Good
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setMorale(5)}
                    style={{
                      backgroundColor: morale === 5 ? "#008000e0" : "",
                    }}
                  >
                    <StatusIcon src={greatIcon} />
                    Great
                  </EmojiBlock>
                </StatusWrapper>
                <InputField name='moraleDescription' onChange={handleChange} />
              </ContentWrapper>

              <ContentWrapper>
                <StyledQuestion>How was your stress this week?</StyledQuestion>
                <StatusWrapper>
                  <EmojiBlock
                    onClick={() => setStress(1)}
                    style={{
                      backgroundColor: stress === 1 ? "#bd4141" : "",
                    }}
                  >
                    <StatusIcon src={veryLowIcon} />
                    Too High
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setStress(2)}
                    style={{
                      backgroundColor: stress === 2 ? "#e97b46cf" : "",
                    }}
                  >
                    <StatusIcon src={lowIcon} />
                    High
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setStress(3)}
                    style={{
                      backgroundColor: stress === 3 ? "#f4f40b91" : "",
                    }}
                  >
                    <StatusIcon src={okayIcon} />
                    Okay
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setStress(4)}
                    style={{
                      backgroundColor: stress === 4 ? "#07d107ab" : "",
                    }}
                  >
                    <StatusIcon src={goodIcon} />
                    Low
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setStress(5)}
                    style={{
                      backgroundColor: stress === 5 ? "#008000e0" : "",
                    }}
                  >
                    <StatusIcon src={greatIcon} />
                    Healthy
                  </EmojiBlock>
                </StatusWrapper>
                <InputField name='stressDescription' onChange={handleChange} />
              </ContentWrapper>

              <ContentWrapper>
                <StyledQuestion>
                  How was your workload this week?
                </StyledQuestion>
                <StatusWrapper>
                  <EmojiBlock
                    onClick={() => setWorkload(1)}
                    style={{
                      backgroundColor: workload === 1 ? "#bd4141" : "",
                    }}
                  >
                    <StatusIcon src={veryLowIcon} />
                    Overwhelming
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setWorkload(2)}
                    style={{
                      backgroundColor: workload === 2 ? "#e97b46cf" : "",
                    }}
                  >
                    <StatusIcon src={lowIcon} />
                    Heavy
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setWorkload(3)}
                    style={{
                      backgroundColor: workload === 3 ? "#f4f40b91" : "",
                    }}
                  >
                    <StatusIcon src={okayIcon} />
                    Okay
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setWorkload(4)}
                    style={{
                      backgroundColor: workload === 4 ? "#07d107ab" : "",
                    }}
                  >
                    <StatusIcon src={goodIcon} />
                    Good
                  </EmojiBlock>
                  <EmojiBlock
                    onClick={() => setWorkload(5)}
                    style={{
                      backgroundColor: workload === 5 ? "#008000e0" : "",
                    }}
                  >
                    <StatusIcon src={greatIcon} />
                    Great
                  </EmojiBlock>
                </StatusWrapper>
                <InputField
                  name='workloadDescription'
                  onChange={handleChange}
                />
              </ContentWrapper>
              <ContentWrapper>
                <StyledQuestion> How was your high this week?</StyledQuestion>
                <TextArea
                  onChange={handleChange}
                  name='high'
                  placeholder="What was your personal or professional high this week? What's the thing you accomplished at work this week?"
                />
              </ContentWrapper>
              <ContentWrapper>
                <StyledQuestion>How was your low this week?</StyledQuestion>
                <TextArea
                  onChange={handleChange}
                  name='low'
                  placeholder='What was your personal or professional low this week?'
                />
              </ContentWrapper>
              <ContentWrapper>
                <StyledQuestion>Anything else?</StyledQuestion>
                <TextArea
                  onChange={handleChange}
                  name='anythingElse'
                  maxLength={400}
                  placeholder='Is there anything else you would like to share with your leader? *Optional'
                />
              </ContentWrapper>
              <ContentWrapper>
                <StyledQuestion>Date range</StyledQuestion>
                <Select
                  options={weekOptions}
                  onChange={(opt) => setDateRange(opt.value)}
                />
              </ContentWrapper>
              <ContentWrapper>
                {isHereError && (
                  <Error>
                    All fields are required unless marked as optional
                  </Error>
                )}
                <YellowButton type='submit' style={{ marginTop: '20px' }} disabled={isHereError}>Send Weekly Report</YellowButton>
              </ContentWrapper>
            </form>
          )
        }}
      </Formik>
    </FlexCol>
  )
}

FillOutReport.propTypes = {}

export default FillOutReport
