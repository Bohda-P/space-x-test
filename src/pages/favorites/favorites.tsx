// Components
import { Slider } from '../../components';
import { useFavoriteTours } from '../../store/hooks';
import { Background } from './components';
// Styled
import { ClearAllTitle, Container, ContentContainer } from './favorites.styled';

const Favorites: React.FC = () => {
  const { favoriteTours, clearFavorite, removeFromFavorite } = useFavoriteTours();

  return (
    <Container>
      <Background />
      <ContentContainer>
        <ClearAllTitle onClick={clearFavorite}>Clear All</ClearAllTitle>
        <Slider
          toursData={favoriteTours}
          onFavoriteCardButtonClick={removeFromFavorite}
          isFavorite
        />
      </ContentContainer>
    </Container>
  );
};

export default Favorites;
