import React from 'react';
// Assets
import { ArrowLeft, ArrowRight } from '../../../../assets/svg';
// Styled
import { Button, Container, Image } from './pagination-buttons.styled';

interface PaginationButtonsProps {
  onLeftClick: () => void;
  onRightClick: () => void;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({ onLeftClick, onRightClick }) => {
  return (
    <Container>
      <Button onClick={onLeftClick}>
        <Image src={ArrowLeft} alt="arrow-left" />
      </Button>
      <Button onClick={onRightClick}>
        <Image src={ArrowRight} alt="arrow-right" />
      </Button>
    </Container>
  );
};

export default PaginationButtons;
