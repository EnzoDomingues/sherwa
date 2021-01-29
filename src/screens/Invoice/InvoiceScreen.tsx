/* eslint-disable @typescript-eslint/no-empty-interface */

import React, { Component } from 'react'
import { View } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'

import { StackScreenProps } from '@react-navigation/stack'

import { TStackScreens } from '~/@types/application/NavigationApplication.types'
import { getInvoicesCustomer } from '~/store/Invoice/InvoiceSelectors'
import { TApplicationState } from '~/store/StoreConfig'

export interface IInvoiceScreenParams {}
export interface IState {}

type TNavigation = StackScreenProps<TStackScreens, 'Invoice'>
export type TProps = TInvoiceProps & TNavigation

export class InvoiceScreen extends Component<TProps, IState> {
  render() {
    return <View />
  }
}

const connector = connect((state: TApplicationState) => ({
  customerInvoices: getInvoicesCustomer(state),
}))

type TInvoiceProps = ConnectedProps<typeof connector>
export default connector(InvoiceScreen)
