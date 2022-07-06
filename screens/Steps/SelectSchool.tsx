import { Button, Separator, StepItem } from "../../components"
import { StyleSheet } from "react-native"
import { Text, View } from "../../components/Themed"
import { useState } from "react"

const gap = 25
const SelectSchool = () => {
  const [selected, setSelected] = useState<string>("")

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
      <Button label="Continuar" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  itemsContainer: {
    marginVertical: 30,
  },
})

export default SelectSchool
