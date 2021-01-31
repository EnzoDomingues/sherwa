import React, { FunctionComponent } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

interface IDismissKeyboardProps {
  children?: React.ReactNode
}

const DismissKeyboard: FunctionComponent<IDismissKeyboardProps> = ({
  children,
}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)
export default DismissKeyboard
