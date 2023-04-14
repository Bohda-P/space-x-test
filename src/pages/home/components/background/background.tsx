import React, { useState } from 'react';
import { APP_IMAGES } from '../../../../constants';
import { Bullet, BulletContainer, Container, Slide, BulletBody } from './background.styled';

const Background: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBulletClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <Slide image={APP_IMAGES[activeIndex]}></Slide>

      <BulletContainer>
        {APP_IMAGES.map((_, index) => (
          <Bullet key={index} onClick={() => handleBulletClick(index)}>
            <BulletBody isActive={index === activeIndex} />
          </Bullet>
        ))}
      </BulletContainer>
    </Container>
  );
};

export default Background;
