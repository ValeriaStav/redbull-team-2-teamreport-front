import React, { useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

import InputField from "../../Components/InputField"

const LoginPage = (props) => {
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const submit = () => {
    navigate('/')
    // dispatch({ type: "SEND_LOGIN_CREDENTIALS", value: { email, password } })
    // Здесь диспатчить экшен с имейлом и паролем, а в саге, которая слушает этот экшен, отсылать аксиос запрос
  }

  return (
    <div>
      <div>Login</div>
      <InputField label='Email Address' onChange={setEmail}></InputField>
      <InputField label='Password' onChange={setPassword}></InputField>
      <button onClick={submit}>Confirm</button>
    </div>
  )
}

LoginPage.propTypes = {}

export default LoginPage
