import React, { useEffect } from 'react'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { applyAxiosInterceptors } from '~/lib/axiosInterceptors/axiosInterceptors'
import Routes from '~/routes/Routes'
import { persistor, store } from '~/store/StoreConfig'
import { darkTheme } from '~/theme/variables'

enableScreens()

const App = () => {
  useEffect(() => {
    applyAxiosInterceptors()
  }, [])
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
