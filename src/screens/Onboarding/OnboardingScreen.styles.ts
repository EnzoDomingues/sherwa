import { Platform } from 'react-native'

import styled from 'styled-components/native'

import { horizontalScale, verticalScale } from '~/utils/scaling'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const ContainerImage = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  justify-content: center;
`
export const Body = styled.View`
  flex: 1;
  background-color: red;
  padding-horizontal: ${horizontalScale(16)}px;
`

export const ImageCarousel = styled.Image`
  width: 75px;
  height: 57px;
  margin: auto;
  margin-top: ${Platform.OS === 'android'
    ? `${verticalScale(60)}px`
    : `${verticalScale(70)}px`};
`

export const Bold = styled.Text`
  font-weight: bold;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.sextanary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.onboarding};
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  margin-top: ${verticalScale(50)}px;
  margin-bottom: ${Platform.OS === 'android'
    ? `${verticalScale(60)}px`
    : `${verticalScale(50)}px`};
`

export const Subtitle = styled.Text`
  padding-top: 10%;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.subtitle};
  font-weight: normal;
  text-align: center;
`

export const ButtonView = styled.View`
  display: flex;
  flex: 2;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: ${verticalScale(50)}px;
`
