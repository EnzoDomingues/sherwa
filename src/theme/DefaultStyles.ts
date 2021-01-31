import { Platform } from 'react-native'

import styled from 'styled-components/native'

import {
  IDefaultStylesProps,
  EDefaultJustifyContent,
} from '~/@types/application/StylesApplication.types'
import { horizontalScale, verticalScale } from '~/utils/scaling'

export const DefaultContainer = styled.View<IDefaultStylesProps>`
  display: flex;
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.sextanary};
  flex-direction: column;
  justify-content: ${({ justifyContent }) =>
    EDefaultJustifyContent[justifyContent] ?? 'space-between'};
  align-items: center;
  padding-top: ${Platform.OS === 'ios'
    ? `${verticalScale(40)}px;`
    : `${verticalScale(20)}px;`};
`

export const ViewRight = styled.View<IDefaultStylesProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: ${Platform.OS === 'android' ? horizontalScale(10) : 0}px;
  width: ${({ width }) => width ?? 100}%;
`

export const ContainerForm = styled.View`
  width: 100%;
  height: 100%;
  padding-horizontal: ${horizontalScale(8)}px;
  flex-direction: column;
  align-items: center;
`

export const ButtonView = styled.View`
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: ${verticalScale(50)}px;
`

export const DefaultTitle = styled.Text<IDefaultStylesProps>`
  color: ${({ theme, color }) =>
    color ? theme.colors.text[color] : theme.colors.text.tertiary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme, fontSize }) =>
    fontSize
      ? theme.typography.sizes[fontSize]
      : theme.typography.sizes.subtitle};
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
  width: ${({ width }) => width ?? 100}%;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
  text-align: ${({ textAlign }) => textAlign ?? 'auto'};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
`

export const NotificationIcon = styled.View`
  border-radius: 100px;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.text.quintenary};
  position: absolute;
  right: 3px;
  padding-bottom: ${Platform.OS === 'android' ? 1 : 0}px;
  top: 1px;
`
