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
  marginTop?: number
  marginBottom?: number
}

export enum EButtonWidth {
  small = '40%',
  medium = '50%',
  large = '90%',
}

export enum EButtonHeight {
  small = '20px',
  medium = '50px',
  large = '90px',
}
