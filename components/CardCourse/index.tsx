import { FC } from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

interface ButProps {
  title: string
  code: string
  time: string
  backgroundColor: string
  color: string
  onPress?: () => void
}

const StepItem: FC<ButProps> = (ButProps) => {
  const { title, code, time, onPress, backgroundColor, color } = ButProps
  const styles = StyleSheet.create({
    button: {
      alignSelf: "center",
      justifyContent: "center",
      borderRadius: 10,
      backgroundColor: backgroundColor,
      height: 110,
      width: 200,
      margin: 5,
    },

    buttonText: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 14,
      color: color,
      padding: 5,
    },
  })
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{title}</Text>
        <Text style={{ ...styles.buttonText }}>{code}</Text>
        <Text style={styles.buttonText}>{time}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default StepItem
