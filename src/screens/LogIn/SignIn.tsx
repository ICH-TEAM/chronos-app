import React, {FC, useState} from 'react'
import Logo from './../../assets/svg/chronos-logo'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {Input, Button, Separator} from '../../components'
const gap = 30

interface SigInProps {
  changeScreen(): void
}
const SignIn: FC<SigInProps> = props => {
  const {changeScreen} = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = () => {
    console.log('\n\nCredentials')
    console.log(email)
    console.log(password)
  }
  return (
    <View style={styles.container}>
      <Logo />
      <Separator value={5} />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <View style={styles.form}>
        <Input onChangeText={setEmail} value={email} placeholder="Correo" />
        <Separator value={gap} />
        <Input
          onChangeText={setPassword}
          value={password}
          placeholder="Contraseña"
          secureTextEntry
        />
        <Separator value={gap} />
        <Button onPress={signIn} label="Ingresar" />
      </View>
      <View style={styles.textLogIn}>
        <Text style={styles.textLogInColor}>¿Aún no tienes una cuenta?</Text>
        <TouchableOpacity onPress={changeScreen}>
          <Text style={styles.textLogInColor}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
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
    marginBottom: 100,
  },
})

export default SignIn
