import { Platform } from 'react-native'

import styled from 'styled-components/native'

import { verticalScale, horizontalScale } from '~/utils/scaling'

export const Container = styled.View`
  flex: 1;
  margin-top: ${Platform.OS === 'android'
    ? verticalScale(30)
    : verticalScale(45)}px;
`

export const ImageProfile = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  align-self: center;
  resize-mode: cover;
`

export const ContainerFollowers = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  margin-left: ${Platform.OS === 'android'
    ? horizontalScale(55)
    : horizontalScale(58)}px;
`

export const ContainerFollower = styled.View`
  display: flex;
  flex-direction: row;
  width: 48%;
  justify-content: space-between;
  align-items: center;
`

export const FollowerButton = styled.TouchableOpacity`
  padding-right: ${horizontalScale(10)}px;
`

export const ContainerGames = styled.View`
  width: 153px;
  height: 160px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.background.sextanary};
  box-shadow: 2px 2px 3px #ccc;
  margin-right: ${horizontalScale(22)}px;
  margin-bottom: ${verticalScale(22)}px;
`

export const ContainerPadding = styled.View`
  padding-horizontal: ${horizontalScale(20)}px;
`

export const ImageGames = styled.Image`
  width: 125px;
  height: 80px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  align-self: center;
  resize-mode: contain;
  margin-top: ${verticalScale(5)}px;
`

export const ContainerInfos = styled.View`
  border-top-width: 0.3px;
  border-top-color: ${({ theme }) => theme.colors.background.ninetenary};
  padding-horizontal: ${horizontalScale(10)}px;
`

export const FavoriteBlock = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ContainerVideo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: ${verticalScale(30)}px;
`
