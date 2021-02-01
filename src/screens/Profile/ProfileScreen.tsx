import React, { FunctionComponent, useState } from 'react'
import { FlatList, ScrollView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Video from 'react-native-video'

import { StackScreenProps } from '@react-navigation/stack'

import { THomeStackScreens } from '~/@types/application/NavigationApplication.types'
import translate from '~/lib/i18n/i18n'
import {
  Container,
  ImageProfile,
  ContainerFollowers,
  FollowerButton,
  ContainerFollower,
  ContainerGames,
  ImageGames,
  ContainerInfos,
  FavoriteBlock,
  ContainerVideo,
  ContainerPadding,
} from '~/screens/Profile/ProfileScreen.style'
import { DefaultTitle } from '~/theme/DefaultStyles'
import { fontScale, horizontalScale, verticalScale } from '~/utils/scaling'

export type TProfileProps = StackScreenProps<THomeStackScreens, 'Profile'>
const dataGames = [
  {
    image:
      'https://tudosobrefortnitehome.files.wordpress.com/2019/05/cropped-fortnite-logotipo-1-2.jpg',
    title: 'Fortinite',
    stars: '4.0',
  },
  {
    image:
      'https://i.pinimg.com/originals/3e/ce/2a/3ece2a1e5a5e5f430f5a530ba1104a14.jpg',
    title: 'Minecraft',
    stars: '3.0',
  },
  {
    image:
      'https://logos-download.com/wp-content/uploads/2018/03/Call_of_Duty_logo_black.png',
    title: 'COD | Warzone',
    stars: '4.5',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rocket_League_black_text_logo.svg/1200px-Rocket_League_black_text_logo.svg.png',
    title: 'Rocket League',
    stars: '4.0',
  },
]
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

const ProfileScreen: FunctionComponent<TProfileProps> = () => {
  const [userName] = useState('EnzoDomingues')
  const [followers] = useState([1, 2, 3, 4])
  const [followings] = useState([1, 2, 3, 4, 5, 6, 7])
  return (
    <ScrollView>
      <Container>
        <ImageProfile source={require('~/assets/images/profile.png')} />
        <DefaultTitle
          isBold
          color="quaternary"
          textAlign="center"
          fontSize="lastOrderTitle"
          marginBottom={verticalScale(15)}
          marginTop={verticalScale(15)}
        >
          {userName}
        </DefaultTitle>
        <ContainerFollowers>
          <ContainerFollower>
            <FollowerButton onPress={() => {}}>
              <DefaultTitle
                isBold
                color="quaternary"
                marginBottom={verticalScale(13)}
              >
                {translate('Profile.followers')}
              </DefaultTitle>
            </FollowerButton>
            <DefaultTitle color="quaternary" marginBottom={verticalScale(13)}>
              {followers && followers.length}
            </DefaultTitle>
          </ContainerFollower>
          <ContainerFollower>
            <FollowerButton onPress={() => {}}>
              <DefaultTitle
                isBold
                color="quaternary"
                marginBottom={verticalScale(13)}
              >
                {translate('Profile.following')}
              </DefaultTitle>
            </FollowerButton>
            <DefaultTitle color="quaternary" marginBottom={verticalScale(13)}>
              {followings && followings.length}
            </DefaultTitle>
          </ContainerFollower>
        </ContainerFollowers>
        <ContainerPadding>
          <DefaultTitle
            isBold
            color="quaternary"
            fontSize="lastOrderTitle"
            marginTop={verticalScale(10)}
            marginBottom={verticalScale(15)}
          >
            {translate('Profile.my_games')}
          </DefaultTitle>

          <FlatList
            data={dataGames}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <ContainerGames>
                <ImageGames source={{ uri: item.image }} />
                <ContainerInfos>
                  <DefaultTitle
                    isBold
                    fontSize="number"
                    color="quaternary"
                    marginTop={verticalScale(10)}
                    marginBottom={verticalScale(5)}
                  >
                    {item.title}
                  </DefaultTitle>
                  <FavoriteBlock>
                    <Icon
                      name={'star'}
                      size={fontScale(11)}
                      style={{ paddingRight: horizontalScale(2) }}
                      color="#F6B43A"
                    />
                    <DefaultTitle fontSize="small" color="quaternary">
                      ({item.stars})
                    </DefaultTitle>
                  </FavoriteBlock>
                </ContainerInfos>
              </ContainerGames>
            )}
            keyExtractor={item => item.title}
            decelerationRate="fast"
          />
          <DefaultTitle
            isBold
            color="quaternary"
            fontSize="lastOrderTitle"
            marginTop={verticalScale(10)}
            marginBottom={verticalScale(15)}
          >
            {translate('Profile.my_clips')}
          </DefaultTitle>
        </ContainerPadding>
        <FlatList
          data={dataClips}
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
                  width: Dimensions.get('window').width,
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
          decelerationRate="fast"
        />
      </Container>
    </ScrollView>
  )
}

export default ProfileScreen
