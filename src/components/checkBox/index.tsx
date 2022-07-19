import React, {FC} from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface checkBoxComponentProps {
  value?: boolean
}

const checkBox: FC<checkBoxComponentProps> = props => {
  const {value} = props
  if (value) {
    return (
      <View>
        <Icon name="ios-book" color="#4F8EF7" />
      </View>
    )
  }
  return (
    <View>
      <Icon name="ios-book" color="#4F8EF7" />
    </View>
  )
}

export default checkBox
