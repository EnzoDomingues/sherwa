import { Reducer } from 'redux'

import {
  EInvoiceTypes,
  IInvoiceState,
  TInvoiceActions,
} from '~/store/Invoice/Invoice.types'

export const INVOICE_INITIAL_STATE: IInvoiceState = {}
export const InvoiceReducer: Reducer<IInvoiceState> = (
  state = INVOICE_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case EInvoiceTypes.INVOICE_ISSUE_TARGET: {
      return state
    }

    default: {
      return state
    }
  }
}

export const InvoiceActions: TInvoiceActions = {
  create: {
    issueTarget: () => ({
      type: EInvoiceTypes.INVOICE_ISSUE_TARGET,
    }),
  },
}
