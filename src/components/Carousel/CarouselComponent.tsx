/* eslint-disable no-undef */
import React, {
  ReactNode,
  useState,
  useEffect,
  useMemo,
  useImperativeHandle,
  forwardRef,
  useRef,
  ForwardRefRenderFunction,
} from 'react'
import { View, ScrollView, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Container,
  Arrow,
  ArrowLeft,
  ArrowRight,
  CarrouselScrollView,
  Bullets,
  Bullet,
} from '~/components/Carousel/CarouselComponent.style'

interface ICarouselProps {
  items: JSX.Element[]
  scrollEnabled: boolean
  itemsPerInterval?: number
  onChange?: (index: number) => void
  showBullets?: boolean
  showArrows?: boolean
  testID?: string
  colorBulletActive?: string
  colorBullet?: string
}

export interface ICarouselRef {
  onScrollNext(): void
  onScrollPrev(): void
}

const CarouselComponent: ForwardRefRenderFunction<
  ICarouselRef,
  ICarouselProps
> = (
  {
    items,
    scrollEnabled,
    itemsPerInterval,
    onChange,
    showBullets,
    showArrows,
    testID,
    colorBulletActive,
    colorBullet,
  },
  ref,
) => {
  const rangeInterval = !itemsPerInterval ? 1 : itemsPerInterval
  const carouselRef: React.LegacyRef<ScrollView> = useRef(null)

  const [interval, setInterval] = useState(1)
  const [intervals, setIntervals] = useState(1)
  const [width, setWidth] = useState(0)
  const [bullets, setBullets] = useState<ReactNode[]>([])

  useImperativeHandle(ref, () => ({
    onScrollNext() {
      handleScroll('next')
    },
    onScrollPrev() {
      handleScroll('prev')
    },
  }))

  const handleSize = (width: number) => {
    setWidth(width)
    const totalItems = items.length
    setIntervals(Math.ceil(totalItems / rangeInterval))
  }

  const handleScroll = (type: 'prev' | 'next') => {
    if (items.length <= 1) {
      return
    }

    const scrollInterval = Math.ceil(width) / items.length
    const posX = Math.ceil(scrollInterval * interval)

    const x = type === 'next' ? posX : posX * -1
    const y = 0

    carouselRef.current.scrollTo({ x, y, animated: true })
  }

  const handleGetInterval = (offset: number) => {
    for (let i = 1; i <= intervals; i++) {
      if (Math.ceil(offset) < Math.ceil((width / intervals) * i)) {
        return i
      }

      if (i === intervals) {
        return i
      }
    }
  }

  const itemsWidthInterval: number = useMemo(() => {
    return 100 / intervals
  }, [intervals])

  useEffect(() => {
    const bullets: ReactNode[] = []

    for (let i = 1; i <= items.length; i++) {
      if (interval === i && onChange) {
        onChange(i - 1)
      }

      bullets.push(
        <Bullet
          key={i}
          i={i}
          colorBulletActive={colorBulletActive}
          colorBullet={colorBullet}
          interval={interval}
        >
          &bull;
        </Bullet>,
      )
    }

    setBullets(bullets)
  }, [colorBullet, colorBulletActive, interval, items.length, onChange])

  return (
    <Container>
      <CarrouselScrollView
        ref={carouselRef}
        scrollEnabled={scrollEnabled}
        horizontal={true}
        contentContainerStyle={{
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={w => handleSize(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width)
          setInterval(handleGetInterval(data.nativeEvent.contentOffset.x))
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="normal"
        testID={testID || 'Carousel'}
      >
        {items.length > 0 &&
          items.map((item, index) => (
            <View
              key={index}
              testID={`Carousel item view ${index}`}
              style={{ width: `${itemsWidthInterval}%` }}
            >
              {item}
            </View>
          ))}
      </CarrouselScrollView>

      {items.length > 1 && showBullets && (
        <Bullets testID="Carousel bullets view">{bullets}</Bullets>
      )}

      {items.length > 1 && showArrows && (
        <Arrow>
          <TouchableNativeFeedback
            testID="Carousel left arrow button"
            onPress={() => handleScroll('prev')}
            disabled={interval <= 1}
          >
            <ArrowLeft>
              <Icon
                name="keyboard-arrow-left"
                size={55}
                color={interval <= 1 ? '#c9c8c8' : '#fff'}
                light
              />
            </ArrowLeft>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            testID="Carousel right arrow button"
            onPress={() => handleScroll('next')}
            disabled={interval === items?.length}
          >
            <ArrowRight>
              <Icon
                name="keyboard-arrow-right"
                size={55}
                color={interval === items?.length ? '#c9c8c8' : '#fff'}
              />
            </ArrowRight>
          </TouchableNativeFeedback>
        </Arrow>
      )}
    </Container>
  )
}

export default forwardRef(CarouselComponent)
