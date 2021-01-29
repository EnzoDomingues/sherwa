import { createSelector } from 'reselect'

import { TApplicationState } from '~/store/StoreConfig'

export const getInvoicesCustomer = createSelector(
  (state: TApplicationState) => state?.invoice?.saleInvoices,
  invoices => invoices?.filter(invoice => invoice?.customerCode === '1'),
)
