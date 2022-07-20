import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, Settings} from './../screens'
// import Courses from 'src/screens/Courses'

const Tab = createBottomTabNavigator<RootStackParamList>()

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Settings" component={Settings} /> */}
    </Tab.Navigator>
  )
}

export default TabNavigation
