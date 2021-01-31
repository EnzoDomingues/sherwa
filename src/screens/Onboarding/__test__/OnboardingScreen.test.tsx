import React from 'react'

import { render, fireEvent } from '@testing-library/react-native'

import AppMockedProvider from '~/providers/AppMockedProvider'
import OnboardingScreen, {
  TOnboardingProps,
} from '~/screens/Onboarding/OnboardingScreen'

const navigateMock = jest.fn()

const mockedProps: TOnboardingProps = {
  // @ts-ignore
  navigation: {
    navigate: navigateMock,
  },
  route: {
    key: 'Onboarding',
    name: 'Onboarding',
  },
}

const setup = () =>
  render(
    <AppMockedProvider>
      <OnboardingScreen {...mockedProps} />
    </AppMockedProvider>,
  )

describe('OnboardingScreen', () => {
  afterEach(jest.clearAllMocks)

  it('should have carousel', async () => {
    const { findByTestId } = setup()

    const items = await findByTestId('Carousel infos')
    expect(items).toBeDefined()
  })

  it('Should call function when press button login', async () => {
    const { findByTestId } = setup()

    const button = await findByTestId('Button enter login touchable')
    fireEvent.press(button)

    expect(navigateMock).toBeCalledWith('Login')
  })
  
  it('Should call function when press button create account', async () => {
    const { findByTestId } = setup()

    const button = await findByTestId('Button enter create account touchable')
    fireEvent.press(button)

    expect(navigateMock).toBeCalledWith('Login')
  })
})
