import React, { useState } from 'react'
import { TouchableNativeFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  Container,
  TextInput,
  Label,
  ContainerInput,
  ContainerError,
  ErrorText,
} from '~/components/Input/InputComponent.styles'
import { TInputProps } from '~/components/Input/InputComponent.types'
import { fontScale } from '~/utils/scaling'

const Input: React.FC<TInputProps> = props => {
  const {
    label,
    placeholder,
    value,
    handleRef,
    keyboardType,
    autoCapitalize,
    testID,
    editable,
    maxLength,
    name,
    secureTextEntry,
    mask,
    onFocus,
    onChange,
    onBlur,
    onSubmitEditing,
    autoFocus,
    formControl,
    errorMessage,
    isShowEyes,
  } = props
  const isFormField = Boolean(formControl && name)
  const formFieldError = isFormField && name && formControl.errors[name]
  const [visible, setVisible] = useState(true)

  const handleChange = inputValue => {
    if (isFormField) {
      formControl.handleChange(name)(inputValue)
    }

    if (onChange) {
      onChange(inputValue)
    }
  }

  const handleBlur = () => {
    if (isFormField) {
      formControl.setFieldTouched(name, true)
    }
    if (onBlur) {
      onBlur()
    }
  }

  const inputValue: string = String(
    (isFormField && name ? formControl.values[name] : value) || '',
  )
  const inputMaskValue: string = String(
    mask
      ? isFormField && name
        ? mask(formControl.values[name])
        : mask(value)
      : '',
  )

  return (
    <Container>
      {label && typeof label === 'string' && label.length > 0 && (
        <Label testID={`${testID} label`}>{label}</Label>
      )}
      <ContainerInput>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#ccc"
          keyboardType={keyboardType}
          editable={editable}
          autoCorrect={false}
          maxLength={maxLength}
          ref={handleRef}
          testID={testID}
          onChangeText={handleChange}
          onFocus={onFocus}
          secureTextEntry={isShowEyes ? visible : secureTextEntry}
          value={mask ? inputMaskValue : inputValue}
          onBlur={handleBlur}
          autoCapitalize={autoCapitalize}
          autoFocus={autoFocus}
          onSubmitEditing={onSubmitEditing}
        />
        {isShowEyes && (
          <TouchableNativeFeedback onPress={() => setVisible(!visible)}>
            <Icon
              name={visible ? 'eye' : 'eye-slash'}
              size={fontScale(22)}
              color="#000"
            />
          </TouchableNativeFeedback>
        )}
      </ContainerInput>
      {(isFormField && formFieldError?.message) || errorMessage ? (
        <ContainerError>
          <ErrorText testID={`${testID} error`}>
            {errorMessage || formFieldError?.message}
          </ErrorText>
        </ContainerError>
      ) : (
        <View />
      )}
    </Container>
  )
}

export default Input
