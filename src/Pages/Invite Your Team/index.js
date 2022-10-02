import { useState } from 'react'
import Header from '../../Components/Header'
import { FlexCol } from '../../styles'
import HelpButton from '../../Components/HelpButton'
import FeedbackButton from '../../Components/FeedbackButton'
import InputField from '../../Components/InputField'
import YellowButton from '../../Components/YellowButton'

import { Title, Form, HeaderText, Subheader } from './styles'

const InviteYourTeam = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleClick = () => {
    console.log('handleClick state', firstName, lastName, email)
  }

  return (
    <FlexCol>
      <Header Content={<Title>Invite your team</Title>} />
      <HelpButton />
      <FeedbackButton />
      <Form>
        <HeaderText>Enter the team member you'd like to invite</HeaderText>
        <Subheader>
          Don't worry! You'll be able to add more team members later
        </Subheader>
        <InputField
          label="First Name"
          type="string"
          onChange={setFirstName}
        ></InputField>
        <InputField
          label="Last Name"
          type="string"
          onChange={setLastName}
        ></InputField>
        <InputField
          label="Email"
          type="string"
          onChange={setEmail}
        ></InputField>
        <YellowButton onClick={handleClick}>Invite</YellowButton>
      </Form>
    </FlexCol>
  )
}

InviteYourTeam.propTypes = {}

export default InviteYourTeam
