import React, {FC} from 'react'
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native'

const colors = ['#8572FF', '#FF374F', '#76E88F']
interface ButProps {
  title: string
  code: string
  time: string
  onPress?: () => void
  index: number
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 20,
    height: 200,
    width: '100%',
  },
  information: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  title: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 25,
    padding: 5,
    color: 'white',
  },
  code: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    color: 'white',
  },
  time: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    color: 'white',
  },
})
const StepItem: FC<ButProps> = ButProps => {
  const {title, code, time, onPress, index} = ButProps

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.button, backgroundColor: colors[index]}}>
        <View style={styles.information}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{...styles.code}}>{code}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default StepItem
