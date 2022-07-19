import React from 'react'
import {ScrollView, useColorScheme, View} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import {Home, SignIn, SignUp, Settings, News} from './screens'

const IndexApp = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Settings />
      </View>
    </ScrollView>
  )
}

export default IndexApp
