import styled from 'styled-components/native'

import { horizontalScale, verticalScale } from '~/utils/scaling'

export const TextInput = styled.TextInput`
  padding-left: ${horizontalScale(16)}px;
  height: 48px;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.sizes.text};
  color: ${({ theme }) => theme.colors.background.sextanary};
`

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: ${verticalScale(14)}px;
  padding-horizontal: ${horizontalScale(16)}px;
`
export const ContainerInput = styled.View`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.background.sextanary};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: ${horizontalScale(40)}px;
  justify-content: space-between;
`

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  padding-top: ${verticalScale(2)}px;
  padding-bottom: ${verticalScale(8)}px;
  font-size: ${({ theme }) => theme.typography.sizes.button};
  color: ${({ theme }) => theme.colors.background.sextanary};
`

export const ContainerError = styled.View`
  margin-top: ${verticalScale(8)}px;
`

export const ErrorText = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.text};
  color: ${({ theme }) => theme.colors.text.quintenary};
`
