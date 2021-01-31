import React, { FunctionComponent } from 'react'
import { Text } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack'

import { THomeStackScreens } from '~/@types/application/NavigationApplication.types'
import { Container } from '~/screens/Home/HomScreen.style'

export type THomeProps = StackScreenProps<THomeStackScreens, 'Home'>

const HomeScreen: FunctionComponent<THomeProps> = () => {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  )
}

export default HomeScreen
