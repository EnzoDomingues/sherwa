import { Platform } from 'react-native'

import styled from 'styled-components/native'

import { verticalScale, horizontalScale } from '~/utils/scaling'

export const FooterContainer = styled.View`
  display: flex;
  width: 100%;
  flex: ${Platform.OS === 'ios' ? '0.25' : '0.3'};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${horizontalScale(15)}px;
`
