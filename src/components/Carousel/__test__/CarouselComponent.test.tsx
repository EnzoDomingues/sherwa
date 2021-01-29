import React from 'react'
import { View } from 'react-native'

import { render } from '@testing-library/react-native'

import Carousel from '~/components/Carousel/CarouselComponent'
import AppMockedProvider from '~/providers/AppMockedProvider'

let items = [<View />]
const setup = () => {
  return render(
    <AppMockedProvider>
      <Carousel items={items} scrollEnabled showBullets />
    </AppMockedProvider>,
  )
}

describe('Carousel Component', () => {
  const { findByTestId } = setup()

  it('should render items on carousel', async () => {
    const items = await findByTestId('Carousel item view 0')
    expect(items).toBeDefined()
  })
})
