import { Ref } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { IFormControl } from '~/components/Form/FormComponent.types'

export interface IInputProps {
  label?: string
  formControl?: IFormControl
  onSubmitEditing?: () => void
  onChange?: (text: string) => void
  onFocus?: () => void
  mask?: (text: string) => string
  onBlur?: () => void
  name?: string
  testID?: string
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  autoFocus?: boolean
  isShowEyes?: boolean
  secureTextEntry?: boolean
  errorMessage?: string
  handleRef?: Ref<TextInput>
}

export type TInputProps = TextInputProps & IInputProps
