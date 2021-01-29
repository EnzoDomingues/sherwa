import {
  format,
  setSeconds,
  setMinutes,
  getSeconds,
  subSeconds,
} from 'date-fns'

export const formatDate = (date: Date, toFormat: string) =>
  format(date, toFormat)

export const addSeconds = (date: Date | number, duration: number) =>
  setSeconds(date, duration)

export const addMinutes = (date: Date | number, duration: number) =>
  setMinutes(date, duration)

export const getSecondsDuration = (date: Date | number) => getSeconds(date)

export const decrementSeconds = (date: Date | number, duration: number) =>
  subSeconds(date, duration)
