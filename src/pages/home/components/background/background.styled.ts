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
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OpacityContainer = styled.div(
  ({ theme: { palettes } }) => css`
    height: 100vh;
    position: absolute;
    inset: 0;
    background: ${palettes.mainText};
    opacity: 0.48;
    z-index: -1;
  `
);

export const Slide = styled.div<SlideProps>`
  background-image: url(${({ image }) => image});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -2;
`;

export const BulletContainer = styled.div(
  () => css`
    position: absolute;
    left: calc(50% - 40px);
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 100;
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
    margin-right: 8px;
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
