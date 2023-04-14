import styled, { css, keyframes } from 'styled-components';

/**
 * Types
 */

interface SlideProps {
  image: string;
}

interface BulletProps {
  isActive: boolean;
}

/**
 * Components
 */

export const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slide = styled.div<SlideProps>`
  background-image: url(${({ image }) => image});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const BulletContainer = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
);

export const Bullet = styled.div(
  ({ theme: { palettes } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 0 8px;
    cursor: pointer;
    border: 2px solid ${palettes.white};
    background-color: transparent;
    transition: background-color 0.3s ease;
  `
);

export const BulletBody = styled.div<BulletProps>(
  ({ isActive, theme: { palettes } }) => css`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${isActive ? palettes.white : 'transparent'};
    transition: background-color 0.3s ease;
  `
);
