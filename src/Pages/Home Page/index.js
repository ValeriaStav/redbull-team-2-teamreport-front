import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from "../../Components/Sidebar"
import Header from "../../Components/Header"
import {FlexCol} from "../../styles"
import SideBarLogo from "../../assets/SideBarLogo.png"
import HelpButton from '../../Components/HelpButton'
import FeedbackButton from '../../Components/FeedbackButton'

const HomePage = props => {
  return (
    <FlexCol>
    { <Header Content={("help")} /> }
    <HelpButton />
    <FeedbackButton/>

      <div>Homepage</div>
    </FlexCol>
  )
}

HomePage.propTypes = {}

export default HomePage