import React, {
  useRef,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StackScreenProps } from '@react-navigation/stack'
import * as Yup from 'yup'

import { TStackScreens } from '~/@types/application/NavigationApplication.types'
import LogoSherwa from '~/assets/images/logo-sherwa.svg'
import Button from '~/components/Button/ButtonComponent'
import DismissKeyboard from '~/components/DismissKeyboard/DismissKeyboardComponent'
import FormComponent from '~/components/Form/FormComponent'
import Input from '~/components/Input/InputComponent'
import translate from '~/lib/i18n/i18n'
import { FooterContainer } from '~/screens/Login/LoginScreen.styles'
import { authEmailRequest } from '~/store/Auth/AuthCreators'
import {
  selectAuthEmail,
  selectAuthEmailFailure,
} from '~/store/Auth/AuthSelector'
import { IAuthEmailRequest } from '~/store/Auth/AuthTypes'
import {
  DefaultTitle,
  DefaultContainer,
  ViewRight,
  ContainerForm,
} from '~/theme/DefaultStyles'
import { verticalScale } from '~/utils/scaling'
export type TLoginProps = StackScreenProps<TStackScreens, 'Login'>

interface IFormValues {
  email: string
  password: string
}

const LoginScreen: FunctionComponent<TLoginProps> = ({ navigation }) => {
  const nextInput = useRef(null)
  const [loading, setLoading] = useState(false)
  const [messageError, setMessageError] = useState('')
  const dispatch = useDispatch()
  const storeAuthEmail = useSelector(selectAuthEmail)
  const storeAuthEmailFailure = useSelector(selectAuthEmailFailure)

  const getLogin = useCallback(
    (authRequestParams: IAuthEmailRequest) =>
      dispatch(authEmailRequest(authRequestParams)),
    [dispatch],
  )

  const loginFormSubmit = async (loginEmailRequest: IFormValues) => {
    setLoading(true)
    const formValues: IAuthEmailRequest = {
      username: loginEmailRequest.email,
      password: loginEmailRequest.password,
    }
    getLogin(formValues)
  }

  useEffect(() => {
    if (storeAuthEmail !== null && storeAuthEmail !== undefined) {
      setLoading(false)
      setMessageError('')
      navigation.navigate('Home')
    }
  }, [navigation, storeAuthEmail])

  useEffect(() => {
    if (storeAuthEmailFailure !== null && storeAuthEmailFailure !== undefined) {
      setLoading(false)
      console.log(storeAuthEmailFailure)

      setMessageError(storeAuthEmailFailure)
    }
  }, [storeAuthEmailFailure])

  return (
    <DismissKeyboard>
      <DefaultContainer justifyContent="flexStart">
        <LogoSherwa width={180} />
        <DefaultTitle
          textAlign="center"
          marginBottom={verticalScale(20)}
          marginTop={verticalScale(15)}
        >
          {translate('Login.already_access')}
        </DefaultTitle>
        <FormComponent
          onSubmit={(loginEmailRequest: IFormValues) =>
            loginFormSubmit(loginEmailRequest)
          }
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={() => ({
            email: Yup.string().label('Email').required(),
            password: Yup.string().label('Password').required(),
          })}
        >
          {formControl => (
            <ContainerForm>
              <Input
                name="email"
                testID="email input"
                formControl={formControl}
                label={translate('Login.email')}
                placeholder={translate('Login.enter_email')}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => nextInput?.current.focus()}
                autoFocus
              />
              <Input
                name="password"
                testID="Password input"
                formControl={formControl}
                label={translate('Login.password')}
                placeholder={translate('Login.enter_password')}
                handleRef={nextInput}
                blurOnSubmit={true}
                autoCapitalize="none"
                isShowEyes
                errorMessage={messageError && messageError}
              />
              <ViewRight>
                <Button
                  width="small"
                  height="small"
                  text={translate('Login.forgot_password')}
                  testID="Button forgot password Login"
                  onPress={formControl.handleSubmit}
                  bgColor="sextanary"
                  color="quaternary"
                  isUnderline
                  marginBottom={verticalScale(20)}
                  isTitleBold={false}
                />
              </ViewRight>
              <Button
                width="large"
                height="medium"
                text={translate('Login.button_enter')}
                testID="Button enter login"
                colorGradientLeft="#D1532F"
                colorGradientRight="#DE731C"
                color="sextanary"
                linearGradient
                onPress={formControl.handleSubmit}
                disabled={!formControl.isValid}
                loading={loading}
              />
            </ContainerForm>
          )}
        </FormComponent>

        <FooterContainer>
          <DefaultTitle textAlign="center" width={60} fontSize="subtitle">
            {translate('Login.info_contact')}
          </DefaultTitle>
          <Button
            width="small"
            height="small"
            text={translate('Login.button_create_account')}
            testID="Button create account"
            color="quaternary"
            isUnderline
            onPress={() => navigation.navigate('Home')}
          />
        </FooterContainer>
      </DefaultContainer>
    </DismissKeyboard>
  )
}

export default LoginScreen
