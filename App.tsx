import IndexApp from './src/index'
import React from 'react'
import {SafeAreaView, useColorScheme} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <IndexApp />
    </SafeAreaView>
  )
}

export default App
