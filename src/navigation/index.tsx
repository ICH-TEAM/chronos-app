import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, Settings} from './../screens'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
// import Courses from 'src/screens/Courses'

const Tab = createBottomTabNavigator<RootStackParamList>()

const TabNavigation = (props: any) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} props={props.userData} />
      {/* <Tab.Screen name="Settings" component={Settings} /> */}
    </Tab.Navigator>
  )
}

export default TabNavigation
