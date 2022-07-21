import React, {useEffect} from 'react'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, Settings} from './../screens'
import {createStackNavigator} from '@react-navigation/stack'
import {ScrollView} from 'react-native'

// import Courses from 'src/screens/Courses'

const RootStack = createStackNavigator<RootStackParamList>()

const TabNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  )
}

export default TabNavigation
