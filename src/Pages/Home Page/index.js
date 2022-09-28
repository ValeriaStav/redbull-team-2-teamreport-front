import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from "../../Components/Sidebar"
import Header from "../../Components/Header"
import {FlexCol} from "../../styles"
import SideBarLogo from "../../assets/SideBarLogo.png"

const HomePage = props => {
  return (
    <FlexCol>
    {/* <Header Content={(<img src={SideBarLogo}/>)} /> */}
      <div>Homepage</div>
    </FlexCol>
  )
}

HomePage.propTypes = {}

export default HomePage