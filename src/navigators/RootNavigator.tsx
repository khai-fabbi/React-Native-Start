import React, { useMemo } from 'react'
import {
  NavigatorScreenParams,
  DefaultTheme,
  Theme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '~/screens/Login/Login.screen'
import TabsNavigator, { TabsStackParamList } from './TabsNavigator'
import colors from '~/theme/color'

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>
  Login: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()
const MainNavigation = () => {
  const theme: Theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: colors.background,
        text: colors.main,
        border: colors.borderInput,
        primary: colors.main,
      },
    }),
    [],
  )

  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login">
        <RootStack.Screen
          name="TabsStack"
          options={{ headerShown: false }}
          component={TabsNavigator}
        />
        <RootStack.Screen name="Login" component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
