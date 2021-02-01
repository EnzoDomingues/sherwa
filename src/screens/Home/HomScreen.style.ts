import { Platform } from 'react-native'

import styled from 'styled-components/native'

import { verticalScale } from '~/utils/scaling'

export const Container = styled.View`
  margin-top: ${verticalScale(60)}px;
`

export const ContainerVideo = styled.View`
  width: 100%;
  margin-bottom: ${verticalScale(30)}px;
`

export const ImageBg = styled.Image`
  width: 100%;
  height: ${Platform.OS === 'ios' ? '550px' : '500px'};
  resize-mode: cover;
`
