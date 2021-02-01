import { fontScale } from '~/utils/scaling'
const darkTheme = {
  borderRadius: '5px',
  borderRadius10: '10px',
  borderRadiusLinear: 5,
  typography: {
    fontFamily: 'Arial',
    fontWeight: '500',
    fontWeightLight: '200',
    sizes: {
      onboarding: `${fontScale(22)}px`,
      button: `${fontScale(16)}px`,
      text: `${fontScale(13)}px`,
      number: `${fontScale(12)}px`,
      small: `${fontScale(11)}px`,
      title: `${fontScale(21)}px`,
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
      primary: '#D1532F',
      secondary: '#DE731C',
      tertiary: '#000000',
      quaternary: '#372B08',
      quintenary: '#ff4444',
      sextanary: '#FFF',
      septenary: '#ccc',
      octenary: '#676767',
      ninetenary: '#E5E5E5',
      tentenary: '#07459A',
    },
    title: {
      primary: '#D1532F',
      secondary: '#DE731C',
      tertiary: '#000000',
      quaternary: '#372B08',
      quintenary: '#1ab394',
      sextanary: '#FFF',
      septenary: '#ccc',
      octenary: '#EBEFF2',
      ninetenary: '#E5E5E5',
      tentenary: '#d9d9d9,',
      elevenary: '#,',
    },
    background: {
      primary: '#D1532F',
      secondary: '#DE731C',
      tertiary: '#000000',
      quaternary: '#372B08',
      quintenary: '#213a5e',
      sextanary: '#FFF',
      septenary: '#ccc',
      cardProduct: '#d0d0d0',
      octenary: '#676767',
      ninetenary: '#E5E5E5',
      tentenary: '#d9d9d9',
      elevenary: '#ebebeb',
      transparent: 'transparent',
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
