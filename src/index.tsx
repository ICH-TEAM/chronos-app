import React from 'react'
import {ScrollView, useColorScheme, View} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import {Provider} from 'react-redux'
import App from './App'
import {store} from './store'

const IndexApp = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }
  return (
    <Provider store={store}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <App />
        </View>
      </ScrollView>
    </Provider>
  )
}

export default IndexApp
