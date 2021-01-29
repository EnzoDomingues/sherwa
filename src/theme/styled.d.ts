/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { darkTheme } from '~/theme/variables'
declare module 'styled-components' {
  type Theme = typeof darkTheme
  export interface DefaultTheme extends Theme {}
}
