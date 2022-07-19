import React from 'react'
import {ScrollView, Text, useColorScheme, View} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'

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
        <Text>Hola Mundo</Text>
      </View>
    </ScrollView>
  )
}

export default IndexApp
