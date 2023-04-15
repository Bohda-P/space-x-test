// Hooks
import { useFavoriteTours, useToursData } from '../../store/hooks';
// Components
import { Background, MainText, PaginationButtons } from './components';
// Styled
import { Container, TitleContainer, ToursTitle, ToursContainer } from './home.styled';
import { useState } from 'react';
import { Slider } from '../../components';
// Types
import Swiper from 'swiper';

const Home: React.FC = () => {
  const { tours } = useToursData();
  const { addToFavorite } = useFavoriteTours();
  const [swiper, setSwiper] = useState<Swiper>();

  const handleSetSwiper = (swipe: Swiper) => {
    setSwiper(swipe);
  };

  return (
    <>
      <Background />
      <Container>
        <MainText />
        <ToursContainer>
          <TitleContainer>
            <ToursTitle id="tours">popular tours</ToursTitle>
            <PaginationButtons
              onLeftClick={() => swiper.slidePrev()}
              onRightClick={() => swiper.slideNext()}
            />
          </TitleContainer>
          <Slider
            toursData={tours?.rockets}
            forwardSwiper={handleSetSwiper}
            onFavoriteCardButtonClick={addToFavorite}
          />
        </ToursContainer>
      </Container>
    </>
  );
};

export default Home;
