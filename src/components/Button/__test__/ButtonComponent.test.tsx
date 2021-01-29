import React from 'react'

import { render } from '@testing-library/react-native'

import Button from '~/components/Button/ButtonComponent'
import AppMockedProvider from '~/providers/AppMockedProvider'

const onPress = jest.fn()
const setup = () => {
  return render(
    <AppMockedProvider>
      <Button text="texto de teste" testID="button id" onPress={onPress} />
    </AppMockedProvider>,
  )
}

describe('Button Component', () => {
  it('should render sent text prop', async () => {
    const { findByTestId } = setup()
    const text = await findByTestId('button id text')
    expect(text.children[0]).toBe('texto de teste')
  })

  it('should render sent testID prop in touchable', async () => {
    const { findByTestId } = setup()
    const touchable = await findByTestId('button id touchable')
    expect(touchable).not.toBeUndefined()
  })
})
