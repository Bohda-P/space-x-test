// Assets
import { useLocation } from 'react-router-dom';
import { Logo as LogoImage } from '../../assets/images';
import { Heart } from '../../assets/svg';
import { palettes } from '../../styles/palettes';
// Styled
import {
  Container,
  FavoriteButton,
  Logo,
  LogoContainer,
  Menu,
  MenuItem,
  SignIn,
  ButtonContainer,
} from './navigation-bar.styled';

const NavigationBarComponent: React.FC = () => {
  const location = useLocation();
  const isFavorites = location.pathname === '/favorites';

  return (
    <Container>
      <LogoContainer to="/">
        <Logo src={LogoImage} />
      </LogoContainer>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/tours">Tours</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/help">Help</MenuItem>
      </Menu>
      <ButtonContainer>
        <FavoriteButton to="/favorites">
          {/* @ts-ignore */}
          <Heart color={isFavorites ? palettes.white : palettes.mainText} />
        </FavoriteButton>
        <SignIn title="Sign In" />
      </ButtonContainer>
    </Container>
  );
};

export default NavigationBarComponent;
