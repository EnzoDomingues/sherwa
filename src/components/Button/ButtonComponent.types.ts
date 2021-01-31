import { GestureResponderEvent } from 'react-native'

export interface IButtomProps {
  width?: 'small' | 'medium' | 'large'
  height?: 'small' | 'medium' | 'large'
  bgColor?: string
  borderColor?: string
  color?: string
  text?: string
  testID?: string
  justifyContent?: string
  onPress?: (event?: GestureResponderEvent) => void
  disabled?: boolean
  isTitleBold?: boolean
  isUnderline?: boolean
  linearGradient?: boolean
  marginTop?: number
  marginBottom?: number
  colorGradientLeft?: string
  colorGradientRight?: string
}

export enum EButtonWidth {
  small = '45%',
  medium = '50%',
  large = '90%',
}

export enum EButtonHeight {
  small = '25px',
  medium = '40px',
  large = '90px',
}

export enum EButtonLinearHeight {
  small = 20,
  medium = 40,
  large = 90,
}
