import { FormikValues, FormikProps } from 'formik'

export interface IFormControl extends FormikProps<FormikValues> {
  errors: TFormErrors
  errorColor: TFormErrorColor
  handleSubmit: () => any
}

export type TFormErrors = {
  [field: string]: {
    value: any
    message: string
  }
}

export type TFormErrorColor = 'red' | 'white' | 'primary'

export const FormEvaluate = {
  void: (): void => {},
  height: { height: '100%' },
}
