import React, {useState} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import StepOne from './../Steps/StepOne'

const LogIn = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true)
  const [step, setStep] = useState(0)
  const handleChangeScreen = () => {
    setIsSignIn(!isSignIn)
  }
  const changeStep = (value: number) => {
    setStep(step + value)
  }

  const handleChangeData = (values: Record<string, any>) => {
    console.log(values)
  }
  if (isSignIn) return <SignIn changeScreen={handleChangeScreen} />

  switch (step) {
    case 0:
      return (
        <SignUp
          changeStep={changeStep}
          saveChanges={handleChangeData}
          changeScreen={handleChangeScreen}
        />
      )
    case 1:
      return <StepOne />
    default:
      return (
        <SignUp
          changeStep={changeStep}
          changeScreen={handleChangeScreen}
          saveChanges={handleChangeData}
        />
      )
  }
}

export default LogIn
