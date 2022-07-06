import Logo from "./../../assets/svg/chronos-logo"
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import { Text, View } from "../../components/Themed"
import { Input, Button, Separator } from "../../components"
const gap = 30
const SignUp = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo />
        <Separator value={5} />
        <Text style={styles.title}>Crear Cuenta</Text>
        <View style={styles.form}>
          <Input placeholder="Nombre" />
          <Separator value={gap} />
          <Input placeholder="Apellidos" />
          <Separator value={gap} />
          <Input placeholder="Nombre" />
          <Separator value={gap} />
          <Input placeholder="Correo" />
          <Separator value={gap} />
          <Input placeholder="Contraseña" secureTextEntry />
          <Separator value={gap} />
          <Input placeholder="Confirmar contraseña" secureTextEntry />
          <Separator value={gap} />
          <Button label="Registrar" />
        </View>
        <View style={styles.textLogIn}>
          <Text style={styles.textLogInColor} darkColor="">
            ¿Aún no tienes una cuenta?
          </Text>
          <TouchableOpacity>
            <Text style={styles.textLogInColor}>Regístrate</Text>
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
    alignItems: "center",
    paddingTop: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30,
  },

  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch",
  },
  textLogIn: {
    display: "flex",
    alignItems: "center",
  },
  textLogInColor: {
    color: "#797979",
  },
  form: {
    marginTop: 30,
    marginBottom: 50,
  },
})

export default SignUp
