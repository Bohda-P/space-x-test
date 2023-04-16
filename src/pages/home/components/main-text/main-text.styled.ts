import styled, { css } from 'styled-components';
// Components
import { Link } from 'react-scroll';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Title = styled.h1(
  ({ theme: { typography, palettes } }) => css`
    color: ${palettes.white};
    ${typography.title};
    margin-top: -90px;
    text-transform: uppercase;
    text-align: center;
  `
);

export const Subtitle = styled.h1(
  ({ theme: { typography, palettes } }) => css`
    color: ${palettes.white};
    ${typography.huge};
    text-transform: uppercase;
    @media (max-width: 1400px) {
      font-size: 240px;
      line-height: 250px;
    }
    @media (max-width: 900px) {
      font-size: 180px;
      line-height: 190px;
    }
  `
);

export const MainFooterTextContainer = styled(Link)`
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  z-index: 10000;
  text-decoration: none;
`;

export const MainFooterText = styled.p(
  ({ theme: { palettes, typography } }) => css`
    color: ${palettes.white};
    ${typography.bodyLarge};
    text-shadow: 0px 4px 4px #000;
    margin-right: 8px;
  `
);

export const ArrowDownImage = styled.img``;
