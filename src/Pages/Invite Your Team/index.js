import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from "../../Components/Sidebar"
import Header from "../../Components/Header"
import { FlexCol } from "../../styles"
import SideBarLogo from "../../assets/SideBarLogo.png"
import HelpButton from '../../Components/HelpButton'
import FeedbackButton from '../../Components/FeedbackButton'

import { Form, HeaderText, Subheader } from './styles'

const InviteYourTeam = props => {
  return (
    <FlexCol>
      <Header Content={("help")} />
      <HelpButton />
      <FeedbackButton />
      <Form>
        <HeaderText>Enter the team member you'd like to invite</HeaderText>
        <Subheader>Don't worry! You'll be able to add more team members later</Subheader>
      </Form>
    </FlexCol>
  )
}

InviteYourTeam.propTypes = {}

export default InviteYourTeam