import { takeLatest } from 'redux-saga/effects'

import { EInvoiceTypes } from '~/store/Invoice/Invoice.types'

export function* issueTargetSagas() {
  return 'issueTargetSagas'
}

export default function* () {
  yield takeLatest(EInvoiceTypes.INVOICE_ISSUE_TARGET, issueTargetSagas)
}
