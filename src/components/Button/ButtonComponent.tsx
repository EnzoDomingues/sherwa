/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import LottieView from 'lottie-react-native'

import {
  ButtonContainer,
  Title,
  ButtonFeedback,
} from '~/components/Button/ButtonComponent.style'
import {
  EButtonLinearHeight,
  EButtonWidth,
  IButtomProps,
} from '~/components/Button/ButtonComponent.types'
import { darkTheme } from '~/theme/variables'

const ButtonComponent: FunctionComponent<IButtomProps> = ({
  testID,
  text,
  onPress,
  width,
  height,
  borderColor,
  bgColor,
  isTitleBold,
  isUnderline,
  color,
  disabled,
  marginTop,
  marginBottom,
  justifyContent,
  linearGradient,
  colorGradientLeft,
  colorGradientRight,
  loading,
}) => {
  return (
    <ButtonFeedback
      testID={`${testID} touchable`}
      disabled={disabled}
      onPress={onPress}
    >
      {linearGradient ? (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[colorGradientLeft, colorGradientRight]}
          style={{
            width: EButtonWidth[width] ?? '48%',
            borderRadius: darkTheme.borderRadiusLinear,
            height: EButtonLinearHeight[height] ?? 48,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: marginTop ?? 0,
            marginBottom: marginBottom ?? 0,
            opacity: disabled ? 0.5 : 1,
          }}
        >
          {!loading ? (
            <Title
              color={color}
              isTitleBold={isTitleBold}
              testID={`${testID} text`}
            >
              {text}
            </Title>
          ) : (
            <LottieView
              style={{
                width: 130,
                height: 130,
                alignSelf: 'center',
              }}
              source={require('~/assets/lottie/loading.json')}
              autoPlay
              loop
            />
          )}
        </LinearGradient>
      ) : (
        <ButtonContainer
          testID={`${testID} container`}
          width={width}
          height={height}
          borderColor={borderColor}
          bgColor={bgColor}
          marginTop={marginTop}
          disabled={disabled}
          marginBottom={marginBottom}
          justifyContent={justifyContent}
        >
          {text && (
            <Title
              color={color}
              isTitleBold={isTitleBold}
              isUnderline={isUnderline}
              testID={`${testID} text`}
            >
              {text}
            </Title>
          )}
        </ButtonContainer>
      )}
    </ButtonFeedback>
  )
}

ButtonComponent.defaultProps = {
  isTitleBold: true,
}

export default ButtonComponent
