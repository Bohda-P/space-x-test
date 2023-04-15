import React from 'react';
// Assets
import { ArrowDown } from '../../../../assets/svg';
// Styled
import {
  Container,
  Title,
  Subtitle,
  MainFooterTextContainer,
  MainFooterText,
  ArrowDownImage,
} from './main-text.styled';

const MainText: React.FC = () => {
  return (
    <Container>
      <Title>The space is waiting for</Title>
      <Subtitle>YOU</Subtitle>

      <MainFooterTextContainer to="tours" smooth duration={500}>
        <MainFooterText>Explore tours</MainFooterText>
        <ArrowDownImage src={ArrowDown} alt="arrow-down" />
      </MainFooterTextContainer>
    </Container>
  );
};

export default MainText;
