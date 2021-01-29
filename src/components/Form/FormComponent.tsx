import React, { FunctionComponent } from 'react'
import { View } from 'react-native'

import { Formik, FormikConfig, FormikValues, FormikProps } from 'formik'
import * as Yup from 'yup'

import { Container } from '~/components/Form/FormComponent.styles'
import {
  FormEvaluate,
  IFormControl,
  TFormErrorColor,
  TFormErrors,
} from '~/components/Form/FormComponent.types'

export const YupObjectSchema = Yup.object()

export interface IProps extends FormikConfig<FormikValues> {
  validationSchema: (
    validator: typeof Yup,
    formValues: FormikValues,
  ) => {
    [field: string]: any
  }
  testID?: string
  children: (formControl: IFormControl) => void
  errorColor?: TFormErrorColor
  onSubmit: (formValues: FormikValues) => any
  modal?: boolean
}

const FormComponent: FunctionComponent<IProps> = ({
  testID,
  errorColor,
  ...props
}) => (
  <Container testID={`${testID} container`}>
    <Formik
      {...props}
      validationSchema={YupObjectSchema.shape({})}
      validate={() => {}}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
    >
      {(formikProps: FormikProps<FormikValues>) => (
        <View testID={testID}>
          {props.children({
            ...formikProps,
            isValid: FormValidator.isValid(formikProps, props),
            handleSubmit: () => props.onSubmit(formikProps.values),
            errors: FormValidator.getErrors(formikProps, props),
            errorColor,
          })}

          {FormEvaluate.void()}
        </View>
      )}
    </Formik>
  </Container>
)

FormComponent.defaultProps = {
  errorColor: 'red',
  onSubmit: () => {},
  initialValues: {},
}

export const FormValidator: {
  getErrors: (
    formikProps: FormikProps<FormikValues>,
    formProps: IProps,
  ) => TFormErrors

  isValid: (
    formikProps: FormikProps<FormikValues>,
    formProps: IProps,
  ) => boolean
} = {
  getErrors: (formikProps, formProps) => {
    let errors: TFormErrors = {}

    if (!formikProps || !formProps) {
      return errors
    }

    const { values } = formikProps

    Object.keys(values).map(field => {
      try {
        YupObjectSchema.shape(
          formProps.validationSchema(Yup, formikProps.values),
        ).validateSyncAt(field, values)
      } catch (error) {
        const touched = formikProps?.touched[field]
        const value = formikProps?.values[field]

        if (
          !touched ||
          (typeof value === 'string' && value.trim() === '') ||
          (typeof value === 'number' && isNaN(value)) ||
          value === 0
        ) {
          return
        }

        errors = {
          ...errors,
          [field]: {
            value: error?.value[error?.path],
            message: error?.message,
          },
        }
      }
    })

    return errors
  },

  isValid: (formikProps, formProps) => {
    if (!formikProps || !formProps) {
      return false
    }

    try {
      YupObjectSchema.shape(
        formProps.validationSchema(Yup, formikProps.values),
      ).validateSync(formikProps.values)

      return true
    } catch {
      return false
    }
  },
}

export default FormComponent
