import React, { FunctionComponent } from 'react'
import { Dimensions, FlatList, ScrollView } from 'react-native'
import Video from 'react-native-video'

import { StackScreenProps } from '@react-navigation/stack'

import { THomeStackScreens } from '~/@types/application/NavigationApplication.types'
import translate from '~/lib/i18n/i18n'
import { ContainerVideo, ImageBg } from '~/screens/Home/HomScreen.style'
import {
  Container,
  ContainerPadding,
} from '~/screens/Profile/ProfileScreen.style'
import { DefaultTitle } from '~/theme/DefaultStyles'
import { verticalScale } from '~/utils/scaling'

export type THomeProps = StackScreenProps<THomeStackScreens, 'Home'>

const dataClips = [
  {
    video: require('~/assets/videos/video.mp4'),
    title: 'Meu clipe do forti',
  },
  {
    video: require('~/assets/videos/video.mp4'),
    title: 'Cod warzone',
  },
  {
    video: require('~/assets/videos/video.mp4'),
    title: 'Clipe Pubg',
  },
  {
    video: require('~/assets/videos/video.mp4'),
    title: 'Fortinite',
  },
]

const HomeScreen: FunctionComponent<THomeProps> = () => {
  return (
    <ScrollView>
      <Container>
        <ImageBg source={require('~/assets/images/bg-02.png')} />
        <ContainerPadding>
          <DefaultTitle
            isBold
            color="quaternary"
            fontSize="lastOrderTitle"
            marginTop={verticalScale(10)}
            marginBottom={verticalScale(15)}
          >
            {translate('Home.best_clips')}
          </DefaultTitle>

          <FlatList
            data={dataClips}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ContainerVideo>
                <DefaultTitle
                  isBold
                  fontSize="subtitle"
                  color="quaternary"
                  marginBottom={verticalScale(10)}
                  isPadding
                >
                  {item.title}
                </DefaultTitle>
                <Video
                  source={item.video}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    height: Dimensions.get('window').width * (9 / 16),
                    backgroundColor: 'black',
                  }}
                  controls
                  paused
                  resizeMode={'cover'}
                />
              </ContainerVideo>
            )}
            keyExtractor={item => item.title}
          />
        </ContainerPadding>
      </Container>
    </ScrollView>
  )
}

export default HomeScreen
