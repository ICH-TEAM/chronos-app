import { FC } from "react"
import { StyleSheet, Text, TouchableOpacityBase } from "react-native"

interface ButtonProps {
  title: string
}

const ButtonComponent: FC<ButtonProps> = ({ title }) => {
  return (
    <TouchableOpacityBase>
      <view>
        <Text>{title}</Text>
      </view>
    </TouchableOpacityBase>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {},
})

export default ButtonComponent
