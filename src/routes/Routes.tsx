import React, { FunctionComponent, useRef } from 'react'
import { BackHandler } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  IScreen,
  TStackScreens,
} from '~/@types/application/NavigationApplication.types'
import { navigationRef } from '~/lib/navigate'
import OnboardingScreen from '~/screens/Onboarding/OnboardingScreen'

const { Screen, Navigator } = createStackNavigator<TStackScreens>()

const SCREENS: IScreen[] = [
  {
    component: OnboardingScreen,
    name: 'Onboarding',
  },
]

const Routes: FunctionComponent = () => {
  const routeNameRef = useRef()

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)

        const previousRouteName = routeNameRef?.current
        const currentRoute = navigationRef?.current?.getCurrentRoute()

        if (previousRouteName === currentRoute?.name) {
          return
        }
        if (typeof currentRoute?.name === 'undefined') {
          return
        }

        //@ts-ignore
        routeNameRef.current = currentRoute?.name
      }}
      onReady={() => {
        //@ts-ignore
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name
      }}
    >
      <Navigator>
        {SCREENS.map(({ name, component, options }, index) => (
          <Screen
            name={name}
            component={component}
            options={options ?? { headerShown: false }}
            key={index}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes
