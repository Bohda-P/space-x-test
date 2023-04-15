import React, { forwardRef, useEffect, useState } from 'react';
// Constants
import { APP_IMAGES } from '../../constants';
// Components
import SwiperProps, { Virtual } from 'swiper';
import { Card } from '../card';
// Styled
import { Bullet, BulletBody, BulletContainer, CarouselWrapper, Container } from './slider.styled';
// Utils
import { groupByThree } from './utils';
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
// Hooks
import { Rocket } from '../../store/tours';

interface SliderPros {
  toursData: Rocket[];
  isFavorite?: boolean;
  onFavoriteCardButtonClick: (tour: string) => void;
  forwardSwiper?: (swipe: SwiperProps) => void;
}

const Slider: React.FC<SliderPros> = ({
  toursData,
  onFavoriteCardButtonClick,
  isFavorite,
  forwardSwiper,
}) => {
  const data = groupByThree(toursData);

  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperProps>();

  useEffect(() => {
    if (!!swiper && !!forwardSwiper) {
      forwardSwiper(swiper);
    }
  }, [swiper]);

  return (
    <Container>
      <CarouselWrapper>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
          onSwiper={(swiper) => setSwiper(swiper)}
          modules={[Virtual]}
        >
          {data.map((tours, idx) => (
            <SwiperSlide
              virtualIndex={idx}
              key={tours.toString()}
              style={{ display: 'flex', gap: 60 }}
            >
              {tours.map((item, index) => (
                <Card
                  key={item?.id}
                  title={item?.name}
                  subtitle={item?.description}
                  image={APP_IMAGES[index]}
                  onFavoriteClick={() => {
                    onFavoriteCardButtonClick(item.id);
                  }}
                  isFavorite={isFavorite}
                />
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselWrapper>
      <BulletContainer>
        {data.map((_, index) => (
          <Bullet key={index} onClick={() => swiper.slideTo(index)}>
            <BulletBody isActive={index === activeIndex} />
          </Bullet>
        ))}
      </BulletContainer>
    </Container>
  );
};

export default Slider;
