import { FC } from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

interface BtnComponentProps {
  label: string
  onPress?: () => void
}
const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonContent: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    minWidth: 150,
    borderRadius: 5,
    backgroundColor: "#3C72FF",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffffff",
  },
})
const Button: FC<BtnComponentProps> = (props) => {
  const { label, onPress } = props
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
