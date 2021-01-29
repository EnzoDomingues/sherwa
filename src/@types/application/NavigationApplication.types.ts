import { ComponentType } from 'react'

import { IInvoiceScreenParams } from '~/screens/Invoice/InvoiceScreen'

export type TStackScreens = {
  Invoice: IInvoiceScreenParams
  Onboarding: undefined
}

export interface IScreen {
  name: keyof TStackScreens
  component: ComponentType<any>
  options?: any
}
