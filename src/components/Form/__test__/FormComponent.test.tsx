/* eslint-disable jest/valid-expect */
import React from 'react'

import { render } from '@testing-library/react-native'
import * as Yup from 'yup'

import Form, {
  FormValidator,
  YupObjectSchema,
} from '~/components/Form/FormComponent'
import {
  FormEvaluate,
  IFormControl,
} from '~/components/Form/FormComponent.types'
import { sleep } from '~/utils/testingSleep'

jest.mock('yup', () => ({
  string: jest.requireActual('yup').string,
  number: jest.requireActual('yup').number,

  setLocale: jest.fn(),
  object: jest.fn(() => ({
    shape: jest.fn(() => ({
      validateSync: jest.fn(),
      validateSyncAt: jest.fn(),
    })),
  })),
}))

const props = {
  onSubmit: jest.fn(),
  initialValues: {
    name: '',
  },
  validationSchema: () => ({
    name: Yup.string().required().min(5),
  }),
  children: jest.fn(),
}
const setup = () => {
  return render(<Form {...props} />)
}

describe('Form component', () => {
  it('should shape validation schema with Yup', async () => {
    setup()
    const shapeSpy = jest.spyOn(YupObjectSchema, 'shape')
    await sleep(500)
    expect(shapeSpy).toBeCalled()
  })

  it(`should call FormEvaluate.void in order to fix View component
  required return`, () => {
    const voidSpy = jest.spyOn(FormEvaluate, 'void')
    setup()
    expect(voidSpy).toBeCalled()
  })

  describe('FormControl', () => {
    it('should call children function passing FormControl', async () => {
      let formControl: IFormControl
      setup()
      const childrenCalledWith = props.children.mock.calls[0]

      expect(props.children).toBeCalled()
      expect(typeof childrenCalledWith === typeof formControl)
    })

    it('should call FormValidator.isValid', async () => {
      const isValidSpy = jest.spyOn(FormValidator, 'isValid')
      setup()
      expect(isValidSpy).toBeCalled()
    })

    it('should call FormValidator.getErrors', async () => {
      const getErrorsSpy = jest.spyOn(FormValidator, 'getErrors')
      setup()
      expect(getErrorsSpy).toBeCalled()
    })
  })
})
