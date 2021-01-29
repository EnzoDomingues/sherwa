import AsyncStorage from '@react-native-community/async-storage'
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import { InvoiceReducer } from '~/store/Invoice/InvoiceCreators'
import SagaConfig from '~/store/SagaConfig'

export type TApplicationState = ReturnType<typeof PersistedReducer>

const PERSIST_CONFIG = {
  key: 'root',
  storage: AsyncStorage,
}

const ReducerConfig = combineReducers({
  invoice: InvoiceReducer,
})

export const PersistedReducer = persistReducer(PERSIST_CONFIG, ReducerConfig)
export const SagaMiddleware = createSagaMiddleware()

const store: Store<TApplicationState> = createStore(
  PersistedReducer,
  composeWithDevTools(applyMiddleware(SagaMiddleware)),
)

SagaMiddleware.run(SagaConfig)

let persistor = persistStore(store)

export { store, persistor }
