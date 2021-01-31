import { ComponentType } from 'react'

export enum EHomeIcons {
  'Home' = 'home',
  'Profile' = 'perm-identity',
}

export type TStackScreens = {
  Login: undefined
  Onboarding: undefined
  Home: undefined
}

export type THomeStackScreens = {
  Home: undefined
  Profile: undefined
}

export interface IScreen {
  name: keyof TStackScreens
  component: ComponentType<any>
  options?: any
}

export interface IHomeStackScreen {
  name: keyof THomeStackScreens
  component: ComponentType<any>
  options?: any
}
