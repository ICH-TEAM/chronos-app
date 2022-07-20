import React from 'react'
import {useSelector} from 'react-redux'
import {LogIn} from './screens'
import {NavigationContainer} from '@react-navigation/native'
import {AppState} from './store/state'
import TabNavigation from './navigation'

const App = () => {
  const userData = useSelector((state: AppState) => state.user)
  if (!userData) {
    return <LogIn />
  }
  console.log('\nuserData')
  console.log(userData)
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}
export default App
