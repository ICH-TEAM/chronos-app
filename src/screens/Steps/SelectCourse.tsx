import React from 'react'
import {Button, Separator, StepItem} from '../../components'
import {Text, View, StyleSheet} from 'react-native'
import {useState} from 'react'

const gap = 25
const SelectCourse = () => {
  const [selected, setSelected] = useState<string>('')

  const selectItem = (value: string) => {
    setSelected(value)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elige tus cursos</Text>
      <View style={styles.itemsContainer}>
        <StepItem
          selectedValue={selected}
          label="Calc. diferencial"
          selectItem={selectItem}
        />
        <Separator value={gap} />
        <StepItem
          selectedValue={selected}
          label="F. de programación"
          selectItem={selectItem}
        />
        <Separator value={gap} />
        <StepItem
          selectedValue={selected}
          label="Física"
          selectItem={selectItem}
        />
      </View>
      <Button label="Continuar" />
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

export default SelectCourse
