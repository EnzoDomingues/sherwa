import {
  IReduxAction,
  TStoreActions,
} from '~/@types/application/StoreApplication.types'
import { IInvoice } from '~/@types/entities/InvoiceEntity.types'

export enum EInvoiceTypes {
  INVOICE_ISSUE_TARGET = '@invoice/ISSUE_TARGET',
}

export interface IInvoiceState {
  readonly saleInvoices?: IInvoice[]
}

interface IInvoiceActions {
  issueTarget: () => IReduxAction
}

export type TInvoiceActions = Partial<TStoreActions<IInvoiceActions>>
