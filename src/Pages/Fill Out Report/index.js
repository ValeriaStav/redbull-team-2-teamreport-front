import { useState } from 'react'
import Header from "../../Components/Header"
import { FlexCol } from "../../styles"
import HelpButton from '../../Components/HelpButton'
import FeedbackButton from '../../Components/FeedbackButton'
import InputField from '../../Components/InputField'
import YellowButton from '../../Components/YellowButton'

import {
  TitleContainer,
  Title,
  Subtitle,
  MembersContainer,
  MemberCard,
  MemberIcon,
  MemberName,
  EditButton,
} from './styles'

const memberMock = [
  { id: 1, firstName: 'Alex', lastName: 'Shneider' },
  { id: 2, firstName: 'Tomas', lastName: 'Kitty' },
  { id: 3, firstName: 'Jerry', lastName: 'Sneaks' },
  { id: 4, firstName: 'Silvester', lastName: 'V\'Stolovoy' },
]

const FillOutReport = props => {
  return (
    <FlexCol>
      <Header Content={(
        <TitleContainer>
          <Title>
            ANKO Technology Corp
          </Title>
          <Subtitle>
            Joined January 2020
          </Subtitle>
        </TitleContainer>
      )} />
      <HelpButton />
      <FeedbackButton />
      <MembersContainer>
        {memberMock.map(item => (
          <MemberCard key={item.id}>
            <div>
              <MemberIcon>
                {`${item.firstName[0]}${item.lastName[0]}`}
              </MemberIcon>
              <MemberName>
                {`${item.firstName} ${item.lastName}`}
              </MemberName>
            </div>
            <EditButton>Edit</EditButton>
          </MemberCard>
        ))}
      </MembersContainer>
    </FlexCol>
  )
}

FillOutReport.propTypes = {}

export default FillOutReport