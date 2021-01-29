import { Platform } from 'react-native'

import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  position: relative;
`
export const Arrow = styled.View`
  bottom: 0;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
`

export const ArrowLeft = styled.View`
  left: 0;
`

export const ArrowRight = styled.View`
  right: 0;
`

export const CarrouselScrollView = styled.ScrollView`
  display: flex;
  flex-direction: row;
`

export const Bullets = styled.View`
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding-top: 10px;
`

export const Bullet = styled.Text`
  padding-horizontal: ${Platform.OS === 'android' ? '3px' : '0'};
  font-size: ${Platform.OS === 'android' ? '48px;' : '53px'};
  color: ${({ theme, interval, i, colorBulletActive, colorBullet }) =>
    interval === i
      ? theme.colors.background[colorBulletActive]
      : theme.colors.background[colorBullet]};
`
