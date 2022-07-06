import React, { FC } from "react"
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native"
interface InputProps extends TextInputProps {}
const InputComponent: FC<InputProps> = (props) => {
  const { ...rest } = props
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholderTextColor={"#7b7b7b"}
        autoCorrect={false}
        textAlign={"left"}
        autoCapitalize={"none"}
        {...rest}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F7F9FC",
    borderColor: "#E7E7E7",
    paddingVertical: 10,
    paddingLeft: 20,
    borderWidth: 1,
    width: 250,
    borderRadius: 5,
    fontSize: 15,
  },
})

export default InputComponent
