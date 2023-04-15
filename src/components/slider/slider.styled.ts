import styled, { css } from 'styled-components';

interface BulletProps {
  isActive: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

export const BulletContainer = styled.div(
  () => css`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -70px;
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
    border: 2px solid ${palettes.black};
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
    background-color: ${isActive ? palettes.black : 'transparent'};
    transition: background-color 0.3s ease;
  `
);
