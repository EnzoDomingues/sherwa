import React, { useState } from 'react'

import { render, fireEvent } from '@testing-library/react-native'

import Input from '~/components/Input/InputComponent'
import translate from '~/lib/i18n/i18n'
import AppMockedProvider from '~/providers/AppMockedProvider'
import { phoneMask } from '~/utils/mask'

const SutTextInput = () => {
  const [value, setValue] = useState('')
  return (
    <Input
      label="texto de teste"
      testID="textInput"
      name="phone"
      value={value}
      onChange={text => setValue(text)}
      errorMessage={translate('api_generic_message')}
      mask={value => phoneMask(value)}
    />
  )
}

const setup = () => {
  return render(
    <AppMockedProvider>
      <SutTextInput />
    </AppMockedProvider>,
  )
}

describe('Input Component', () => {
  it('should render sent label prop', async () => {
    const { findByTestId } = setup()

    const label = await findByTestId('textInput label')
    expect(label.children[0]).toBe('texto de teste')
  })

  it('should be possible write on input', async () => {
    const { findByTestId } = setup()

    const textInput = await findByTestId('textInput')

    fireEvent.changeText(textInput, '1')

    expect(textInput.props.value).toBe('1')
  })

  it('should be possible write on input mask', async () => {
    const { findByTestId } = setup()

    const textInput = await findByTestId('textInput')

    fireEvent.changeText(textInput, '11974745099')

    expect(textInput.props.value).toBe('(11) 97474-5099')
  })

  it('should render error', async () => {
    const { findByTestId } = setup()

    const error = await findByTestId('textInput error')

    expect(error.children[0]).toBe(translate('api_generic_message'))
  })
})
