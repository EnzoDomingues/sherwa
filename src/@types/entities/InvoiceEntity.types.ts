export interface IInvoice {
  customerCode: string
  series: string
  establishment: string
  invoiceNumber: string
  status: string
  statusMessage: string
  accessKey: string
  createDate: Date
  details?: object
}
