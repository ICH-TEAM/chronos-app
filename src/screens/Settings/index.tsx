import React, {useState} from 'react'
import {Button, Separator, Input} from '../../components'
import {Text, View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Checkbox from '@react-native-community/checkbox'
import GeneralScreen from './../../layouts/GeneralScreen'
import {useDispatch, useSelector} from 'react-redux'

const gap = 25
const Micro = (
  <Icon name="mic-outline" size={25} color="black" onPress={() => {}} />
)
const MicroSlash = (
  <Icon name="mic-off-outline" size={25} color="black" onPress={() => {}} />
)
const Settings = ({navigation}: RootTabScreenProps<'Home'>) => {
  const {user, loading} = useSelector((state: AppState) => state)
  const [isSelected, setSelection] = useState(false)
  const [name, setName] = useState(user?.name)
  const [lastName, setLastName] = useState(user?.lastName)
  const [faculty, setFaculty] = useState(user?.career.name)
  const [career, setCareer] = useState(user?.faculty.name)

  const handleSaveData = () => {
    //saveChanges({name, lastName, faculty, career})
  }

  return (
    <GeneralScreen navigation={navigation.navigate}>
      <View style={styles.container}>
        <View style={styles.textTitle}>
          <Text style={styles.title}>Editar</Text>
          <Separator value2={280} />
          <Text style={styles.title}>Logout</Text>
        </View>
        <Separator value={gap} />
        <View style={styles.itemsContainer}>
          <Input placeholder="Nombre" value={name} onChangeText={setName} />
          <Separator value={gap} />
          <Input
            placeholder="Apellido"
            value={lastName}
            onChangeText={setLastName}
          />
          <Separator value={gap} />
          <Input
            placeholder="Facultad"
            value={faculty}
            onChangeText={setFaculty}
          />
          <Separator value={gap} />
          <Input
            placeholder="Carrera"
            value={career}
            onChangeText={setCareer}
          />
          <Separator value={gap} />
          <Input placeholder="Alert" keyboardType="number-pad" />
          <Separator value={gap} />
          <View style={styles.itemText}>
            <Checkbox
              value={isSelected}
              disabled={false}
              onValueChange={() => {
                if (isSelected) {
                  setSelection(false)
                } else {
                  setSelection(true)
                }
              }}
              tintColor="#C14C4E"
            />
            {isSelected ? Micro : MicroSlash}
            <Text> Lector de Voz</Text>
          </View>
          <Separator value={gap} />
          <Separator value={gap} />
          <Button label="Guardar" onPress={handleSaveData} />
          <Separator value={gap} />
          <View style={styles.itemText}>
            <Text
              onPress={() => {
                navigation.navigate('Home')
              }}>
              Regresar
            </Text>
          </View>
          <Separator value={gap} />
        </View>
        {/* <Separator value={gap} /> */}
      </View>
    </GeneralScreen>
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
