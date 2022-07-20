import React, {useState} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const LogIn = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true)
  const handleChangeScreen = () => {
    setIsSignIn(!isSignIn)
  }
  return isSignIn ? (
    <SignIn changeScreen={handleChangeScreen} />
  ) : (
    <SignUp changeScreen={handleChangeScreen} />
  )
}

export default LogIn
