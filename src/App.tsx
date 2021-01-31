import React from 'react'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'

import Amplify from 'aws-amplify'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import config from '~/aws-exports'
import Routes from '~/routes/Routes'
import { persistor, store } from '~/store/StoreConfig'
import { darkTheme } from '~/theme/variables'
Amplify.configure(config)
enableScreens()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
