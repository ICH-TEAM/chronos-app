import React from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import {Dimensions} from 'react-native'

const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <View style={styles.spinnerCenter}>
        <ActivityIndicator size="large" color="#3C72FF" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerContainer: {
    position: 'absolute',
    backgroundColor: '#ffffff5e',
    flex: 1,
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerCenter: {},
})

export default Spinner
