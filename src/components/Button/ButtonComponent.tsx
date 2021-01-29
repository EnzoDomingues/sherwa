import React, { FunctionComponent } from 'react'

import {
  ButtonContainer,
  Title,
  ButtonFeedback,
} from '~/components/Button/ButtonComponent.style'
import { IButtomProps } from '~/components/Button/ButtonComponent.types'

const ButtonComponent: FunctionComponent<IButtomProps> = ({
  testID,
  text,
  onPress,
  width,
  height,
  borderColor,
  bgColor,
  isTitleBold,
  color,
  disabled,
  marginTop,
  marginBottom,
  justifyContent,
}) => {
  return (
    <ButtonFeedback
      testID={`${testID} touchable`}
      disabled={disabled}
      onPress={onPress}
    >
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
            testID={`${testID} text`}
          >
            {text}
          </Title>
        )}
      </ButtonContainer>
    </ButtonFeedback>
  )
}

ButtonComponent.defaultProps = {
  isTitleBold: true,
}

export default ButtonComponent
