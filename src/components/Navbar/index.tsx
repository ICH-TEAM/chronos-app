import React, {FC} from 'react'
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Home = <Icon name="home" size={25} color="black" onPress={() => {}} />
const Courses = (
  <Icon name="library" size={25} color="black" onPress={() => {}} />
)
const Settings = (
  <Icon name="md-settings" size={25} color="black" onPress={() => {}} />
)
const News = (
  <Icon name="newspaper" size={25} color="black" onPress={() => {}} />
)
const Navbar: FC<any> = () => {
  return (
    <View style={styles.container}>
      {Home}
      {Courses}
      {Settings}
      {News}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: '#EFF2F5',
    // shadowOffset: {width: 300, height: 300},
    // shadowColor: 'black',
    // shadowOpacity: 10,
  },
})
export default Navbar