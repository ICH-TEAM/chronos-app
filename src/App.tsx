import React from 'react'
import {useSelector} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import {AppState} from './store/state'
import TabNavigation from './navigation'
import {LogIn} from './screens'
import {View} from 'react-native'
// import {SafeAreaProvider} from 'react-native-safe-area-context'

const App = () => {
  const userData = useSelector((state: AppState) => state.user)
  if (!userData) {
    return <LogIn />
  }
  return (
    // <View>
    <NavigationContainer>
      {/* <SafeAreaProvider> */}
      <TabNavigation />
      {/* </SafeAreaProvider> */}
    </NavigationContainer>
    // </View>
  )
}
export default App
