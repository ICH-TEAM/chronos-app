import React, {FC} from 'react'
import {StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import {Text, View} from 'react-native'

interface BtnStepProps extends TouchableOpacityProps {
  label: string
  selectedValue: string
  selectItem: (e: string) => void
  itemID: string
}

const StepItem: FC<BtnStepProps> = props => {
  const {label, selectedValue, selectItem, itemID, ...rest} = props
  return (
    <TouchableOpacity {...rest} onPress={() => selectItem(itemID)}>
      <View
        style={
          selectedValue === itemID
            ? {...styles.btn, ...styles.btnColorSelected}
            : {...styles.btn, ...styles.btnColorDefault}
        }>
        <Text
          style={
            selectedValue === itemID ? styles.textSelected : styles.textDefault
          }>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingLeft: 20,
    borderWidth: 1,
    width: 270,
    borderRadius: 5,
  },
  btnColorDefault: {
    backgroundColor: '#F7F9FC',
    borderColor: '#E7E7E7',
  },
  btnColorSelected: {
    backgroundColor: '#FFF',
    borderColor: '#63FF85',
  },
  textDefault: {
    color: '#7B7B7B',
    fontSize: 20,
  },
  textSelected: {
    color: '#40D68E',
    fontSize: 20,
  },
})

export default StepItem
