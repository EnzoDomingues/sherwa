import { createSelector } from 'reselect'

import { TApplicationState } from '~/store/StoreConfig'

export const selectAuth = (state: TApplicationState) => state.auth

export const selectAuthEmail = createSelector(
  [selectAuth],
  ({ signInUserSession }) => signInUserSession,
)

export const selectAuthEmailFailure = createSelector(
  [selectAuth],
  ({ failure }) => failure,
)
