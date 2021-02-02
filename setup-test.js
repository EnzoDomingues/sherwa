import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import { NativeModules } from 'react-native';

Enzyme.configure({ adapter: new Adapter() })

NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(() => Promise.resolve()),
  addListener: jest.fn(),
  removeListeners: jest.fn()
};

jest.mock('react-native-screens', () => ({
    enableScreens: jest.fn(),
  }))


jest.mock('react-native-localize', () => ({
    getLocales: () => [
      {
        countryCode: 'PT',
        languageTag: 'pt-BR',
        languageCode: 'pt',
        isRTL: false,
      },
      {
        countryCode: 'US',
        languageTag: 'en-US',
        languageCode: 'en',
        isRTL: false,
      },
      {
        countryCode: 'ES',
        languageTag: 'es',
        languageCode: 'es',
        isRTL: false,
      },
    ],
  }))




jest.mock('react-native-config', () => ({
  IS_PRODUCTION: true,
  API_HOST: 'http://prod.com.br',
  DESC: 'prd',
}))

jest.mock('react-native-vector-icons', () => ({
    RNVectorIconsManager: jest.mock(),
    createIconSetFromIcoMoon: jest.fn(),
  }))

  jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock')
    Reanimated.default.call = () => {}
    return Reanimated
  })
  
  jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
  
  global.window = {}
  global.window = global
  
  