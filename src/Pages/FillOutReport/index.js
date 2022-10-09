import React, { useState } from "react"
import PropTypes from "prop-types"
import { Formik, ErrorMessage } from "formik"

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
import validate, {
  moreThanTwo,
  startsFromCapitalize,
} from "../../utils/validators"
import { FlexCol } from "../../styles"
import veryLowIcon from "../../assets/veryLowIcon.png"
import lowIcon from "../../assets/lowIcon.png"
import okayIcon from "../../assets/okayIcon.png"
import goodIcon from "../../assets/goodIcon.png"
import greatIcon from "../../assets/greatIcon.png"
import InputField from "../../Components/InputField"
import TextArea from "../../Components/TextArea"

const userMock = {
  id: 1,
  name: "Anatoliy",
  date: "January 2020",
}

const FillOutReport = (props) => {
  const [morale, setMorale] = useState(null)
  const [stress, setStress] = useState(null)
  const [workload, setWorkload] = useState(null)
  const [moraleDescription, setMoraleDescription] = useState(null)
  const [stressDescription, setStressDescription] = useState(null)
  const [workloadDescription, setWorkloadDescription] = useState(null)
  const [highValue, setHighValue] = useState(null)
  const [lowValue, setLowValue] = useState(null)
  const [elseValue, setElseValue] = useState(null)

  const sendForm = (formValues) => {
    console.log("formValues", {
      morale,
      stress,
      workload,
      ...formValues,
    })
  }

  return (
    <FlexCol>
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
          highValue: "",
          lowValue: "",
          elseValue: "",
        }}
        // validate={(values) =>
        //   validate([
        //     {
        //       name: "firstName",
        //       value: values.firstName,
        //       functions: [moreThanTwo, startsFromCapitalize],
        //     },
        //     {
        //       name: "lastName",
        //       value: values.lastName,
        //       functions: [moreThanTwo, startsFromCapitalize],
        //     },
        //     {
        //       name: "title",
        //       value: values.title,
        //       functions: moreThanTwo,
        //     },
        //   ])
        // }
      >
        {({ values, handleSubmit, handleChange }) => (
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
              <StyledQuestion>How was your workload this week?</StyledQuestion>
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
              <InputField name='workloadDescription' onChange={handleChange} />
            </ContentWrapper>
            <ContentWrapper>
              <StyledQuestion> How was your high this week?</StyledQuestion>
              <TextArea
                onChange={handleChange}
                name='highValue'
                placeholder="What was your personal or professional high this week? What's the thing you accomplished at work this week?"
              />
            </ContentWrapper>
            <ContentWrapper>
              <StyledQuestion>How was your low this week?</StyledQuestion>
              <TextArea
                onChange={handleChange}
                name='lowValue'
                placeholder='What was your personal or professional low this week?'
              />
            </ContentWrapper>
            <ContentWrapper>
              <StyledQuestion>Anything else?</StyledQuestion>
              <TextArea
                onChange={handleChange}
                name='elseValue'
                maxLength={400}
                placeholder='Is there anything else you would like to share with your leader? *Optional'
              />
            </ContentWrapper>
            <ContentWrapper>
              <StyledQuestion>Date range</StyledQuestion>
              
            </ContentWrapper>

            <button type='submit'>SUBMIt!</button>
          </form>
        )}
      </Formik>
    </FlexCol>
  )
}

FillOutReport.propTypes = {}

export default FillOutReport
