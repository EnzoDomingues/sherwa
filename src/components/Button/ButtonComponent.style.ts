import styled from 'styled-components/native'

import {
  EButtonWidth,
  EButtonHeight,
  IButtomProps,
} from '~/components/Button/ButtonComponent.types'

export const ButtonContainer = styled.View<IButtomProps>`
  background: ${({ theme, bgColor }) =>
    bgColor
      ? theme.colors.background[bgColor]
      : theme.colors.background.sextanary};
  width: ${({ width }) => EButtonWidth[width] ?? '48%'};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid;
  border-color: ${({ theme, borderColor }) =>
    borderColor ? theme.colors.background[borderColor] : 'transparent'};
  height: ${({ height }) => EButtonHeight[height] ?? '48px'};
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
  flex-direction: row;
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.button};
  font-weight: ${({ isTitleBold }) => (isTitleBold ? 'bold' : 'normal')};
  color: ${({ theme, color }) =>
    color ? theme.colors.text[color] : theme.colors.text.tertiary};
  text-decoration: ${({ isUnderline }) =>
    isUnderline ? 'underline' : 'none'}; ;
`

export const ButtonFeedback = styled.TouchableNativeFeedback<IButtomProps>`
  width: 100%;
`
