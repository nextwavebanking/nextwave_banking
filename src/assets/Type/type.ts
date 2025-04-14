export type userDataType = {
  firstName: string
  secondName: string
  businessEmail: string
  phone: string
  companyName: string
  help: string
  isCheck: boolean
}

export type PhoneData = {
  country: undefined | string
  countryCode: undefined | string
  formatted: string
  nationalNumber: undefined | string
  possible: undefined | boolean
  valid: undefined | boolean
}
