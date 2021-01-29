import React, { FunctionComponent } from 'react'
import { Text } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack'

import { THomeStackScreens } from '~/@types/application/NavigationApplication.types'
import { Container } from '~/screens/Profile/ProfileScreen.style'

export type TProfileProps = StackScreenProps<THomeStackScreens, 'Profile'>

const ProfileScreen: FunctionComponent<TProfileProps> = () => {
  return (
    <Container>
      <Text>Perfil</Text>
    </Container>
  )
}

export default ProfileScreen
