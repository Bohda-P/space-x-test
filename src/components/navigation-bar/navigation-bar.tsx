// Assets
import { useLocation } from 'react-router-dom';
import { Logo as LogoImage } from '../../assets/images';
import { Heart, WhiteHeart } from '../../assets/svg';
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
  Image,
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
          <Image src={isFavorites ? WhiteHeart : Heart} />
        </FavoriteButton>
        <SignIn title="Sign In" />
      </ButtonContainer>
    </Container>
  );
};

export default NavigationBarComponent;
