import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '~/screens/Home/Home.screen'
import UserProfile from '~/screens/Profile/Profile.screen'

export type TabsStackParamList = {
  Home: undefined
  Profile: undefined
}
const TabsStack = createBottomTabNavigator<TabsStackParamList>()

export default function TabsNavigator() {
  return (
    <TabsStack.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarShowLabel: false }}>
      <TabsStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <Icon name={'ios-home'} size={25} color={color} />
          },
        }}
      />
      <TabsStack.Screen
        name="Profile"
        component={UserProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          },
        }}
      />
    </TabsStack.Navigator>
  )
}
