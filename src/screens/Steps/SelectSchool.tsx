import {Button, Separator, StepItem} from '../../components'
import {Text, View, StyleSheet} from 'react-native'
import React, {FC, useState} from 'react'

const gap = 25

interface SelectSchoolProps {
  changeStep: (value: number) => void
}
const SelectSchool: FC<SelectSchoolProps> = props => {
  const {changeStep} = props
  const [selected, setSelected] = useState<string>('')

  const selectItem = (value: string) => {
    setSelected(value)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elige tu escuela</Text>
      <View style={styles.itemsContainer}>
        <StepItem
          selectedValue={selected}
          label="MATEMÁTICA"
          selectItem={selectItem}
        />
        <Separator value={gap} />
        <StepItem
          selectedValue={selected}
          label="CIENCIAS DE LA COMP..."
          selectItem={selectItem}
        />
        <Separator value={gap} />
        <StepItem
          selectedValue={selected}
          label="FÍSICA PURA"
          selectItem={selectItem}
        />
      </View>
      <Button
        label="Continuar"
        onPress={() => {
          changeStep(1)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  itemsContainer: {
    marginVertical: 30,
  },
})

export default SelectSchool
