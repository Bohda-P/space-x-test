import React from 'react';
import { Container, Image, OpacityContainer, Title } from './background.styled';

const Background: React.FC = () => {
  return (
    <Container>
      <Image />
      <OpacityContainer />
      <Title>favourites</Title>
    </Container>
  );
};

export default Background;
