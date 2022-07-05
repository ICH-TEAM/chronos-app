import { StyleSheet } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, View } from "../components/Themed"

import Button from "../components/Button/Button"
import ButtonCourse from "../components/Button/ButtonCourse"
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Button title="Testing" />
      <ButtonCourse title="CALCULO DIFERENCIAL" code="CC1035 - B" time="14:00 - 17:00" backgroundColor="#8572ff" color="#ffffff" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
