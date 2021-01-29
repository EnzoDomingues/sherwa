export const phoneBrRegExp = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/

export const phoneMask = (value: string) => {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d\d)(\d)/g, '($1) $2')
  value = value.replace(/(\d{5})(\d)/, '$1-$2')
  return value
}

export const onlyNumeric = (value: string) => {
  value = value.replace(/\D/g, '')
  return value
}
