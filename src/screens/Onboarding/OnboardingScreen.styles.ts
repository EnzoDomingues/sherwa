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
  padding-horizontal: ${horizontalScale(20)}px;
`
export const Body = styled.View`
  height: 68%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Bold = styled.Text`
  font-weight: bold;
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
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${verticalScale(50)}px;
`
