import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  IHomeStackScreen,
  EHomeIcons,
} from '~/@types/application/NavigationApplication.types'
import translate from '~/lib/i18n/i18n'
import HomeScreen from '~/screens/Home/HomeScreen'
import RequestScreen from '~/screens/Orders/OrdersScreen'
import ProfileScreen from '~/screens/Profile/ProfileScreen'

const HOME_SCREENS: IHomeStackScreen[] = [
  {
    component: HomeScreen,
    name: 'Home',
  },
  {
    component: RequestScreen,
    name: 'Orders',
  },
  {
    component: ProfileScreen,
    name: 'Profile',
  },
]

const Tab = createBottomTabNavigator()

const HomeScreenStack = () => (
  <Tab.Navigator>
    {HOME_SCREENS.map(({ name, component, options }, index) => (
      <Tab.Screen
        name={name}
        component={component}
        options={{
          ...options,
          tabBarLabel: translate(`BottomTabs.${name.toLocaleLowerCase()}`),
          tabBarIcon: ({ color, size }) => (
            <Icon name={EHomeIcons[name]} color={color} size={size} />
          ),
        }}
        key={index}
      />
    ))}
  </Tab.Navigator>
)

export default HomeScreenStack
