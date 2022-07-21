import React, {FC} from 'react'
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface NavBarProps {
  navigate: (path: string) => void
}

const Navbar: FC<NavBarProps> = props => {
  const {navigate} = props
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Icon
          name="home-outline"
          size={25}
          color="black"
          onPress={() => {
            navigate('Home')
          }}
        />
        <Icon
          name="library-outline"
          size={25}
          color="black"
          onPress={() => {
            navigate('Courses')
          }}
        />
        <Icon
          name="md-settings-outline"
          size={25}
          color="black"
          onPress={() => {
            navigate('Settings')
          }}
        />
        <Icon
          name="newspaper-outline"
          size={25}
          color="black"
          onPress={() => {
            navigate('News')
          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    padding: 10,
    borderTopColor: 'black',
    border: 1,
  },
  navigation: {
    borderRadius: 15,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
})
export default Navbar
