import { Action } from 'redux'

export interface IReduxAction extends Action {
  payload?: object
}

type TStoreActionGroup<T = any> = {
  [P in keyof T]: T[P]
}

type TActionsProps = 'create' | 'get' | 'delete' | 'update'
export type TStoreActions<T> = Record<TActionsProps, TStoreActionGroup<T>>
