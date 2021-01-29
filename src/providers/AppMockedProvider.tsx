import React from 'react'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components/native'

import { persistor, store } from '~/store/StoreConfig'
import { darkTheme } from '~/theme/variables'

enableScreens()

export interface IMockedProvider {
  storeMocked?: any
}

const AppMockedProvider: React.FC<IMockedProvider> = ({
  children,
  storeMocked = store,
}) => (
  <Provider store={storeMocked}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </PersistGate>
  </Provider>
)

export default AppMockedProvider
