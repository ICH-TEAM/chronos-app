import React from 'react'
import {useSelector} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import {AppState} from './store/state'
import TabNavigation from './navigation'
// import {SafeAreaProvider} from 'react-native-safe-area-context'

const App = () => {
  const userData = useSelector((state: AppState) => state.user)
  // if (!userData) {
  //   return <LogIn />
  // }
  // console.log('\nuserData')
  console.log(userData)
  return (
    <NavigationContainer>
      {/* <SafeAreaProvider> */}
      <TabNavigation />
      {/* </SafeAreaProvider> */}
    </NavigationContainer>
  )
}
export default App
