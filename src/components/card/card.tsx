import React from 'react';
// Assets
import { Bin, Heart } from '../../assets/svg';
// Styled
import {
  Container,
  Image,
  ContentContainer,
  Title,
  TextContainer,
  Subtitle,
  ButtonsContainer,
  BuyButton,
  FavoriteButton,
  FavoriteButtonImage,
} from './card.styled';

interface CardContainer {
  image: string;
  title: string;
  subtitle: string;
  onFavoriteClick: () => void;
  isFavorite?: boolean;
}

const Card: React.FC<CardContainer> = ({ image, title, subtitle, onFavoriteClick, isFavorite }) => {
  const hasContent = title && subtitle;
  return (
    <Container>
      {hasContent && (
        <>
          <Image src={image} alt="tour-image" />
          <ContentContainer>
            <TextContainer>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </TextContainer>
            <ButtonsContainer>
              <BuyButton title="Buy" />
              <FavoriteButton onClick={onFavoriteClick}>
                <FavoriteButtonImage src={isFavorite ? Bin : Heart} alt="favorite-button-image" />
              </FavoriteButton>
            </ButtonsContainer>
          </ContentContainer>
        </>
      )}
    </Container>
  );
};

export default Card;
