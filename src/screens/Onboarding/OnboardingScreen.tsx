import React, { useMemo } from 'react'
import { Platform } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack'

import { TStackScreens } from '~/@types/application/NavigationApplication.types'
import { IOnboardingCarousel } from '~/@types/entities/OnboardingEntity.types'
import Button from '~/components/Button/ButtonComponent'
import Carousel from '~/components/Carousel/CarouselComponent'
import translate from '~/lib/i18n/i18n'
import {
  Container,
  ContainerImage,
  Body,
  ButtonView,
} from '~/screens/Onboarding/OnboardingScreen.styles'
import { DefaultTitle } from '~/theme/DefaultStyles'
import { verticalScale } from '~/utils/scaling'

export type TOnboardingProps = StackScreenProps<TStackScreens, 'Onboarding'>

const carouselInfos: IOnboardingCarousel[] = [
  {
    title: translate('Onboarding.slides.title_01_slide_01'),
    subTitle: translate('Onboarding.slides.title_02_slide_01'),
  },
  {
    title: translate('Onboarding.slides.title_01_slide_02'),
    subTitle: translate('Onboarding.slides.title_02_slide_02'),
  },
  {
    title: translate('Onboarding.slides.title_01_slide_03'),
    subTitle: translate('Onboarding.slides.title_02_slide_03'),
  },
]

const bgImage =
  Platform.OS === 'ios'
    ? require('~/assets/images/bg-01-ios.png')
    : require('~/assets/images/bg-01.png')

const OnboardingScreen: React.FC<TOnboardingProps> = ({ navigation }) => {
  const carouselInfosItems = useMemo(() => {
    return (
      carouselInfos?.length > 0 &&
      carouselInfos?.map((item, index) => (
        <Body key={index}>
          <DefaultTitle
            color="tertiary"
            fontSize="title"
            marginTop={verticalScale(14)}
            marginBottom={verticalScale(10)}
          >
            {item.title}
          </DefaultTitle>
          <DefaultTitle
            isBold
            color="tertiary"
            fontSize="title"
            marginBottom={verticalScale(40)}
          >
            {item.subTitle}
          </DefaultTitle>
        </Body>
      ))
    )
  }, [])

  return (
    <Container>
      <ContainerImage source={bgImage}>
        <Carousel
          scrollEnabled
          itemsPerInterval={1}
          items={carouselInfosItems}
          testID="Carousel infos"
          showBullets
          colorBullet="sextanary"
          colorBulletActive="tertiary"
        />
        <ButtonView>
          <Button
            text={translate('Onboarding.button_create_account')}
            bgColor="transparent"
            color="sextanary"
            borderColor="sextanary"
            testID="Button enter create account"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            text={translate('Onboarding.button_login')}
            bgColor="sextanary"
            color="primary"
            testID="Button enter login"
            onPress={() => navigation.navigate('Login')}
          />
        </ButtonView>
      </ContainerImage>
    </Container>
  )
}

export default OnboardingScreen
