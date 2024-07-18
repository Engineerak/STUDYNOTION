
import React from 'react'
import Template from '../components/Template';
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="welcome back"
      desc1="Build skill for today ,tommorow and beyond"
      desc2="Education to future proof your career"
      image={loginImg}
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login;
