import React, {useState} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const LogIn = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true)
  const [step, setStep] = useState(0)
  const handleChangeScreen = () => {
    setIsSignIn(!isSignIn)
  }
  const changeStep = (value: number) => {
    setStep(step + value)
  }
  if (isSignIn) return <SignIn changeScreen={handleChangeScreen} />

  switch (step) {
    case 0:
      return (
        <SignUp changeStep={changeStep} changeScreen={handleChangeScreen} />
      )
    case 1:
      return (
        <SignUp changeStep={changeStep} changeScreen={handleChangeScreen} />
      )
    default:
      return (
        <SignUp changeStep={changeStep} changeScreen={handleChangeScreen} />
      )
  }
}

export default LogIn
