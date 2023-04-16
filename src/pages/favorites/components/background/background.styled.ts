import styled, { css } from 'styled-components';
// Assets
import { Astronaut } from '../../../../assets/images';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 440px;
  position: relative;
  width: 100%;
`;

export const Image = styled.div`
  background-image: url(${Astronaut});
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: -2;
`;

export const OpacityContainer = styled.div(
  ({ theme: { palettes } }) => css`
    position: absolute;
    inset: 0;
    background: ${palettes.mainText};
    opacity: 0.48;
    z-index: -1;
  `
);

export const Title = styled.h1(
  ({ theme: { typography, palettes } }) => css`
    color: ${palettes.white};
    ${typography.title};
    text-transform: uppercase;
  `
);
