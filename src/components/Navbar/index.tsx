import React, {FC} from 'react'
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Home = (
  <Icon name="home-outline" size={25} color="black" onPress={() => {}} />
)
const Courses = (
  <Icon name="library-outline" size={25} color="black" onPress={() => {}} />
)
const Settings = (
  <Icon name="md-settings-outline" size={25} color="black" onPress={() => {}} />
)
const News = (
  <Icon name="newspaper-outline" size={25} color="black" onPress={() => {}} />
)
const Navbar: FC<any> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        {Home}
        {Courses}
        {Settings}
        {News}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: 0,
    left: 0,
  },
  navigation: {
    borderRadius: 15,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
})
export default Navbar
