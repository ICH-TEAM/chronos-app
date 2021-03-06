import React, {FC, useState} from 'react'
import Logo from './../../assets/svg/chronos-logo'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {Input, Button, Separator} from '../../components'
// import SelectDropdown from 'react-native-select-dropdown'

const gap = 30

// const genders = ['Masculino', 'Femenino']
interface SigUpProps {
  changeScreen(): void
  changeStep: (value: number) => void
  saveChanges: (value: Record<string, any>) => void
}
const SignUp: FC<SigUpProps> = props => {
  const {changeScreen, changeStep, saveChanges} = props
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [gender, setGender] = useState('')
  const handleSaveData = () => {
    saveChanges({name, lastName, email, password})
    changeStep(1)
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo />
        <Separator value={5} />
        <Text style={styles.title}>Crear Cuenta</Text>
        <View style={styles.form}>
          <Input placeholder="Nombre" onChangeText={setName} value={name} />
          <Separator value={gap} />
          <Input
            placeholder="Apellidos"
            onChangeText={setLastName}
            value={lastName}
          />
          <Separator value={gap} />
          <Input placeholder="Correo" onChangeText={setEmail} value={email} />
          <Separator value={gap} />
          <Input
            placeholder="Contraseña"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <Separator value={gap} />
          <Input placeholder="Confirmar contraseña" secureTextEntry />
          <Separator value={gap} />

          <Button label="Registrar" onPress={handleSaveData} />
        </View>
        <View style={styles.textLogIn}>
          <Text style={styles.textLogInColor}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={changeScreen}>
            <Text style={styles.textLogInColor}>Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
  },
  selectButton: {
    backgroundColor: '#F7F9FC',
    borderColor: '#E7E7E7',
    paddingVertical: 10,
    paddingLeft: 20,
    borderWidth: 1,
    width: 250,
    borderRadius: 5,
  },
  selectText: {
    fontSize: 15,
    color: '#7B7B7B',
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  textLogIn: {
    display: 'flex',
    alignItems: 'center',
  },
  textLogInColor: {
    color: '#797979',
  },
  form: {
    marginTop: 30,
    marginBottom: 50,
  },
})

export default SignUp
