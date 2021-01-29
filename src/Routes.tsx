import React from 'react'
import { FunctionComponent } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  IScreen,
  TStackScreens,
} from '~/@types/application/NavigationApplication.types'
import InvoiceScreen from '~/screens/Invoice/InvoiceScreen'

const { Screen, Navigator } = createStackNavigator<TStackScreens>()

const SCREENS: IScreen[] = [
  {
    component: InvoiceScreen,
    name: 'Invoice',
  },
]

const Routes: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Invoice">
        {SCREENS.map(({ name, component, options }, index) => (
          <Screen
            name={name}
            component={component}
            options={options}
            key={index}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes
