import React from 'react'
import {Button, Separator, Input} from '../../components'
import {Text, View, StyleSheet} from 'react-native'
import {useState} from 'react'

const gap = 25
const Settings = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSelected, setSelection] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.textTitle}>
        <Text style={styles.title}>Editar</Text>
        <Separator value2={280} />
        <Text style={styles.title}>Logout</Text>
      </View>
      <Separator value={gap} />
      <View style={styles.itemsContainer}>
        <Input placeholder="Nombre" />
        <Separator value={gap} />
        <Input placeholder="Facultad" />
        <Separator value={gap} />
        <Input placeholder="Carrera" />
        <Separator value={gap} />
        <Input placeholder="Alert" keyboardType="number-pad" />
        <Separator value={gap} />
        <View style={styles.itemText}>
          <Text>Lector de Voz</Text>
        </View>
        <Separator value={gap} />
        <Separator value={gap} />
        <Button label="Guardar" />
        <Separator value={gap} />
        <View style={styles.itemText}>
          <Text>Regresar</Text>
        </View>
        <Separator value={gap} />
      </View>
      <Separator value={gap} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  textTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6C92F4',
  },
  titleW: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  itemText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
})

export default Settings
