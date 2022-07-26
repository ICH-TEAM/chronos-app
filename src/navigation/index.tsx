import React from 'react'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, Settings, News, Courses, Course} from './../screens'
import {createStackNavigator} from '@react-navigation/stack'

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
      <RootStack.Screen
        name="News"
        component={News}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Courses"
        component={Courses}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Course"
        component={Course}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  )
}

export default TabNavigation
