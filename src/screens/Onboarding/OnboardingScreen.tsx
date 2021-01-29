import React, { useMemo } from 'react'

import { StackScreenProps } from '@react-navigation/stack'
import { ImageBackground } from 'react-native'

import { TStackScreens } from '~/@types/application/NavigationApplication.types'
import { IOnboardingCarousel } from '~/@types/entities/OnboardingEntity.types'
import Button from '~/components/Button/ButtonComponent'
import Carousel from '~/components/Carousel/CarouselComponent'
import translate from '~/lib/i18n/i18n'
import {
  Container,
  ContainerImage,
  Title,
  Body,
  ImageCarousel,
  ButtonView,
} from '~/screens/Onboarding/OnboardingScreen.styles'

export type TOnboardingProps = StackScreenProps<TStackScreens, 'Onboarding'>

const carouselInfos: IOnboardingCarousel[] = [
  {
    title: translate('Onboarding.slides.title_slide_01'),
  },
  {
    title: translate('Onboarding.slides.title_slide_02'),
  },
  {
    title: translate('Onboarding.slides.title_slide_03'),
  },
]


const OnboardingScreen: React.FC<TOnboardingProps> = ({ navigation }) => {
  const carouselInfosItems = useMemo(() => {
    return (
      carouselInfos?.length > 0 &&
      carouselInfos?.map((item, index) => (
        <Body key={index}>
          <Title>{item.title}</Title>
        </Body>
      ))
    )
  }, [])

  return (
    <Container>
      <ContainerImage source={require('~/assets/images/bg-01.png')}>
        <Carousel
          scrollEnabled
          itemsPerInterval={1}
          items={carouselInfosItems}
          testID="Carousel infos"
          showArrows
          showBullets
          colorBullet="sextanary"
          colorBulletActive="quintenary"
        />
        <ButtonView>
          <Button
            text={translate('Onboarding.button_login')}
            width={'large'}
            testID="Button enter login"
            onPress={() => navigation.navigate('Login')}
          />
        </ButtonView>
        </ContainerImage>
      </Container>
  )
}

export default OnboardingScreen
