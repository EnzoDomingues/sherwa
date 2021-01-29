import { fontScale } from '~/utils/scaling'
const darkTheme = {
  borderRadius: '5px',
  borderRadius10: '10px',
  typography: {
    fontFamily: 'Arial',
    fontWeight: '500',
    fontWeightLight: '200',
    sizes: {
      onboarding: `${fontScale(22)}px`,
      button: `${fontScale(14)}px`,
      text: `${fontScale(13)}px`,
      number: `${fontScale(12)}px`,
      title: `${fontScale(20)}px`,
      subtitle: `${fontScale(15)}px`,
      lastOrderTitle: `${fontScale(18)}px`,
      lastOrderItem: `${fontScale(13)}px`,
    },
    lineHeight: {
      lastOrderTitle: `${fontScale(22)}px`,
      lastOrderItem: `${fontScale(26)}px`,
    },
  },
  colors: {
    text: {
      primary: '#323232',
      secondary: '#6f6e6e',
      tertiary: '#000000',
      quaternary: '#0078e9',
      quintenary: '#ff4444',
      sextanary: '#FFF',
      septenary: '#96A5AF',
      octenary: '#EBEFF5',
      ninetenary: '#E5E5E5',
      tentenary: '#07459A',
    },
    title: {
      primary: '#323232',
      secondary: '#6f6e6e',
      tertiary: '#000000',
      quaternary: '#07459A',
      quintenary: '#1ab394',
      sextanary: '#FFF',
      septenary: '#96A5AF',
      octenary: '#EBEFF2',
      ninetenary: '#E5E5E5',
      tentenary: '#d9d9d9,',
      elevenary: '#,',
    },
    background: {
      primary: '#375f9b',
      secondary: '#6f6e6e',
      tertiary: '#000000',
      quaternary: '#0078e9',
      quintenary: '#213a5e',
      sextanary: '#FFF',
      septenary: '#96A5AF',
      cardProduct: '#d0d0d0',
      octenary: '#EBEFF5',
      ninetenary: '#E5E5E5',
      tentenary: '#d9d9d9',
      elevenary: '#ebebeb',
    },
  },
}

const lightTheme = {
  borderRadius: '5px',
  ...darkTheme.typography,
  colors: {
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
    background: {
      primary: '#959595',
      secondary: '#F48B40',
      white: '#E5E5E5',
    },
  },
}

export { darkTheme, lightTheme }