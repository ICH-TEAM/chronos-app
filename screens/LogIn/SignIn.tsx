import Logo from "./../../assets/svg/chronos-logo"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Text, View } from "../../components/Themed"
import { Input, Button, Separator } from "../../components"
const gap = 30
export default function SignIn() {
  return (
    <View style={styles.container}>
      <Logo />
      <Separator value={5} />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <View style={styles.form}>
        <Input placeholder="Correo" />
        <Separator value={gap} />
        <Input placeholder="Contraseña" secureTextEntry />
        <Separator value={gap} />
        <Button label="Ingresar" />
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
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
    marginBottom: 100,
  },
})
