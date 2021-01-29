import React from 'react'

import {
  NavigationContainerRef,
  StackActions,
  CommonActions,
} from '@react-navigation/native'

import { TStackScreens } from '~/@types/application/NavigationApplication.types'

export const navigationRef = React.createRef<NavigationContainerRef>()

export function getCurrentRoute(): keyof TStackScreens {
  return navigationRef?.current?.getCurrentRoute()?.name as keyof TStackScreens
}

export default function navigate(
  routeName: keyof TStackScreens,
  params?: {
    reset?: boolean
    push?: boolean
    [param: string]: any
  },
) {
  if (params?.push) {
    return navigationRef?.current?.dispatch(
      StackActions.push(routeName, params),
    )
  }

  if (params?.reset) {
    return navigationRef?.current?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routeName, params }],
      }),
    )
  }

  navigationRef?.current?.navigate(routeName, params)
}

export { navigate }
